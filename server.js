const express = require('express');
const path = require('path');
const crypto = require('crypto');
const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ['GET', 'POST']
  },
  transports: ['websocket', 'polling'],
  pingInterval: 25000,
  pingTimeout: 60000,
  maxHttpBufferSize: 1e6
});

const DATA_DIR =
  process.env.DATA_DIR || path.join(__dirname, 'data');

const DB_FILE = path.join(DATA_DIR, 'r2-data.json');

fs.mkdirSync(DATA_DIR, { recursive: true });

let db = {
  tournaments: {},
  usedTournamentCodes: {}
};

try {
  if (fs.existsSync(DB_FILE)) {
    const loaded = JSON.parse(
      fs.readFileSync(DB_FILE, 'utf8')
    );

    if (loaded && typeof loaded === 'object') {
      db = {
        tournaments: loaded.tournaments || {},
        usedTournamentCodes: loaded.usedTournamentCodes || {}
      };
    }
  }
} catch (e) {
  console.error('DB load failed:', e.message);
}

let saveTimer = null;

function saveDb() {
  clearTimeout(saveTimer);

  saveTimer = setTimeout(() => {
    try {
      const temp = DB_FILE + '.tmp';

      fs.writeFileSync(
        temp,
        JSON.stringify(db, null, 2),
        'utf8'
      );

      fs.renameSync(temp, DB_FILE);
    } catch (e) {
      console.error('DB save failed:', e.message);
    }
  }, 150);
}

const rooms = new Map();
const socketSessions = new Map();
const tournamentMatches = new Map();

app.use(express.json({ limit: '256kb' }));

/* =========================================================
   STATIC FILES
========================================================= */

const PUBLIC_DIR = fs.existsSync(
  path.join(__dirname, 'public')
)
  ? path.join(__dirname, 'public')
  : __dirname;

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  const publicIndex = path.join(
    __dirname,
    'public',
    'index.html'
  );

  const rootIndex = path.join(
    __dirname,
    'index.html'
  );

  if (fs.existsSync(publicIndex)) {
    return res.sendFile(publicIndex);
  }

  if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  }

  return res
    .status(404)
    .send(
      '<h2 style="text-align:center;margin-top:50px;">لم يتم العثور على ملف index.html</h2>'
    );
});

/* =========================================================
   HELPERS
========================================================= */

const roomCode = () =>
  crypto
    .randomBytes(4)
    .toString('hex')
    .toUpperCase();

const tournamentCode = () =>
  crypto
    .randomBytes(5)
    .toString('hex')
    .toUpperCase();

const matchId = () =>
  'M' +
  Date.now().toString(36).toUpperCase() +
  crypto.randomBytes(3).toString('hex').toUpperCase();

function clean(v) {
  return String(v || '')
    .trim()
    .toUpperCase();
}

function safeName(v, fallback = 'لاعب') {
  const name = String(v || '')
    .trim()
    .slice(0, 40);

  return name || fallback;
}

function validateGame(gameName) {
  const g = String(gameName || '')
    .trim()
    .toLowerCase();

  return g.length > 0 ? g : 'auction';
}

const tournamentSizes = [16, 32, 64, 127];

function publicRoom(r) {
  return {
    code: r.code,
    game: r.game,
    players: r.players.size,
    maxPlayers: 2,

    status:
      r.status ||
      (r.players.size >= 2
        ? 'ready'
        : 'waiting'),

    passwordProtected: !!r.password,

    createdAt: r.createdAt,

    matchId: r.matchId || null,

    eventNumber: r.eventNumber || 0,

    startedAt: r.startedAt || null,

    finishedAt: r.finishedAt || null
  };
}

function createRoom(game, password = '', options = {}) {
  let c;

  do {
    c = roomCode();
  } while (rooms.has(c));

  const validGame = validateGame(game);

  const r = {
    code: c,

    game: validGame,

    password: String(password || ''),

    createdAt: Date.now(),

    players: new Set(),

    playerInfo: new Map(),

    state: {},

    eventNumber: 0,

    status: 'waiting',

    startedAt: null,

    finishedAt: null,

    matchId: options.matchId || null,

    tournamentId: options.tournamentId || null,

    tournamentRound: options.tournamentRound || null,

    disconnectTimers: new Map()
  };

  rooms.set(c, r);

  return r;
}

/* =========================================================
   ROOM STATE
========================================================= */

function serializeRoomState(r) {
  return {
    code: r.code,
    game: r.game,
    status: r.status,

    players: [...r.playerInfo.values()].map(p => ({
      id: p.id,
      name: p.name,
      joinedAt: p.joinedAt,
      connected: r.players.has(p.id)
    })),

    state: r.state || {},

    eventNumber: r.eventNumber,

    startedAt: r.startedAt,

    finishedAt: r.finishedAt,

    matchId: r.matchId,

    tournamentId: r.tournamentId,

    tournamentRound: r.tournamentRound
  };
}

function broadcastRoomState(r) {
  io.to(r.code).emit(
    'room:state',
    serializeRoomState(r)
  );
}

function startRoom(r) {
  if (r.players.size < 2) {
    r.status = 'waiting';
    return false;
  }

  if (r.status === 'playing') {
    return true;
  }

  r.status = 'playing';
  r.startedAt = Date.now();
  r.state = r.state || {};

  io.to(r.code).emit(
    'game:start',
    {
      code: r.code,
      game: r.game,
      matchId: r.matchId,
      players: [...r.playerInfo.values()].map(p => ({
        id: p.id,
        name: p.name
      })),
      state: r.state,
      startedAt: r.startedAt
    }
  );

  broadcastRoomState(r);

  return true;
}

function finishRoom(r, winnerId = null, result = {}) {
  r.status = 'finished';
  r.finishedAt = Date.now();

  r.state = {
    ...(r.state || {}),
    result: {
      winnerId,
      ...result
    }
  };

  io.to(r.code).emit(
    'game:finished',
    {
      code: r.code,
      matchId: r.matchId,
      winnerId,
      result,
      finishedAt: r.finishedAt
    }
  );

  broadcastRoomState(r);

  if (r.tournamentId && r.matchId) {
    processTournamentMatchResult(
      r.tournamentId,
      r.matchId,
      winnerId
    );
  }
}

/* =========================================================
   HEALTH
========================================================= */

app.get('/api/health', (req, res) => {
  res
    .set('Cache-Control', 'no-store')
    .json({
      ok: true,

      version: '10.0.0',

      multiplayer: true,

      socketio: true,

      rooms: rooms.size,

      activeMatches: [
        ...rooms.values()
      ].filter(r => r.status === 'playing').length,

      tournaments:
        Object.keys(db.tournaments).length,

      uptime: Math.round(
        process.uptime()
      ),

      time: Date.now()
    });
});

/* =========================================================
   HTTP ROOMS API
========================================================= */

app.post('/api/rooms', (req, res) => {
  const game = validateGame(req.body.game);

  const password = String(
    req.body.password || ''
  );

  if (password.length > 64) {
    return res.status(400).json({
      error: 'كلمة السر طويلة'
    });
  }

  const r = createRoom(
    game,
    password
  );

  res.json({
    ok: true,
    ...publicRoom(r)
  });
});

app.post('/api/rooms/:code/join', (req, res) => {
  const r = rooms.get(
    clean(req.params.code)
  );

  if (!r) {
    return res.status(404).json({
      error:
        'كود الغرفة غير موجود أو انتهت صلاحيته'
    });
  }

  if (r.players.size >= 2) {
    return res.status(409).json({
      error: 'الغرفة ممتلئة'
    });
  }

  if (
    r.password &&
    String(req.body.password || '') !==
      r.password
  ) {
    return res.status(403).json({
      error: 'كلمة السر غير صحيحة'
    });
  }

  res.json({
    ok: true,
    ...publicRoom(r)
  });
});

app.get('/api/rooms/:code', (req, res) => {
  const r = rooms.get(
    clean(req.params.code)
  );

  if (!r) {
    return res.status(404).json({
      error: 'غير موجود'
    });
  }

  res.json(publicRoom(r));
});

/* =========================================================
   TOURNAMENT HELPERS
========================================================= */

function publicTournament(t) {
  return {
    id: t.id,
    name: t.name,
    game: t.game,
    size: t.size,

    players: t.players.length,

    status: t.status,

    createdAt: t.createdAt,

    startedAt: t.startedAt || null,

    currentRound: t.currentRound || null,

    matches: t.matches || [],

    joinCodesRemaining: t.codes.filter(
      c => !db.usedTournamentCodes[c]
    ).length
  };
}

function makeTournamentMatches(t) {
  const players = [...t.players];

  for (
    let i = players.length - 1;
    i > 0;
    i--
  ) {
    const j =
      Math.floor(
        Math.random() * (i + 1)
      );

    [
      players[i],
      players[j]
    ] = [
      players[j],
      players[i]
    ];
  }

  const matches = [];

  for (
    let i = 0;
    i < players.length;
    i += 2
  ) {
    const p1 = players[i];
    const p2 = players[i + 1] || null;

    const m = {
      id: matchId(),

      player1: p1
        ? {
            name: p1.name,
            socketId: null
          }
        : null,

      player2: p2
        ? {
            name: p2.name,
            socketId: null
          }
        : null,

      winner: null,

      status: p2 ? 'pending' : 'bye',

      roomCode: null,

      round: t.currentRound,

      createdAt: Date.now()
    };

    matches.push(m);
  }

  t.matches = matches;

  return matches;
}

function startTournament(t) {
  if (t.status === 'playing') {
    return;
  }

  t.status = 'playing';

  t.startedAt = Date.now();

  t.currentRound = 1;

  const matches =
    makeTournamentMatches(t);

  /*
   * BYE:
   * اللاعب الذي لا يملك خصماً يتأهل مباشرة.
   */
  for (const m of matches) {
    if (
      m.status === 'bye' &&
      m.player1
    ) {
      m.winner = m.player1.name;
    }
  }

  saveDb();

  /*
   * إرسال القرعة مباشرة لكل المشاركين.
   */
  io.to('tournament:' + t.id).emit(
    'tournament:draw',
    {
      tournamentId: t.id,
      round: t.currentRound,
      matches: t.matches
    }
  );

  createTournamentRooms(t);
}

function createTournamentRooms(t) {
  for (const m of t.matches) {
    if (
      m.status !== 'pending' ||
      !m.player1 ||
      !m.player2
    ) {
      continue;
    }

    const r = createRoom(
      t.game,
      '',
      {
        matchId: m.id,
        tournamentId: t.id,
        tournamentRound: t.currentRound
      }
    );

    m.roomCode = r.code;

    tournamentMatches.set(
      m.id,
      {
        tournamentId: t.id,
        matchId: m.id,
        roomCode: r.code
      }
    );
  }

  saveDb();

  io.to('tournament:' + t.id).emit(
    'tournament:matches',
    {
      tournamentId: t.id,
      round: t.currentRound,
      matches: t.matches
    }
  );
}

function findTournamentPlayer(
  t,
  name
) {
  return t.players.find(
    p =>
      String(p.name)
        .toLowerCase() ===
      String(name)
        .toLowerCase()
  );
}

function processTournamentMatchResult(
  tournamentId,
  matchIdValue,
  winnerId
) {
  const t =
    db.tournaments[tournamentId];

  if (!t) return;

  const m = t.matches.find(
    x => x.id === matchIdValue
  );

  if (!m) return;

  if (m.winner) return;

  let winner = null;

  if (winnerId) {
    const socketPlayer =
      socketSessions.get(winnerId);

    if (socketPlayer) {
      winner =
        socketPlayer.name;
    }
  }

  if (!winner) {
    return;
  }

  m.winner = winner;
  m.status = 'finished';

  const allFinished =
    t.matches.every(
      x =>
        x.status === 'finished' ||
        x.status === 'bye'
    );

  if (!allFinished) {
    saveDb();

    io.to(
      'tournament:' + t.id
    ).emit(
      'tournament:update',
      publicTournament(t)
    );

    return;
  }

  const winners =
    t.matches
      .map(m => {
        if (m.status === 'bye') {
          return m.winner ||
            (m.player1 &&
              m.player1.name);
        }

        return m.winner;
      })
      .filter(Boolean);

  if (winners.length <= 1) {
    t.status = 'finished';

    t.winner =
      winners[0] || null;

    saveDb();

    io.to(
      'tournament:' + t.id
    ).emit(
      'tournament:finished',
      {
        tournamentId: t.id,
        winner: t.winner
      }
    );

    return;
  }

  /*
   * الدور التالي
   */
  t.currentRound =
    Number(t.currentRound || 1) + 1;

  const nextPlayers =
    winners.map(name => ({
      name,
      joinedAt: Date.now()
    }));

  t.players = nextPlayers;

  const nextMatches =
    makeTournamentMatches(t);

  for (const nm of nextMatches) {
    if (
      nm.status === 'bye' &&
      nm.player1
    ) {
      nm.winner =
        nm.player1.name;
    }
  }

  saveDb();

  io.to(
    'tournament:' + t.id
  ).emit(
    'tournament:next-round',
    {
      tournamentId: t.id,
      round: t.currentRound,
      matches: t.matches
    }
  );

  createTournamentRooms(t);
}

/* =========================================================
   TOURNAMENT API
========================================================= */

app.post('/api/tournaments', (req, res) => {
  const name =
    String(req.body.name || '')
      .trim()
      .slice(0, 80);

  const game =
    validateGame(req.body.game);

  const size =
    Number(req.body.size);

  if (!name) {
    return res.status(400).json({
      error: 'اكتب اسم البطولة'
    });
  }

  if (!tournamentSizes.includes(size)) {
    return res.status(400).json({
      error: 'حجم بطولة غير صحيح'
    });
  }

  const id =
    'T' +
    Date.now()
      .toString(36)
      .toUpperCase() +
    crypto
      .randomBytes(2)
      .toString('hex')
      .toUpperCase();

  const codeCount =
    size === 127
      ? 127
      : size - 1;

  const codes = [];

  while (
    codes.length <
    codeCount
  ) {
    const c = tournamentCode();

    if (
      !codes.includes(c) &&
      !db.usedTournamentCodes[c]
    ) {
      codes.push(c);
    }
  }

  const t = {
    id,

    name,

    game,

    size,

    codes,

    players: [
      {
        name: safeName(
          req.body.hostName,
          'أنت'
        ),

        joinedAt: Date.now()
      }
    ],

    status: 'open',

    createdAt: Date.now(),

    startedAt: null,

    currentRound: null,

    matches: [],

    winner: null
  };

  db.tournaments[id] = t;

  saveDb();

  res.status(201).json({
    ok: true,

    tournament:
      publicTournament(t),

    codes
  });
});

app.post(
  '/api/tournaments/join',
  (req, res) => {
    const code = clean(
      req.body.code
    );

    if (!code) {
      return res.status(400).json({
        error: 'اكتب كود الدعوة'
      });
    }

    if (
      db.usedTournamentCodes[code]
    ) {
      return res.status(409).json({
        error: 'الكود مستخدم بالفعل'
      });
    }

    const t =
      Object.values(
        db.tournaments
      ).find(x =>
        x.codes.includes(code)
      );

    if (!t) {
      return res.status(404).json({
        error: 'الكود غير صحيح'
      });
    }

    if (
      t.status !== 'open' ||
      t.players.length >=
        t.size
    ) {
      return res.status(409).json({
        error:
          'البطولة اكتملت أو مغلقة'
      });
    }

    db.usedTournamentCodes[
      code
    ] = {
      tournamentId: t.id,
      usedAt: Date.now()
    };

    t.players.push({
      name: safeName(
        req.body.playerName,
        'لاعب ' +
          (t.players.length + 1)
      ),

      joinedAt: Date.now()
    });

    if (
      t.players.length >=
      t.size
    ) {
      t.status = 'full';

      /*
       * لا توجد رسالة انتظار للقرعة.
       * بمجرد اكتمال العدد تبدأ مباشرة.
       */
      setTimeout(() => {
        const current =
          db.tournaments[t.id];

        if (
          current &&
          current.status === 'full'
        ) {
          startTournament(current);
        }
      }, 50);
    }

    saveDb();

    res.json({
      ok: true,

      tournament:
        publicTournament(t)
    });
  }
);

app.get(
  '/api/tournaments',
  (req, res) => {
    res.json({
      ok: true,

      tournaments:
        Object.values(
          db.tournaments
        )
          .sort(
            (a, b) =>
              b.createdAt -
              a.createdAt
          )
          .slice(0, 50)
          .map(publicTournament)
    });
  }
);

app.get(
  '/api/tournaments/:id',
  (req, res) => {
    const t =
      db.tournaments[
        req.params.id
      ];

    if (!t) {
      return res.status(404).json({
        error:
          'البطولة غير موجودة'
      });
    }

    res.json({
      ok: true,

      tournament: {
        ...publicTournament(t),

        playersList:
          t.players.map(
            p => p.name
          )
      }
    });
  }
);

/* =========================================================
   NEWS
========================================================= */

function decodeXml(s = '') {
  return s
    .replace(
      /<!\[CDATA\[([\s\S]*?)\]\]>/g,
      '$1'
    )
    .replace(/&amp;/g, '&')
    .replace(
      /&quot;/g,
      '"'
    )
    .replace(
      /&#39;/g,
      "'"
    )
    .replace(
      /&lt;/g,
      '<'
    )
    .replace(
      /&gt;/g,
      '>'
    );
}

app.get(
  '/api/news',
  async (req, res) => {
    try {
      const feed =
        'https://news.google.com/rss/search?q=' +
        encodeURIComponent(
          'football OR كرة القدم'
        ) +
        '&hl=ar&gl=EG&ceid=EG:ar';

      const r =
        await fetch(feed, {
          headers: {
            'user-agent':
              'R2-GAMES/10.0'
          }
        });

      if (!r.ok) {
        throw new Error(
          'feed ' + r.status
        );
      }

      const xml =
        await r.text();

      const items = [
        ...xml.matchAll(
          /<item>([\s\S]*?)<\/item>/g
        )
      ]
        .slice(0, 12)
        .map(m => {
          const x = m[1];

          const get = tag => {
            const z =
              x.match(
                new RegExp(
                  '<' +
                    tag +
                    '>([\\s\\S]*?)<\\/' +
                    tag +
                    '>'
                )
              );

            return z
              ? decodeXml(
                  z[1].trim()
                )
              : '';
          };

          return {
            title: get('title'),
            link: get('link'),
            source: get('source'),
            publishedAt:
              get('pubDate')
          };
        })
        .filter(
          x =>
            x.title &&
            x.link
        );

      res
        .set(
          'Cache-Control',
          'no-store'
        )
        .json({
          ok: true,
          items,
          updatedAt: Date.now()
        });
    } catch (e) {
      res.status(503).json({
        ok: false,
        error:
          'تعذر جلب الأخبار مؤقتًا، حاول التحديث بعد قليل.'
      });
    }
  }
);

/* =========================================================
   SOCKET.IO MULTIPLAYER
========================================================= */

io.on('connection', socket => {
  /*
   * تسجيل اللاعب مؤقتاً
   */
  socketSessions.set(
    socket.id,
    {
      id: socket.id,
      name: 'لاعب',
      roomCode: null,
      tournamentId: null
    }
  );

  /* -------------------------------------------------------
     ROOM CREATE
  ------------------------------------------------------- */

  socket.on(
    'room:create',
    (data = {}, cb = () => {}) => {
      const game =
        validateGame(data.game);

      const r =
        createRoom(
          game,
          data.password || ''
        );

      const name =
        safeName(
          data.playerName,
          'اللاعب 1'
        );

      r.players.add(
        socket.id
      );

      r.playerInfo.set(
        socket.id,
        {
          id: socket.id,
          name,
          joinedAt: Date.now()
        }
      );

      socket.join(r.code);

      const session =
        socketSessions.get(
          socket.id
        );

      if (session) {
        session.name = name;
        session.roomCode =
          r.code;
      }

      cb({
        ok: true,
        ...publicRoom(r)
      });

      socket.emit(
        'room:state',
        serializeRoomState(r)
      );
    }
  );

  /* -------------------------------------------------------
     ROOM JOIN
  ------------------------------------------------------- */

  socket.on(
    'room:join',
    (data = {}, cb = () => {}) => {
      const r =
        rooms.get(
          clean(data.code)
        );

      if (!r) {
        return cb({
          ok: false,
          error:
            'كود الغرفة غير موجود أو انتهت صلاحيته'
        });
      }

      if (
        r.players.size >= 2
      ) {
        return cb({
          ok: false,
          error: 'الغرفة ممتلئة'
        });
      }

      if (
        r.password &&
        String(
          data.password || ''
        ) !== r.password
      ) {
        return cb({
          ok: false,
          error:
            'كلمة السر غير صحيحة'
        });
      }

      const name =
        safeName(
          data.playerName,
          'اللاعب 2'
        );

      r.players.add(
        socket.id
      );

      r.playerInfo.set(
        socket.id,
        {
          id: socket.id,
          name,
          joinedAt: Date.now()
        }
      );

      socket.join(r.code);

      const session =
        socketSessions.get(
          socket.id
        );

      if (session) {
        session.name = name;
        session.roomCode =
          r.code;
      }

      cb({
        ok: true,
        ...publicRoom(r)
      });

      io.to(r.code).emit(
        'room:ready',
        publicRoom(r)
      );

      broadcastRoomState(r);

      /*
       * اللاعب الثاني دخل:
       * تبدأ المباراة مباشرة.
       */
      startRoom(r);
    }
  );

  /* -------------------------------------------------------
     GET CURRENT ROOM STATE
  ------------------------------------------------------- */

  socket.on(
    'room:state',
    (data = {}, cb = () => {}) => {
      const r =
        rooms.get(
          clean(data.code)
        );

      if (
        !r ||
        !r.players.has(
          socket.id
        )
      ) {
        return cb({
          ok: false,
          error:
            'غرفة غير صالحة'
        });
      }

      cb({
        ok: true,
        room:
          serializeRoomState(r)
      });
    }
  );

  /* -------------------------------------------------------
     GAME EVENT
  ------------------------------------------------------- */

  socket.on(
    'game:event',
    (data = {}, cb = () => {}) => {
      const r =
        rooms.get(
          clean(data.code)
        );

      if (
        !r ||
        !r.players.has(
          socket.id
        )
      ) {
        return cb({
          ok: false,
          error:
            'غرفة غير صالحة'
        });
      }

      if (
        r.status === 'finished'
      ) {
        return cb({
          ok: false,
          error:
            'المباراة انتهت'
        });
      }

      const type =
        String(
          data.type ||
            'move'
        )
          .trim()
          .slice(0, 60);

      /*
       * رقم متسلسل لكل حركة.
       * هذا يمنع اختلاف ترتيب الأحداث
       * عند وجود Lag.
       */
      r.eventNumber += 1;

      const event = {
        type,

        data:
          data.data &&
          typeof data.data ===
            'object'
            ? data.data
            : {},

        by: socket.id,

        player:
          r.playerInfo.get(
            socket.id
          ) || null,

        sequence:
          r.eventNumber,

        time: Date.now()
      };

      /*
       * حفظ آخر حالة يتم إرسالها
       * من الواجهة.
       */
      if (
        type === 'state:update' &&
        event.data.state
      ) {
        r.state =
          event.data.state;
      }

      /*
       * نتيجة المباراة.
       */
      if (
        type === 'game:finish' ||
        type === 'match:finish'
      ) {
        finishRoom(
          r,
          event.data.winnerId ||
            null,
          event.data.result ||
            {}
        );

        return cb({
          ok: true,
          sequence:
            event.sequence
        });
      }

      /*
       * بث الحدث لكل اللاعبين
       * باستثناء المرسل.
       */
      socket
        .to(r.code)
        .emit(
          'game:event',
          event
        );

      /*
       * إرسال تأكيد للمرسل.
       */
      cb({
        ok: true,
        sequence:
          event.sequence
      });
    }
  );

  /* -------------------------------------------------------
     GAME STATE UPDATE
  ------------------------------------------------------- */

  socket.on(
    'game:state',
    (data = {}, cb = () => {}) => {
      const r =
        rooms.get(
          clean(data.code)
        );

      if (
        !r ||
        !r.players.has(
          socket.id
        )
      ) {
        return cb({
          ok: false,
          error:
            'غرفة غير صالحة'
        });
      }

      if (
        !data.state ||
        typeof data.state !==
          'object'
      ) {
        return cb({
          ok: false,
          error:
            'حالة اللعبة غير صالحة'
        });
      }

      r.state =
        data.state;

      r.eventNumber += 1;

      const packet = {
        state: r.state,

        sequence:
          r.eventNumber,

        by: socket.id,

        time: Date.now()
      };

      socket
        .to(r.code)
        .emit(
          'game:state',
          packet
        );

      cb({
        ok: true,
        sequence:
          r.eventNumber
      });
    }
  );

  /* -------------------------------------------------------
     GAME FINISH
  ------------------------------------------------------- */

  socket.on(
    'game:finish',
    (data = {}, cb = () => {}) => {
      const r =
        rooms.get(
          clean(data.code)
        );

      if (
        !r ||
        !r.players.has(
          socket.id
        )
      ) {
        return cb({
          ok: false,
          error:
            'غرفة غير صالحة'
        });
      }

      finishRoom(
        r,
        data.winnerId ||
          socket.id,
        data.result || {}
      );

      cb({
        ok: true
      });
    }
  );

  /* -------------------------------------------------------
     TOURNAMENT JOIN SOCKET
  ------------------------------------------------------- */

  socket.on(
    'tournament:join',
    (data = {}, cb = () => {}) => {
      const tournamentId =
        String(
          data.tournamentId ||
            ''
        );

      const t =
        db.tournaments[
          tournamentId
        ];

      if (!t) {
        return cb({
          ok: false,
          error:
            'البطولة غير موجودة'
        });
      }

      socket.join(
        'tournament:' +
          tournamentId
      );

      const session =
        socketSessions.get(
          socket.id
        );

      if (session) {
        session.tournamentId =
          tournamentId;
        session.name =
          safeName(
            data.playerName,
            'لاعب'
          );
      }

      cb({
        ok: true,

        tournament:
          publicTournament(t)
      });

      socket.emit(
        'tournament:state',
        publicTournament(t)
      );
    }
  );

  /* -------------------------------------------------------
     TOURNAMENT MATCH JOIN
  ------------------------------------------------------- */

  socket.on(
    'tournament:match:join',
    (data = {}, cb = () => {}) => {
      const t =
        db.tournaments[
          String(
            data.tournamentId ||
              ''
          )
        ];

      if (!t) {
        return cb({
          ok: false,
          error:
            'البطولة غير موجودة'
        });
      }

      const m =
        t.matches.find(
          x =>
            x.id ===
            String(
              data.matchId ||
                ''
            )
        );

      if (!m) {
        return cb({
          ok: false,
          error:
            'المباراة غير موجودة'
        });
      }

      if (!m.roomCode) {
        return cb({
          ok: false,
          error:
            'لم يتم إنشاء غرفة المباراة بعد'
        });
      }

      const r =
        rooms.get(
          m.roomCode
        );

      if (!r) {
        return cb({
          ok: false,
          error:
            'غرفة المباراة غير موجودة'
        });
      }

      if (
        r.players.size >= 2
      ) {
        return cb({
          ok: false,
          error:
            'المباراة ممتلئة'
        });
      }

      const playerName =
        safeName(
          data.playerName,
          'لاعب'
        );

      const allowed =
        playerName ===
          m.player1?.name ||
        playerName ===
          m.player2?.name;

      if (!allowed) {
        return cb({
          ok: false,
          error:
            'أنت لست أحد لاعبي هذه المباراة'
        });
      }

      r.players.add(
        socket.id
      );

      r.playerInfo.set(
        socket.id,
        {
          id: socket.id,
          name: playerName,
          joinedAt: Date.now()
        }
      );

      socket.join(r.code);

      const session =
        socketSessions.get(
          socket.id
        );

      if (session) {
        session.name =
          playerName;

        session.roomCode =
          r.code;

        session.tournamentId =
          t.id;
      }

      cb({
        ok: true,

        room:
          publicRoom(r)
      });

      broadcastRoomState(r);

      if (
        r.players.size >= 2
      ) {
        startRoom(r);
      }
    }
  );

  /* -------------------------------------------------------
     DISCONNECT
  ------------------------------------------------------- */

  socket.on(
    'disconnect',
    () => {
      const session =
        socketSessions.get(
          socket.id
        );

      if (
        session &&
        session.roomCode
      ) {
        const r =
          rooms.get(
            session.roomCode
          );

        if (r) {
          r.players.delete(
            socket.id
          );

          io.to(r.code).emit(
            'room:player-left',
            {
              players:
                r.players.size,

              playerId:
                socket.id,

              name:
                session.name
            }
          );

          broadcastRoomState(r);

          /*
           * لا نحذف بيانات اللاعب مباشرة.
           * نعطيه فرصة لإعادة الاتصال.
           */
          if (
            r.players.size === 0
          ) {
            const timer =
              setTimeout(
                () => {
                  const current =
                    rooms.get(
                      r.code
                    );

                  if (
                    current &&
                    current.players
                      .size === 0
                  ) {
                    rooms.delete(
                      r.code
                    );
                  }
                },
                5 * 60 * 1000
              );

            r.disconnectTimers.set(
              socket.id,
              timer
            );
          }
        }
      }

      socketSessions.delete(
        socket.id
      );
    }
  );
});

/* =========================================================
   CLEAN OLD ROOMS
========================================================= */

setInterval(() => {
  const now =
    Date.now();

  for (
    const [code, r]
    of rooms
  ) {
    if (
      now - r.createdAt >
      6 * 60 * 60 * 1000
    ) {
      rooms.delete(code);
    }
  }
}, 5 * 60 * 1000);

/* =========================================================
   404
========================================================= */

app.use(
  (req, res) => {
    res.status(404).json({
      error: 'NOT FOUND',
      path: req.path
    });
  }
);

/* =========================================================
   ERROR HANDLER
========================================================= */

app.use(
  (err, req, res, next) => {
    console.error(
      'SERVER ERROR:',
      err
    );

    if (res.headersSent) {
      return next(err);
    }

    res.status(500).json({
      error:
        'حدث خطأ داخلي في السيرفر'
    });
  }
);

/* =========================================================
   SERVER
========================================================= */

const PORT =
  Number(
    process.env.PORT
  ) || 3000;

server.listen(
  PORT,
  '0.0.0.0',
  () => {
    console.log(
      '========================================'
    );

    console.log(
      'R2 GAMES V10 MULTIPLAYER ONLINE'
    );

    console.log(
      'PORT:',
      PORT
    );

    console.log(
      'ROOMS:',
      rooms.size
    );

    console.log(
      'SOCKET.IO: ENABLED'
    );

    console.log(
      'TOURNAMENT MATCHMAKING: ENABLED'
    );

    console.log(
      '========================================'
    );
  }
);

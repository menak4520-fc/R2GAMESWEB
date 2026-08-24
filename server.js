const express = require('express');
const path = require('path');
const crypto = require('crypto');
const http = require('http');
const fs = require('fs');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: true, methods: ['GET', 'POST'] } });

const DATA_DIR = process.env.DATA_DIR || path.join(__dirname, 'data');
const DB_FILE = path.join(DATA_DIR, 'r2-data.json');
fs.mkdirSync(DATA_DIR, { recursive: true });

let db = { tournaments: {}, usedTournamentCodes: {} };
try {
  if (fs.existsSync(DB_FILE)) db = JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) || db;
} catch (e) {
  console.error('DB load failed', e.message);
}

let saveTimer = null;
function saveDb() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    } catch (e) {
      console.error('DB save failed', e.message);
    }
  }, 150);
}

const rooms = new Map();
app.use(express.json({ limit: '128kb' }));

// تقديم ملفات الواجهة
const PUBLIC_DIR = fs.existsSync(path.join(__dirname, 'public')) ? path.join(__dirname, 'public') : __dirname;
app.use(express.static(PUBLIC_DIR));

const roomCode = () => crypto.randomBytes(4).toString('hex').toUpperCase();
const tournamentCode = () => crypto.randomBytes(5).toString('hex').toUpperCase();

// تم توسيع القائمة وتقبل أي اسم لعبة من الواجهة لمنع خطأ auction الحصري
function validateGame(gameName) {
  const g = String(gameName || '').trim().toLowerCase();
  return g.length > 0 ? g : 'auction';
}

const tournamentSizes = [16, 32, 64, 127];

function clean(v) { return String(v || '').trim().toUpperCase(); }

function publicRoom(r) {
  return {
    code: r.code,
    game: r.game,
    players: r.players.size,
    status: r.players.size >= 2 ? 'ready' : 'waiting',
    passwordProtected: !!r.password,
    createdAt: r.createdAt
  };
}

function createRoom(game, password = '') {
  let c;
  do c = roomCode(); while (rooms.has(c));
  const validGame = validateGame(game);
  const r = { code: c, game: validGame, password: String(password), createdAt: Date.now(), players: new Set(), state: {} };
  rooms.set(c, r);
  return r;
}

function publicTournament(t) {
  return {
    id: t.id,
    name: t.name,
    game: t.game,
    size: t.size,
    players: t.players.length,
    status: t.status,
    createdAt: t.createdAt,
    joinCodesRemaining: t.codes.filter(c => !db.usedTournamentCodes[c]).length
  };
}

// فتح الصفحة الرئيسية
app.get('/', (req, res) => {
  const publicIndex = path.join(__dirname, 'public', 'index.html');
  const rootIndex = path.join(__dirname, 'index.html');
  
  if (fs.existsSync(publicIndex)) {
    return res.sendFile(publicIndex);
  } else if (fs.existsSync(rootIndex)) {
    return res.sendFile(rootIndex);
  } else {
    return res.status(404).send('<h2 style="text-align:center;margin-top:50px;">لم يتم العثور على ملف index.html</h2>');
  }
});

// Health Check API
app.get('/api/health', (req, res) => res.set('Cache-Control', 'no-store').json({
  ok: true, version: '9.3.0', rooms: rooms.size, tournaments: Object.keys(db.tournaments).length, uptime: Math.round(process.uptime()), time: Date.now()
}));

// HTTP API Rooms
app.post('/api/rooms', (req, res) => {
  const game = validateGame(req.body.game);
  const p = String(req.body.password || '');
  if (p.length > 64) return res.status(400).json({ error: 'كلمة السر طويلة' });
  const r = createRoom(game, p);
  res.json({ ok: true, ...publicRoom(r) });
});

app.post('/api/rooms/:code/join', (req, res) => {
  const r = rooms.get(clean(req.params.code));
  if (!r) return res.status(404).json({ error: 'كود الغرفة غير موجود أو انتهت صلاحيته' });
  if (r.players.size >= 2) return res.status(409).json({ error: 'الغرفة ممتلئة' });
  if (r.password && String(req.body.password || '') !== r.password) return res.status(403).json({ error: 'كلمة السر غير صحيحة' });
  res.json({ ok: true, ...publicRoom(r) });
});

app.get('/api/rooms/:code', (req, res) => {
  const r = rooms.get(clean(req.params.code));
  if (!r) return res.status(404).json({ error: 'غير موجود' });
  res.json(publicRoom(r));
});

// Tournaments API
app.post('/api/tournaments', (req, res) => {
  const name = String(req.body.name || '').trim().slice(0, 80);
  const game = validateGame(req.body.game);
  const size = Number(req.body.size);
  if (!name) return res.status(400).json({ error: 'اكتب اسم البطولة' });
  if (!tournamentSizes.includes(size)) return res.status(400).json({ error: 'حجم بطولة غير صحيح' });
  
  const id = 'T' + Date.now().toString(36).toUpperCase() + crypto.randomBytes(2).toString('hex').toUpperCase();
  const codeCount = size === 127 ? 127 : size - 1;
  const codes = [];
  while (codes.length < codeCount) {
    const c = tournamentCode();
    if (!codes.includes(c) && !db.usedTournamentCodes[c]) codes.push(c);
  }
  const t = { id, name, game, size, codes, players: [{ name: String(req.body.hostName || 'أنت').slice(0, 40), joinedAt: Date.now() }], status: 'open', createdAt: Date.now() };
  db.tournaments[id] = t;
  saveDb();
  res.status(201).json({ ok: true, tournament: publicTournament(t), codes });
});

app.post('/api/tournaments/join', (req, res) => {
  const code = clean(req.body.code);
  if (!code) return res.status(400).json({ error: 'اكتب كود الدعوة' });
  if (db.usedTournamentCodes[code]) return res.status(409).json({ error: 'الكود مستخدم بالفعل' });
  let t = Object.values(db.tournaments).find(x => x.codes.includes(code));
  if (!t) return res.status(404).json({ error: 'الكود غير صحيح' });
  if (t.status !== 'open' || t.players.length >= t.size) return res.status(409).json({ error: 'البطولة اكتملت أو مغلقة' });
  
  db.usedTournamentCodes[code] = { tournamentId: t.id, usedAt: Date.now() };
  t.players.push({ name: String(req.body.playerName || ('لاعب ' + (t.players.length + 1))).slice(0, 40), joinedAt: Date.now() });
  if (t.players.length >= t.size) t.status = 'full';
  saveDb();
  res.json({ ok: true, tournament: publicTournament(t) });
});

app.get('/api/tournaments', (req, res) => res.json({ ok: true, tournaments: Object.values(db.tournaments).sort((a, b) => b.createdAt - a.createdAt).slice(0, 50).map(publicTournament) }));

app.get('/api/tournaments/:id', (req, res) => {
  const t = db.tournaments[req.params.id];
  if (!t) return res.status(404).json({ error: 'البطولة غير موجودة' });
  res.json({ ok: true, tournament: { ...publicTournament(t), playersList: t.players.map(p => p.name) } });
});

// News API
function decodeXml(s = '') {
  return s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');
}

app.get('/api/news', async (req, res) => {
  try {
    const feed = 'https://news.google.com/rss/search?q=' + encodeURIComponent('football OR كرة القدم') + '&hl=ar&gl=EG&ceid=EG:ar';
    const r = await fetch(feed, { headers: { 'user-agent': 'R2-GAMES/9.0' } });
    if (!r.ok) throw new Error('feed ' + r.status);
    const xml = await r.text();
    const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 12).map(m => {
      const x = m[1];
      const get = tag => {
        const z = x.match(new RegExp('<' + tag + '>([\\s\\S]*?)<\\/' + tag + '>'));
        return z ? decodeXml(z[1].trim()) : '';
      };
      return { title: get('title'), link: get('link'), source: get('source'), publishedAt: get('pubDate') };
    }).filter(x => x.title && x.link);
    res.set('Cache-Control', 'no-store').json({ ok: true, items, updatedAt: Date.now() });
  } catch (e) {
    res.status(503).json({ ok: false, error: 'تعذر جلب الأخبار مؤقتًا، حاول التحديث بعد قليل.' });
  }
});

// Socket.io Engine
io.on('connection', socket => {
  socket.on('room:create', (data = {}, cb = () => {}) => {
    const game = validateGame(data.game);
    const r = createRoom(game, data.password || '');
    r.players.add(socket.id);
    socket.join(r.code);
    cb({ ok: true, ...publicRoom(r) });
  });

  socket.on('room:join', (data = {}, cb = () => {}) => {
    const r = rooms.get(clean(data.code));
    if (!r) return cb({ ok: false, error: 'كود الغرفة غير موجود أو انتهت صلاحيته' });
    if (r.players.size >= 2) return cb({ ok: false, error: 'الغرفة ممتلئة' });
    if (r.password && String(data.password || '') !== r.password) return cb({ ok: false, error: 'كلمة السر غير صحيحة' });
    r.players.add(socket.id);
    socket.join(r.code);
    io.to(r.code).emit('room:ready', publicRoom(r));
    cb({ ok: true, ...publicRoom(r) });
  });

  socket.on('game:event', (data = {}, cb = () => {}) => {
    const r = rooms.get(clean(data.code));
    if (!r || !r.players.has(socket.id)) return cb({ ok: false, error: 'غرفة غير صالحة' });
    const payload = { type: String(data.type || 'move').slice(0, 40), data: data.data || {}, by: socket.id, time: Date.now() };
    socket.to(r.code).emit('game:event', payload);
    cb({ ok: true });
  });

  socket.on('disconnect', () => {
    for (const [c, r] of rooms) {
      if (r.players.delete(socket.id)) {
        io.to(c).emit('room:player-left', { players: r.players.size });
        if (!r.players.size) {
          setTimeout(() => {
            const currentRoom = rooms.get(c);
            if (currentRoom && currentRoom.players.size === 0) {
              rooms.delete(c);
            }
          }, 5 * 60 * 1000); 
        }
      }
    }
  });
});

setInterval(() => {
  const now = Date.now();
  for (const [c, r] of rooms) if (now - r.createdAt > 6 * 3600000) rooms.delete(c);
}, 300000);

app.use((req, res) => res.status(404).json({ error: 'NOT FOUND', path: req.path }));

const PORT = Number(process.env.PORT) || 3000;
server.listen(PORT, '0.0.0.0', () => console.log('R2 GAMES V9.3 online on ' + PORT));

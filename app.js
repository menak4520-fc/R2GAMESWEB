
        // Database categorized by Positions & Ratings
        const playersByPos = {
            GK: [
                { name: "ايميليانو مارنيتنيز", pos: "GK", rating: 98, type: "حدث CHAMPIONS" },
                { name: "مانويل نوير", pos: "GK", rating: 99, type: "حالي" },
                { name: "مارك اندريه تير شتيغين", pos: "GK", rating: 98, type: "حالي" },
                { name: "روبرت سانشيز", pos: "GK", rating: 84, type: "حالي" },
                { name: "اليكس ميريت", pos: "GK", rating: 80, type: "حالي" },
                { name: "ليف ياشين", pos: "GK", rating: 99, type: "أيكونز ICON" },
                { name: "جانلويجى بوفون", pos: "GK", rating: 99, type: "أيكونز ICON" },
                { name: "ايكر كاسياس", pos: "GK", rating: 99, type: "أيكونز ICON" },
                { name: "بيتر تشيك", pos: "GK", rating: 98, type: "أيكونز ICON" },
                { name: "بيتر شمايكل", pos: "GK", rating: 98, type: "أيكونز ICON" },
                { name: "إدوين فاندار سار", pos: "GK", rating: 98, type: "أيكونز ICON" },
                { name: "ديفيد دى خيا", pos: "GK", rating: 98, type: "حالي" },
                { name: "تيبوا كورتوا", pos: "GK", rating: 98, type: "حالي" },
                { name: "اليسون بيكر", pos: "GK", rating: 97, type: "حالي" },
                { name: "ديدا", pos: "GK", rating: 97, type: "أيكونز ICON" },
                { name: "إديرسون", pos: "GK", rating: 95, type: "حالي" },
                { name: "جانلويجى دوناروما", pos: "GK", rating: 94, type: "حالي" },
                { name: "ديفيد رايا", pos: "GK", rating: 94, type: "حالي" },
                { name: "عصام الحضرى", pos: "GK", rating: 93, type: "أيكونز ICON" },
                { name: "محمد الشناوى", pos: "GK", rating: 89, type: "حالي" },
                { name: "مصطفى شوبير", pos: "GK", rating: 87, type: "حالي" },
                { name: "أحمد الشناوى", pos: "GK", rating: 82, type: "حالي" },
                { name: "اندريه اونانا", pos: "GK", rating: 79, type: "حالي" }
            ],
            LB: [
                { name: "أشلى كول", pos: "LB", rating: 99, type: "أيكونز ICON" },
                { name: "ثيو هيرناندز", pos: "LB", rating: 92, type: "حالي" },
                { name: "ألفونسو ديفيز", pos: "LB", rating: 92, type: "حالي" },
                { name: "ديماركو", pos: "LB", rating: 92, type: "حالي" },
                { name: "بالدى", pos: "LB", rating: 86, type: "حالي" },
                { name: "ميندى", pos: "LB", rating: 82, type: "حالي" },
                { name: "روبيرتو كارلوس", pos: "LB", rating: 99, type: "أيكونز ICON" },
                { name: "مارسيلو", pos: "LB", rating: 99, type: "أيكونز ICON" },
                { name: "فيليب لام", pos: "LB", rating: 99, type: "أيكونز ICON" },
                { name: "زامبيروتا", pos: "LB", rating: 98, type: "أيكونز ICON" },
                { name: "نونو مينديش", pos: "LB", rating: 95, type: "حالي" },
                { name: "مارك كوكوريا", pos: "LB", rating: 95, type: "حالي" },
                { name: "أحمد فتوح", pos: "LB", rating: 83, type: "حالي" },
                { name: "هاتو", pos: "LB", rating: 78, type: "حالي" }
            ],
            CB: [
                { name: "سيرجيو راموس", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "اليساندرو نيستا", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "رونالد كومان", pos: "CB", rating: 98, type: "أيكونز ICON" },
                { name: "روبن دياس", pos: "CB", rating: 90, type: "حالي" },
                { name: "رونالد اراوخو", pos: "CB", rating: 84, type: "حالي" },
                { name: "باولو مالدينى", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "فيرجيل فان دايك", pos: "CB", rating: 99, type: "حالي" },
                { name: "فرانز بيكنباور", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "فرانكو باريزى", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "فابيو كانفارو", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "كيلينى", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "بوبى مور", pos: "CB", rating: 99, type: "أيكونز ICON" },
                { name: "ريو فيرديناند", pos: "CB", rating: 98, type: "أيكونز ICON" },
                { name: "جون تيرى", pos: "CB", rating: 98, type: "أيكونز ICON" },
                { name: "جابريال مجاليش", pos: "CB", rating: 95, type: "حالي" },
                { name: "ويليان ساليبا", pos: "CB", rating: 94, type: "حالي" },
                { name: "دين هاوسين", pos: "CB", rating: 93, type: "حالي" },
                { name: "ابراهيما كوناتى", pos: "CB", rating: 92, type: "حالي" },
                { name: "ماركينيوس", pos: "CB", rating: 93, type: "حالي" },
                { name: "وائل جمعة", pos: "CB", rating: 93, type: "أيكونز ICON" },
                { name: "إبراهيم حسن", pos: "CB", rating: 93, type: "أيكونز ICON" },
                { name: "ياسر ابراهيم", pos: "CB", rating: 84, type: "حالي" },
                { name: "رامى رابيعا", pos: "CB", rating: 83, type: "حالي" },
                { name: "إريك داير", pos: "CB", rating: 80, type: "حالي" },
                { name: "هارى ماجواير", pos: "CB", rating: 78, type: "حالي" }
            ],
            RB: [
                { name: "كارلوس البيرتو", pos: "RB", rating: 99, type: "أيكونز ICON" },
                { name: "ليليان تورام", pos: "RB", rating: 99, type: "أيكونز ICON" },
                { name: "غارى نيفيل", pos: "RB", rating: 97, type: "أيكونز ICON" },
                { name: "أشرف حكيمى", pos: "RB", rating: 95, type: "حالي" },
                { name: "كافو", pos: "RB", rating: 99, type: "أيكونز ICON" },
                { name: "زانيتى", pos: "RB", rating: 99, type: "أيكونز ICON" },
                { name: "دانيل كارفاخال", pos: "RB", rating: 99, type: "حالي" },
                { name: "دانى الفيس", pos: "RB", rating: 99, type: "أيكونز ICON" },
                { name: "ارنولد", pos: "RB", rating: 95, type: "حالي" },
                { name: "نصير مازراوى", pos: "RB", rating: 85, type: "حالي" },
                { name: "محمد هانى", pos: "RB", rating: 83, type: "حالي" },
                { name: "ديجو دالوت", pos: "RB", rating: 80, type: "حالي" }
            ],
            CM: [
                { name: "فرانك لامبارد", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "استيفين جيرارد", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "اندريا بيرلو", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "بول سكولز", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "كاى جوندوجان", pos: "CM", rating: 91, type: "حالي" },
                { name: "كارلوس سولير", pos: "CM", rating: 80, type: "حالي" },
                { name: "زين الدين زيدان", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "رود خوليت", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "لوثار ماتيوس", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "باتريك فييرا", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "تونى كروس", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "اندريس انيستا", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "لوكا مودريتش", pos: "CM", rating: 99, type: "حالي" },
                { name: "اتشافى هيرناندز", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "اتشابى الونسو", pos: "CM", rating: 99, type: "أيكونز ICON" },
                { name: "مايكل بالاك", pos: "CM", rating: 98, type: "أيكونز ICON" },
                { name: "كلارنس سيدروف", pos: "CM", rating: 98, type: "أيكونز ICON" },
                { name: "فرانك رايكارد", pos: "CM", rating: 98, type: "أيكونز ICON" },
                { name: "جود بيلنجهام", pos: "CM", rating: 96, type: "حالي" },
                { name: "بيدرى", pos: "CM", rating: 96, type: "حالي" },
                { name: "بيرناندو سيلفا", pos: "CM", rating: 94, type: "حالي" },
                { name: "الخطيب", pos: "CM", rating: 94, type: "أيكونز ICON" },
                { name: "جافى", pos: "CM", rating: 92, type: "حالي" },
                { name: "إمام عاشور", pos: "CM", rating: 87, type: "حالي" }
            ],
            CAM: [
                { name: "يوهان كرويف", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "كاكا", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "ديجو مارادونا", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "زيكو", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "روبيرت باجيو", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "ميشيل بلاتينى", pos: "CAM", rating: 99, type: "أيكونز ICON" },
                { name: "جورجى هاجى", pos: "CAM", rating: 97, type: "أيكونز ICON" },
                { name: "كيفين دى بروين", pos: "CAM", rating: 97, type: "حالي" },
                { name: "فلوريان فيرتز", pos: "CAM", rating: 95, type: "حالي" },
                { name: "جمال موسيالا", pos: "CAM", rating: 94, type: "حالي" },
                { name: "ايسكو", pos: "CAM", rating: 91, type: "حالي" },
                { name: "فيليبى كوتينيو", pos: "CAM", rating: 90, type: "حالي" },
                { name: "ديلى الى", pos: "CAM", rating: 81, type: "حالي" },
                { name: "لينغارد", pos: "CAM", rating: 79, type: "حالي" }
            ],
            RW: [
                { name: "ديسير دوى", pos: "RW", rating: 100, type: "حدث CHAMPIONS" },
                { name: "ليونيل ميسي", pos: "RW", rating: 99, type: "حالي" },
                { name: "لويس فيجو", pos: "RW", rating: 99, type: "أيكونز ICON" },
                { name: "جورج بيست", pos: "RW", rating: 99, type: "أيكونز ICON" },
                { name: "محمد صلاح", pos: "RW", rating: 99, type: "حالي" },
                { name: "جارينشيا", pos: "RW", rating: 99, type: "أيكونز ICON" },
                { name: "جارزينيو", pos: "RW", rating: 99, type: "أيكونز ICON" },
                { name: "بوكايو ساكا", pos: "RW", rating: 85, type: "حالي" },
                { name: "لامين يامال", pos: "RW", rating: 87, type: "حالي" },
                { name: "عثمان ديمبيلى", pos: "RW", rating: 87, type: "حالي" },
                { name: "مايكل اوليسي", pos: "RW", rating: 87, type: "حالي" },
                { name: "أنتونى", pos: "RW", rating: 83, type: "حالي" },
                { name: "سيرج غنابرى", pos: "RW", rating: 82, type: "حالي" },
                { name: "سانشو", pos: "RW", rating: 80, type: "حالي" }
            ],
            LW: [
                { name: "كفارتسخيليا", pos: "LW", rating: 100, type: "حدث CHAMPIONS" },
                { name: "كريستيانو رونالدو", pos: "LW", rating: 99, type: "حالي" },
                { name: "نيمار", pos: "LW", rating: 99, type: "حالي" },
                { name: "رونالدينيو", pos: "LW", rating: 99, type: "أيكونز ICON" },
                { name: "ريفالدو", pos: "LW", rating: 99, type: "أيكونز ICON" },
                { name: "هازارد", pos: "LW", rating: 99, type: "أيكونز ICON" },
                { name: "فينيسيوس جونيور", pos: "LW", rating: 96, type: "حالي" },
                { name: "ماركوس راشفورد", pos: "LW", rating: 82, type: "حالي" },
                { name: "انسوا فاتى", pos: "LW", rating: 80, type: "حالي" },
                { name: "رحيم سترلينح", pos: "LW", rating: 80, type: "حالي" }
            ],
            ST: [
                { name: "رونالدو الظاهرة", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "فان باستين", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "غيرد مولر", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "اوزيبيو", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "تييرى هنرى", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "كريم بنزيما", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "زلاتان ابراهيموفيتش", pos: "ST", rating: 99, type: "أيكونز ICON" },
                { name: "كيليان امبابى", pos: "ST", rating: 98, type: "حالي" },
                { name: "هارى كين", pos: "ST", rating: 97, type: "حالي" },
                { name: "فيكتور جيوكيريس", pos: "ST", rating: 95, type: "حالي" },
                { name: "لوكاكو", pos: "ST", rating: 84, type: "حالي" },
                { name: "الفارو موراتا", pos: "ST", rating: 82, type: "حالي" }
            ]
        };

        const posNames11 = [
            { key: "GK", name: "حارس مرمى (GK)" },
            { key: "LB", name: "ظهير أيسر (LB)" },
            { key: "CB", name: "قلب دفاع أول (CB1)" },
            { key: "CB", name: "قلب دفاع ثاني (CB2)" },
            { key: "RB", name: "ظهير أيمن (RB)" },
            { key: "CM", name: "وسط ملعـب أول (CM1)" },
            { key: "CM", name: "وسط ملعـب ثاني (CM2)" },
            { key: "CAM", name: "وسط مهاجم (CAM)" },
            { key: "RW", name: "جناح أيمن (RW)" },
            { key: "LW", name: "جناح أيسر (LW)" },
            { key: "ST", name: "مهاجم صريح (ST)" }
        ];

        const posNames5 = [
            { key: "GK", name: "حارس مرمى (GK)" },
            { key: "CB", name: "مدافع (DF)" },
            { key: "CM", name: "لاعب وسط (MF)" },
            { key: "CAM", name: "وسط مهاجم (CAM)" },
            { key: "ST", name: "مهاجم (FW)" }
        ];

        let auctionPosList = posNames11;
        let p1Name = "BA";
        let p2Name = "BE";
        let budgetP1 = 2000;
        let budgetP2 = 2000;
        let initialBudget = 2000;
        let currentBidVal = 10;
        let activeTurn = 1;
        let currentCard = null;
        let auctionRound = 0;
        let selectedMode = '1v1';

        let p1Squad = [];
        let p2Squad = [];
        
        let usedPlayerNames = new Set();

        let p1WildcardUsed = false;
        let p2WildcardUsed = false;

        // Deal Or No Deal System Data
        let dealStage = 0;
        let dealP1Data = { attempts: 0, chosenPlayer: null, isDone: false, tempPlayer: null };
        let dealP2Data = { attempts: 0, chosenPlayer: null, isDone: false, tempPlayer: null };

        let matchSummaryText = "";

        window.onload = function() {
            checkEventsExpiry();
        };

        function checkEventsExpiry() {
            const today = new Date();
            const champExpiry = new Date(2026, 7, 14); 
            if (today >= champExpiry) {
                const champElem = document.getElementById('champions-event');
                if (champElem) champElem.style.display = 'none';
            }

            const ahlyExpiry = new Date(2026, 7, 20); 
            if (today >= ahlyExpiry) {
                const ahlyElem = document.getElementById('ahly-barca-event');
                if (ahlyElem) ahlyElem.style.display = 'none';
            }
        }

        function showSection(id) {
            document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        function openModal(id) { document.getElementById(id).style.display = 'flex'; }
        function closeModal(id) { document.getElementById(id).style.display = 'none'; }

        async function generateNewRoomCode() {
            const status=document.getElementById('room-status'); status.innerText='⏳ جارٍ التأكد من السيرفر وإنشاء الغرفة...';
            try{const health=await fetch('/api/health',{cache:'no-store'});if(!health.ok)throw 0; const password=document.getElementById('room-password-enabled').checked?document.getElementById('room-password').value:''; if(document.getElementById('room-password-enabled').checked&&!password){alert('اكتب كلمة سر أو ألغِ خيار كلمة السر');return;} const r=await fetch('/api/rooms',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({game:document.getElementById('room-game-select').value,password})});const d=await r.json();if(!r.ok)throw 0;document.getElementById('generated-code').innerText=d.code;window.r2Room={code:d.code,game:d.game};status.innerText='🟢 الغرفة شغالة على السيرفر — شارك الكود مع صديقك.'}catch(e){document.getElementById('generated-code').innerText='------';status.innerText='🔴 السيرفر غير متصل: لن يتم إنشاء أي كود.';}
        }
        function selectMode(mode) { selectedMode=mode;document.getElementById('player-inputs').style.display='block';document.getElementById('room-box').style.display=mode==='room'?'block':'none';if(mode==='ai')document.getElementById('p2-name').value='الروبوت الذكي (AI)';else if(document.getElementById('p2-name').value==='الروبوت الذكي (AI)')document.getElementById('p2-name').value='BE'; }
        async function connectRoom(){const code=document.getElementById('join-code-input').value.trim();if(!code)return alert('اكتب كود الغرفة');try{const r=await fetch('/api/rooms/'+encodeURIComponent(code)+'/join',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password:document.getElementById('join-password-input').value})});const d=await r.json();if(!r.ok)return alert(d.error||'تعذر الاتصال');window.r2Room=d;document.getElementById('room-game-select').value=d.game;document.getElementById('room-status').innerText='🟢 تم الاتصال بنجاح. اللعبة: '+d.game;}catch(e){alert('السيرفر غير متصل، لا يمكن الانضمام.');}}
        function goToGameMenu() {
            p1Name = document.getElementById('p1-name').value || "BA";
            p2Name = document.getElementById('p2-name').value || "BE";
            showSection('menu-section');
        }

        function sendFriendRequest(){const v=document.getElementById('friend-id-input').value.trim();if(!/^\d{16}$/.test(v))return alert('اكتب ID صحيح من 16 رقم');let a=JSON.parse(localStorage.getItem('r2_friends')||'[]');if(a.includes(v))return alert('هذا الصديق موجود بالفعل');a.push(v);localStorage.setItem('r2_friends',JSON.stringify(a));document.getElementById('friend-id-input').value='';renderFriends();alert('تم إرسال طلب صداقة للـ ID: '+v)} function renderFriends(){let a=JSON.parse(localStorage.getItem('r2_friends')||'[]');document.getElementById('friends-list').innerHTML=a.length?a.map(x=>'<div class=\"r2-card\">👤 '+x+' <span style=\"color:var(--accent-green)\">متصل/صديق</span></div>').join(''):'لا يوجد أصدقاء بعد — أضف صديقاً بنفسك.'} function quickMatch(){let a=JSON.parse(localStorage.getItem('r2_friends')||'[]');if(!a.length)return alert('أضف صديقاً أولاً');alert('⚡ QUICK MATCH جاهز. اختر صديقاً ثم استخدم غرفة الأونلاين لإرسال كود المباراة.')} 

        function acceptFriend(btn) {
            alert("تم قبول طلب الصداقة بنجاح!");
            btn.parentElement.parentElement.remove();
        }

        function rejectFriend(btn) {
            alert("تم رفض طلب الصداقة.");
            btn.parentElement.parentElement.remove();
        }

        const R2_EVENT_REWARDS=[{name:'Zidane',rating:103,pos:'GK'},{name:'Casillas',rating:103,pos:'GK'},{name:'YAN DIOMANDE',rating:101,pos:'LW'},{name:'cucurela',rating:101,pos:'LB'}];
        let r2EventWeek=0,r2EventGames=[],r2EventDone=0;
        function openEventWeek(week){r2EventWeek=week;r2EventDone=0;const games=week===1?5:7;const modes=['المزاد برو ماكس','الملعب الخماسي','DEAL OR NO DEAL','المزاد الأعمى','تخمين اللاعب','اللاعب الخفي'];r2EventGames=Array.from({length:games},()=>modes[Math.floor(Math.random()*modes.length)]);document.getElementById('event-week-play').style.display='block';renderEventWeek();}
        function renderEventWeek(){const el=document.getElementById('event-week-status');el.innerHTML='<b>الأسبوع '+r2EventWeek+'</b><br>المباريات: '+r2EventGames.map((g,i)=>`<div>${i<r2EventDone?'✅':'⬜'} ${i+1}. ${g}</div>`).join('');if(r2EventDone>=r2EventGames.length)el.innerHTML += `<div style="margin-top:10px;color:var(--gold-primary);font-weight:bold">🎁 حصلت على: ${R2_EVENT_REWARDS[Math.floor(Math.random()*R2_EVENT_REWARDS.length)].name} — اضغط إكمال لاستلام اللاعب</div>`;}
        function playCurrentEventMatch(){if(!r2EventWeek)return; if(r2EventDone>=r2EventGames.length){const reward=R2_EVENT_REWARDS[Math.floor(Math.random()*R2_EVENT_REWARDS.length)];alert('🎁 لاعب الحدث العشوائي: '+reward.name+' '+reward.rating+' '+reward.pos);document.getElementById('event-week-play').style.display='none';return;}alert('🎮 مباراة الحدث التالية: '+r2EventGames[r2EventDone]+' — اعتبرها اكتملت الآن في نسخة الحدث.');r2EventDone++;renderEventWeek();document.getElementById('event-week-play').textContent=r2EventDone>=r2EventGames.length?'🎁 استلم لاعب الحدث':'🎮 العب الآن';}
        function showWeek1Players(){openEventWeek(1);}

        function startAuctionSetup(count) {
            auctionPosList = count === 11 ? posNames11 : posNames5;
            document.getElementById('auction-setup-title').innerText = count === 11 ? "إعدادات المزاد برو ماكس (11 لاعب) 🔨" : "إعدادات الملعب الخماسي (5 لاعبين) ⚽";
            showSection('auction-setup');
        }

        function getRandomUniquePlayer(posKey) {
            const pool = playersByPos[posKey] || playersByPos.ST;
            let available = pool.filter(p => !usedPlayerNames.has(p.name));
            
            if (available.length === 0) {
                available = pool;
            }
            
            const chosen = available[Math.floor(Math.random() * available.length)];
            usedPlayerNames.add(chosen.name);
            return chosen;
        }

        function startAuctionGame() {
            const b = parseInt(document.getElementById('budget-select').value);
            budgetP1 = b;
            budgetP2 = b;
            initialBudget = b;
            p1Squad = [];
            p2Squad = [];
            auctionRound = 0;
            p1WildcardUsed = false;
            p2WildcardUsed = false;
            usedPlayerNames.clear();

            document.getElementById('p1-disp').innerText = p1Name;
            document.getElementById('p2-disp').innerText = p2Name;
            document.getElementById('p1-budget').innerText = budgetP1;
            document.getElementById('p2-budget').innerText = budgetP2;

            activeTurn = 1;
            updateTurnDisplay();
            loadAuctionCard();
            showSection('auction-game');
        }

        function updateTurnDisplay() {
            const name = activeTurn === 1 ? p1Name : p2Name;
            document.getElementById('turn-display').innerText = "الدور في المزايدة على: " + name;
        }

        function checkCustomBidInput() {
            const val = parseFloat(document.getElementById('custom-bid-input').value);
            const btn = document.getElementById('send-bid-btn');
            if (!isNaN(val) && val > 5) {
                btn.style.display = "inline-block";
            } else {
                btn.style.display = "none";
            }
        }

        function submitCustomBid() {
            const val = parseFloat(document.getElementById('custom-bid-input').value);
            if (isNaN(val) || val <= currentBidVal) {
                alert("يرجى كتابة مبلغ أعلى من السعر الحالي (" + currentBidVal + "M $)!");
                return;
            }
            const currentBudget = activeTurn === 1 ? budgetP1 : budgetP2;
            if (val > currentBudget) {
                alert("المبلغ المكتوب أكبر من الميزانية المتاحة!");
                return;
            }
            currentBidVal = val;
            document.getElementById('current-bid').innerText = currentBidVal;
            document.getElementById('custom-bid-input').value = "";
            document.getElementById('send-bid-btn').style.display = "none";

            activeTurn = activeTurn === 1 ? 2 : 1;
            updateTurnDisplay();

            if (selectedMode === 'ai' && activeTurn === 2) {
                setTimeout(handleAIBid, 600);
            }
        }

        function loadAuctionCard() {
            if (auctionRound >= auctionPosList.length) {
                finishAuctionGame();
                return;
            }

            const posObj = auctionPosList[auctionRound];
            document.getElementById('auction-pos-title').innerText = "المركز الحالى: " + posObj.name;
            currentBidVal = 10;
            document.getElementById('current-bid').innerText = currentBidVal;
            document.getElementById('custom-bid-input').value = "";
            document.getElementById('send-bid-btn').style.display = "none";

            currentCard = getRandomUniquePlayer(posObj.key);

            document.getElementById('card-rating').innerText = currentCard.rating;
            document.getElementById('card-pos').innerText = currentCard.pos;
            document.getElementById('card-name').innerText = currentCard.name;
            document.getElementById('card-type').innerText = currentCard.type;

            if (selectedMode === 'ai' && activeTurn === 2) {
                setTimeout(handleAIBid, 600);
            }
        }

        function placeBid(amount) {
            const newBid = currentBidVal + amount;
            const currentBudget = activeTurn === 1 ? budgetP1 : budgetP2;

            if (newBid > currentBudget) {
                alert("الميزانية لا تكفي لهذه المزايدة!");
                return;
            }

            currentBidVal = newBid;
            document.getElementById('current-bid').innerText = currentBidVal;

            activeTurn = activeTurn === 1 ? 2 : 1;
            updateTurnDisplay();

            if (selectedMode === 'ai' && activeTurn === 2) {
                setTimeout(handleAIBid, 600);
            }
        }

        function handleAIBid() {
            if (selectedMode !== 'ai' || activeTurn !== 2) return;

            const diff = document.getElementById('bot-difficulty').value;
            const remainingRounds = auctionPosList.length - auctionRound;
            const safeReserve = (remainingRounds - 1) * 10;

            let ratingWeight = currentCard.rating;
            if (currentCard.type.includes("CHAMPIONS") || currentCard.type.includes("ICON")) {
                ratingWeight += 2;
            }

            let valueMultiplier = 1.0;
            let aggroFactor = 0.5;

            switch (diff) {
                case 'beginner': valueMultiplier = 0.8; aggroFactor = 0.2; break;
                case 'amateur': valueMultiplier = 1.0; aggroFactor = 0.4; break;
                case 'semi-pro': valueMultiplier = 1.3; aggroFactor = 0.6; break;
                case 'pro': valueMultiplier = 1.7; aggroFactor = 0.8; break;
                case 'world-class': valueMultiplier = 2.2; aggroFactor = 0.9; break;
                case 'legendary': valueMultiplier = 3.0; aggroFactor = 0.98; break;
            }

            let maxWillingToPay = Math.round(((ratingWeight - 70) * (initialBudget / 100)) * valueMultiplier);
            maxWillingToPay = Math.max(15, maxWillingToPay);

            const maxAllowedBid = Math.min(budgetP2 - safeReserve, maxWillingToPay);

            if (currentBidVal < maxAllowedBid && budgetP2 > currentBidVal + 1 && Math.random() < aggroFactor) {
                let increment = 1;
                if ((diff === 'legendary' || diff === 'world-class') && ratingWeight >= 98 && (currentBidVal + 5) <= maxAllowedBid) {
                    increment = (Math.random() > 0.5) ? 5 : 1;
                } else if ((currentBidVal + 5) <= maxAllowedBid && Math.random() < 0.3) {
                    increment = 5;
                }
                placeBid(increment);
            } else {
                surrenderBid();
            }
        }

        function surrenderBid() {
            const winner = activeTurn === 1 ? 2 : 1;
            const winnerName = winner === 1 ? p1Name : p2Name;
            const loser = winner === 1 ? 2 : 1;
            const loserName = winner === 1 ? p2Name : p1Name;

            const posObj = auctionPosList[auctionRound];
            const giftPlayer = getRandomUniquePlayer(posObj.key);

            let msg = `انسحب ${loserName}! فاز ${winnerName} باللاعب (${currentCard.name}) بسعر ${currentBidVal}M $.\n\n🎁 وكهدية مجانية: حصل ${loserName} على اللاعب (${giftPlayer.name} - طاقة ${giftPlayer.rating}) مجاناً!`;
            alert(msg);

            if (winner === 1) {
                budgetP1 -= currentBidVal;
                document.getElementById('p1-budget').innerText = budgetP1;
                p1Squad.push({ ...currentCard, cost: currentBidVal });
                
                p2Squad.push({ ...giftPlayer, cost: 0 });
            } else {
                budgetP2 -= currentBidVal;
                document.getElementById('p2-budget').innerText = budgetP2;
                p2Squad.push({ ...currentCard, cost: currentBidVal });

                p1Squad.push({ ...giftPlayer, cost: 0 });
            }

            auctionRound++;
            activeTurn = winner;
            updateTurnDisplay();
            loadAuctionCard();
        }

        function finishAuctionGame() {
            showSquadsPage();
        }

        function showSquadsPage() {
            document.getElementById('sq-p1-title').innerText = "تشكيلة " + p1Name;
            document.getElementById('sq-p2-title').innerText = "تشكيلة " + p2Name;

            renderSquadList(1);
            renderSquadList(2);

            showSection('squads-section');

            // AI Wildcard usage on its lowest rated single player
            if (selectedMode === 'ai' && !p2WildcardUsed && p2Squad.length > 0) {
                let minIdx = 0;
                for (let i = 1; i < p2Squad.length; i++) {
                    if (p2Squad[i].rating < p2Squad[minIdx].rating) {
                        minIdx = i;
                    }
                }
                if (p2Squad[minIdx].rating < 88) {
                    setTimeout(() => {
                        useWildcardForPlayer(2, minIdx);
                    }, 1200);
                }
            }
        }

        // 🌟 التعديل الأساسي: الوايلد كارد على لاعب واحد فقط
        function renderSquadList(pNum) {
            const listElem = document.getElementById(pNum === 1 ? 'sq-p1-list' : 'sq-p2-list');
            const squad = pNum === 1 ? p1Squad : p2Squad;
            const wildcardUsed = pNum === 1 ? p1WildcardUsed : p2WildcardUsed;

            let html = '<ul style="list-style:none; padding:0;">';
            squad.forEach((p, idx) => {
                html += `<li style="padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.1); display:flex; justify-content:space-between; align-items:center;">
                    <span><b>${p.pos}</b>: ${p.name}</span>
                    <div style="display:flex; align-items:center; gap:8px;">
                        <span style="color:var(--gold-primary)">⚡ ${p.rating}</span>
                        ${!wildcardUsed ? `<button class="btn btn-secondary" style="padding: 2px 8px; font-size: 0.75rem;" onclick="useWildcardForPlayer(${pNum}, ${idx})">🃏 وايلد كارد</button>` : ''}
                    </div>
                </li>`;
            });
            html += '</ul>';

            if (wildcardUsed) {
                html += `<div style="text-align:center; color:#ff3366; font-weight:bold; margin-top:10px; font-size:0.85rem; background:rgba(255,51,102,0.1); padding:5px; border-radius:8px;">🔒 تم استخدام الوايلد كارد على لاعب (مغلق)</div>`;
            } else {
                html += `<p style="font-size:0.8rem; color:#aaa; text-align:center; margin-top:8px;">اضغط زر "🃏 وايلد كارد" بجانب أي لاعب لاستبداله مرة واحدة فقط!</p>`;
            }

            listElem.innerHTML = html;
        }

        function useWildcardForPlayer(pNum, idx) {
            const name = pNum === 1 ? p1Name : p2Name;
            
            if ((pNum === 1 && p1WildcardUsed) || (pNum === 2 && p2WildcardUsed)) {
                alert("🔒 عذراً، تم استخدام الوايلد كارد مسبقاً! مسموح بها مرة واحدة فقط على لاعب واحد طوال اللعبة.");
                return;
            }

            const squad = pNum === 1 ? p1Squad : p2Squad;
            const oldPlayer = squad[idx];
            const newPlayer = getRandomUniquePlayer(oldPlayer.pos);

            squad[idx] = { ...newPlayer, cost: oldPlayer.cost || 0 };

            if (pNum === 1) p1WildcardUsed = true;
            else p2WildcardUsed = true;

            alert(`🃏 قام ${name} بتبديل اللاعب (${oldPlayer.name} - طاقة ${oldPlayer.rating}) باللاعب الجديد (${newPlayer.name} - طاقة ${newPlayer.rating}) عبر الوايلد كارد!\n\nتم قفل خيار الوايلد كارد تماماً.`);
            renderSquadList(pNum);
        }

        // DEAL OR NO DEAL SYSTEM
        function startDealOrNoDeal() {
            dealStage = 0;
            p1Squad = [];
            p2Squad = [];
            p1WildcardUsed = false;
            p2WildcardUsed = false;
            usedPlayerNames.clear();
            
            setupDealStage();
            showSection('deal-game');
        }

        function setupDealStage() {
            if (dealStage >= posNames11.length) {
                showSquadsPage();
                return;
            }

            const currentPosObj = posNames11[dealStage];
            document.getElementById('deal-stage-title').innerText = `DEAL OR NO DEAL - المركز (${dealStage + 1}/11): ${currentPosObj.name}`;
            document.getElementById('deal-turn-info').innerText = `اختر صندوقك! أمامك 4 صناديق ومحاولتين فقط بهذا المركز.`;

            dealP1Data = { attempts: 0, chosenPlayer: null, isDone: false, tempPlayer: null };
            dealP2Data = { attempts: 0, chosenPlayer: null, isDone: false, tempPlayer: null };

            document.getElementById('deal-p1-title').innerText = `${p1Name}: اختر صندوقك (محاولة 1 من 2)`;
            document.getElementById('deal-p2-title').innerText = `${p2Name}: اختر صندوقك (محاولة 1 من 2)`;

            resetBoxesUI('p1-deal-boxes');
            resetBoxesUI('p2-deal-boxes');

            document.getElementById('p1-deal-status').innerHTML = '';
            document.getElementById('p2-deal-status').innerHTML = '';
            document.getElementById('deal-next-btn').style.display = 'none';

            if (selectedMode === 'ai') {
                setTimeout(() => {
                    const boxes = document.querySelectorAll('#p2-deal-boxes .box');
                    if(boxes.length > 0) openDealBox(2, 0, boxes[0]);
                }, 800);
            }
        }

        function resetBoxesUI(containerId) {
            const container = document.getElementById(containerId);
            const pNum = containerId.includes('p1') ? 1 : 2;
            container.innerHTML = `
                <div class="box" onclick="openDealBox(${pNum}, 0, this)">📦 صندوق 1</div>
                <div class="box" onclick="openDealBox(${pNum}, 1, this)">📦 صندوق 2</div>
                <div class="box" onclick="openDealBox(${pNum}, 2, this)">📦 صندوق 3</div>
                <div class="box" onclick="openDealBox(${pNum}, 3, this)">📦 صندوق 4</div>
            `;
        }

        function openDealBox(pNum, boxIdx, boxElem) {
            const pData = pNum === 1 ? dealP1Data : dealP2Data;
            const pName = pNum === 1 ? p1Name : p2Name;
            const statusElem = document.getElementById(pNum === 1 ? 'p1-deal-status' : 'p2-deal-status');
            const posKey = posNames11[dealStage].key;

            if (pData.isDone) return;

            pData.attempts++;
            const player = getRandomUniquePlayer(posKey);

            boxElem.classList.add('opened');
            boxElem.innerText = `${player.name} (${player.rating})`;

            if (pData.attempts === 1) {
                pData.tempPlayer = player;
                statusElem.innerHTML = `
                    <p style="color:var(--gold-primary); margin-bottom:8px;">حصلت على: <b>${player.name}</b> (طاقة ${player.rating})</p>
                    <div class="choice-btn-group">
                        <button class="btn" onclick="acceptDealPlayer(${pNum})">قبول 🤝 (DEAL)</button>
                        <button class="btn btn-danger" onclick="rejectDealPlayer(${pNum})">رفض ❌ (NO DEAL)</button>
                    </div>
                `;

                if (pNum === 2 && selectedMode === 'ai') {
                    setTimeout(() => {
                        if (player.rating >= 88) {
                            acceptDealPlayer(2);
                        } else {
                            rejectDealPlayer(2);
                        }
                    }, 800);
                }
            } else if (pData.attempts === 2) {
                pData.chosenPlayer = player;
                pData.isDone = true;
                if (pNum === 1) p1Squad.push(player);
                else p2Squad.push(player);

                statusElem.innerHTML = `<p style="color:var(--accent-green); font-weight:bold;">تمت الإضافة إجبارياً: ${player.name} (طاقة ${player.rating})</p>`;
                checkBothDealDone();
            }
        }

        function acceptDealPlayer(pNum) {
            const pData = pNum === 1 ? dealP1Data : dealP2Data;
            const statusElem = document.getElementById(pNum === 1 ? 'p1-deal-status' : 'p2-deal-status');
            
            pData.chosenPlayer = pData.tempPlayer;
            pData.isDone = true;
            if (pNum === 1) p1Squad.push(pData.chosenPlayer);
            else p2Squad.push(pData.chosenPlayer);

            statusElem.innerHTML = `<p style="color:var(--accent-green); font-weight:bold;">تم القبول (DEAL): ${pData.chosenPlayer.name} (طاقة ${pData.chosenPlayer.rating})</p>`;
            checkBothDealDone();
        }

        function rejectDealPlayer(pNum) {
            const pData = pNum === 1 ? dealP1Data : dealP2Data;
            const statusElem = document.getElementById(pNum === 1 ? 'p1-deal-status' : 'p2-deal-status');
            const titleElem = document.getElementById(pNum === 1 ? 'deal-p1-title' : 'deal-p2-title');
            const pName = pNum === 1 ? p1Name : p2Name;

            titleElem.innerText = `${pName}: اختر صندوقاً آخر (محاولة 2 أصلية وأخيرة)`;
            statusElem.innerHTML = `<p style="color:var(--accent-red)">تم الرفض (NO DEAL)! اختر صندوقاً آخر لتأخذه إجبارياً.</p>`;

            if (pNum === 2 && selectedMode === 'ai') {
                setTimeout(() => {
                    const boxes = document.querySelectorAll('#p2-deal-boxes .box:not(.opened)');
                    if (boxes.length > 0) openDealBox(2, 1, boxes[0]);
                }, 800);
            }
        }

        function checkBothDealDone() {
            if (dealP1Data.isDone && dealP2Data.isDone) {
                document.getElementById('deal-next-btn').style.display = 'block';
            }
        }

        function nextDealStage() {
            dealStage++;
            setupDealStage();
        }

        // CAPTAIN & MATCH RESULTS SYSTEM
        function goToCaptainSelection() {
            const select1 = document.getElementById('select-cap-p1');
            const select2 = document.getElementById('select-cap-p2');

            document.getElementById('cap-p1-label').innerText = "كابتن " + p1Name + ":";
            document.getElementById('cap-p2-label').innerText = "كابتن " + p2Name + ":";

            select1.innerHTML = p1Squad.map(p => `<option value="${p.name}">${p.name} (${p.pos} - ${p.rating})</option>`).join('');
            select2.innerHTML = p2Squad.map(p => `<option value="${p.name}">${p.name} (${p.pos} - ${p.rating})</option>`).join('');

            showSection('captain-section');
        }

        function generateMatchResults() {
            const cap1 = document.getElementById('select-cap-p1').value;
            const cap2 = document.getElementById('select-cap-p2').value;

            const avg1 = Math.round(p1Squad.reduce((a, b) => a + b.rating, 0) / (p1Squad.length || 1));
            const avg2 = Math.round(p2Squad.reduce((a, b) => a + b.rating, 0) / (p2Squad.length || 1));

            document.getElementById('p1-ovr-name').innerText = p1Name;
            document.getElementById('p2-ovr-name').innerText = p2Name;
            document.getElementById('p1-ovr-val').innerText = avg1;
            document.getElementById('p2-ovr-val').innerText = avg2;

            document.getElementById('match-teams-title').innerText = `${p1Name} (كابتن: ${cap1})  ضد  ${p2Name} (كابتن: ${cap2})`;

            const strength1 = avg1 + Math.random()*10 - 5;
            const strength2 = avg2 + Math.random()*10 - 5;
            let score1 = Math.max(0, Math.min(6, Math.round(Math.random()*2.6 + (strength1-strength2)/18)));
            let score2 = Math.max(0, Math.min(6, Math.round(Math.random()*2.6 + (strength2-strength1)/18)));
            // أحياناً التعادل طبيعي، وأحياناً الفريق الأقوى يفوز لكن بدون نتيجة ثابتة.

            document.getElementById('final-score-display').innerText = `${score1} - ${score2}`;

            let winnerText = "";
            if (score1 > score2) winnerText = `🎉 الفائز بالمباراة: ${p1Name} 🎉`;
            else if (score2 > score1) winnerText = `🎉 الفائز بالمباراة: ${p2Name} 🎉`;
            else winnerText = '🤝 انتهت المباراة بالتعادل!';
            document.getElementById('winner-text').innerText = winnerText;

            // Generate Match Events
            let eventsHtml = "<ul>";
            const scorers1 = p1Squad.filter(p => p.pos === 'ST' || p.pos === 'RW' || p.pos === 'LW' || p.pos === 'CAM');
            const scorers2 = p2Squad.filter(p => p.pos === 'ST' || p.pos === 'RW' || p.pos === 'LW' || p.pos === 'CAM');

            for (let i = 0; i < score1; i++) {
                const scorer = scorers1[Math.floor(Math.random() * scorers1.length)] || p1Squad[0];
                eventsHtml += `<li>⚽ هدف لـ <b>${p1Name}</b> بواسطة <b>${scorer.name}</b> في الدقيقة ${Math.floor(Math.random() * 80) + 10}'</li>`;
            }
            for (let i = 0; i < score2; i++) {
                const scorer = scorers2[Math.floor(Math.random() * scorers2.length)] || p2Squad[0];
                eventsHtml += `<li>⚽ هدف لـ <b>${p2Name}</b> بواسطة <b>${scorer.name}</b> في الدقيقة ${Math.floor(Math.random() * 80) + 10}'</li>`;
            }
            eventsHtml += "</ul>";
            document.getElementById('match-events-content').innerHTML = eventsHtml;

            // Generate Match Stats
            const poss1 = 50 + (avg1 - avg2) * 2;
            const poss2 = 100 - poss1;
            const shots1 = score1 + Math.floor(Math.random() * 5) + 3;
            const shots2 = score2 + Math.floor(Math.random() * 5) + 3;

            let statsHtml = `
                <table style="width:100%; border-collapse:collapse; font-size:0.9rem;">
                    <tr><td>${poss1}%</td><th>الاستحواذ</th><td>${poss2}%</td></tr>
                    <tr><td>${shots1}</td><th>إجمالي التسديدات</th><td>${shots2}</td></tr>
                    <tr><td>${score1 + 1}</td><th>التسديدات على المرمى</th><td>${score2 + 1}</td></tr>
                </table>
            `;
            document.getElementById('match-stats-content').innerHTML = statsHtml;

            matchSummaryText = `🏆 نتيجة مباراة R2 GAMES الرسمية:\n⚽ ${p1Name} (${score1}) - (${score2}) ${p2Name}\n⚡ OVR: ${p1Name} [${avg1}] VS ${p2Name} [${avg2}]\n👑 الكباتن: ${cap1} VS ${cap2}\n\nالعب الآن على منصة R2 GAMES!`;

            showSection('results-section');
        }

        // Sharing Functions
        function shareToWhatsApp() {
            window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(matchSummaryText)}`, '_blank');
        }

        function shareToFacebook() {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(matchSummaryText)}`, '_blank');
        }

        function shareToMessenger() {
            window.open(`fb-messenger://share/?link=${encodeURIComponent(window.location.href)}`, '_blank');
        }

        function shareGeneric() {
            if (navigator.share) {
                navigator.share({
                    title: 'نتيجة مباراة R2 GAMES',
                    text: matchSummaryText,
                    url: window.location.href,
                }).catch(() => {});
            } else {
                alert("تم نسخ ملخص المباراة إلى الحافظة!");
                navigator.clipboard.writeText(matchSummaryText);
            }
        }
    

window.R2=(function(){
 const key='r2_games_profile_v4'; const def={level:1,xp:0,xb:0,coins:0,points:3000,team:[],bench:[],freeDrafts:0,tournaments:{},usedCodes:{},tasks:[{id:'games',name:'أنهِ لعبة واحدة',progress:0,target:1,done:false,reward:{points:1000}},{id:'draft',name:'افتح Draft واحد',progress:0,target:1,done:false,reward:{coins:5000,freeDraft:true}}]};
 const state=Object.assign(def,JSON.parse(localStorage.getItem(key)||'{}'));
 const save=()=>localStorage.setItem(key,JSON.stringify(state));
 const allPlayers=()=>typeof playersByPos!=='undefined'?Object.values(playersByPos).flat():[];
 const uniquePool=()=>{let used=new Set([...state.team,...state.bench].map(p=>p.name));return allPlayers().filter(p=>!used.has(p.name))};
 const draw=n=>{let pool=uniquePool(),out=[];for(let i=0;i<n&&pool.length;i++)out.push(pool.splice(Math.floor(Math.random()*pool.length),1)[0]);return out};
 const price=p=>Math.max(500,Math.round((p.rating-60)*900));
 function addXP(n){state.xp+=n;while(state.xp>=100&&state.level<1000){state.xp-=100;state.level++;if(state.level===2){state.points+=3000;state.coins+=1000;alert('🎉 وصلت إلى LEVEL 2! حصلت على 3000 POINTS و1000 MARKET COINS');}else{state.points+=1000;}}save()}
 function render(){let avg=state.team.length?Math.round(state.team.reduce((a,p)=>a+p.rating,0)/state.team.length):0;for(let [id,v] of Object.entries({'r2-level':state.level,'r2-xp':state.xp,'r2-xb':state.xb,'r2-points':state.points,'r2-coins':state.coins,'r2-free-count':state.freeDrafts,'r2-ovr':avg})){let e=document.getElementById(id);if(e)e.textContent=v}let team=document.getElementById('r2-team');if(team)team.innerHTML=state.team.map(p=>`<div class="r2-player">${p.name} — ${p.pos} ⚡ ${p.rating}</div>`).join('')||'<div class="r2-small">التشكيلة فارغة</div>';let t=document.getElementById('r2-tasks');if(t)t.innerHTML=state.tasks.map((x,i)=>`<div class="r2-player">${x.done?'✅':'⏳'} ${x.name}: ${x.progress}/${x.target} ${!x.done&&x.progress>=x.target?`<button class="btn" onclick="R2.claimTask(${i})">استلام</button>`:''}</div>`).join('');save()}
 function task(id,n=1){let x=state.tasks.find(t=>t.id===id&&!t.done);if(x)x.progress=Math.min(x.target,x.progress+n);render()}
 return {render,
 openDraftMenu(){let a=document.getElementById('r2-action');a.innerHTML=`<div class="r2-card"><button class="btn" onclick="R2.openDraft(1)">1 لاعب — 2000 POINTS</button><button class="btn" onclick="R2.openDraft(5)">5 لاعبين — 9750 POINTS</button><button class="btn" onclick="R2.openDraft(10)">10 لاعبين — 17500 POINTS</button>${state.freeDrafts?'<button class="btn" onclick="R2.openFreeDraft()">🎁 افتح الدرافت</button>':''}</div>`},
 openDraft(n){let c={1:2000,5:9750,10:17500}[n];if(state.points<c)return alert('POINTS لا تكفي');state.points-=c;let ps=draw(n);state.team.push(...ps);task('draft');render();alert('تم فتح '+ps.length+' لاعب بدون تكرار: '+ps.map(p=>p.name).join('، '))},
 openFreeDraft(){if(!state.freeDrafts)return;state.freeDrafts--;state.team.push(...draw(1));render()},
 openMarket(){let ps=uniquePool().slice(0,50),a=document.getElementById('r2-action');a.innerHTML='<div class="r2-card">'+ps.map((p,i)=>`<div class="r2-player">${p.name} — ${p.rating} — ${price(p)} COINS <button class="btn" onclick="R2.buyMarket(${i})">شراء</button></div>`).join('')+'</div>';window.__r2Market=ps},
 buyMarket(i){let p=(window.__r2Market||[])[i];if(!p)return;if(state.team.some(x=>x.name===p.name)||state.bench.some(x=>x.name===p.name))return alert('ممنوع تكرار اللاعبين');let c=price(p);if(state.coins<c)return alert('MARKET COINS لا تكفي');state.coins-=c;state.team.length<11?state.team.push(p):state.bench.push(p);render()},
 explainTeam(){document.getElementById('r2-action').innerHTML='<div class="r2-card">⚽ هنا لا يوجد ملء عشوائي للتشكيلة. ابنِ فريقك بنفسك مثل FC Mobile: افتح DRAFT بالـ POINTS أو اشترِ اللاعبين من MARKET بالـ MARKET COINS. اللاعب الذي تكسبه فقط هو الذي يدخل فريقك، وممنوع التكرار.</div>'},clearTeam(){state.team=[];render()},showBench(){document.getElementById('r2-action').innerHTML='<div class="r2-card">'+(state.bench.map(p=>`<div class="r2-player">${p.name} — ${p.rating}</div>`).join('')||'الاحتياطي فارغ')+'</div>'},showResources(){document.getElementById('r2-action').innerHTML='<div class="r2-card">🎁 XB: '+state.xb+'<br>💰 MARKET COINS: '+state.coins+'<br>🔵 POINTS: '+state.points+'</div>'},
 claimTask(i){let x=state.tasks[i];if(!x||x.done||x.progress<x.target)return;x.done=true;state.points+=x.reward.points||0;state.coins+=x.reward.coins||0;if(x.reward.freeDraft)state.freeDrafts++;state.tasks.push({id:'hard'+Date.now(),name:'مهمة أصعب: أنهِ 5 ألعاب',progress:0,target:5,done:false,reward:{points:5000,coins:10000,freeDraft:true}});render()},
 completeGame(){state.xb+=15;state.coins+=800;state.points+=500;addXP(15);task('games');state.tasks.filter(x=>x.id.startsWith('hard')).forEach(x=>x.progress=Math.min(x.target,x.progress+1));render();},
 createTournament(){let size=+document.getElementById('r2-tournament-size').value,count=size===127?127:size-1,name=document.getElementById('r2-tournament-name').value.trim();if(!name)return alert('اكتب اسم البطولة أولاً');let game=document.getElementById('r2-tournament-game').value,id='T'+Date.now(),codes=[];for(let i=0;i<count;i++){let c;do{c=Math.random().toString(36).slice(2,10).toUpperCase()}while(codes.includes(c));codes.push(c)}state.tournaments[id]={id,name,game,size,codes,players:['أنت'],finished:false};document.getElementById('r2-tournament-info').innerHTML=`<div class="r2-card">تم إنشاء <b>${name}</b> — ${game}<br>أنت مسجل تلقائياً 1/${size}.<br>الأكواد المطلوبة للانضمام (${count}):<br><small>${codes.join(' | ')}</small></div>`;save()},
 joinTournament(){let code=document.getElementById('r2-tournament-code').value.trim().toUpperCase();for(let t of Object.values(state.tournaments)){if(t.codes.includes(code)){if(state.usedCodes[code])return alert('الكود ده مستخدم ومش هينفع تستخدمه');if(t.players.length>=t.size)return alert('البطولة اكتملت');state.usedCodes[code]=true;t.players.push('لاعب '+t.players.length);let text=`تم الدخول: ${t.players.length}/${t.size}`;if(t.players.length===t.size)text+=' — اكتملت البطولة، يبدأ دور الـ '+Math.ceil(t.size/2);document.getElementById('r2-tournament-info').textContent=text;save();return}}alert('الكود غير صحيح')}
 }
})();
const __oldGenerate=window.generateMatchResults;if(__oldGenerate)window.generateMatchResults=function(){__oldGenerate();R2.completeGame();};
const __oldOpenModal=window.openModal;if(__oldOpenModal)window.openModal=function(id){__oldOpenModal(id);if(id==='newsModal')loadR2News();};
window.startBlindAuctionSetup=()=>showSection('blind-setup');
let blindPositions=[],blindRound=0,blindCard=null,blindBidOne=null,blindBidTwo=null,blindBudgetOne=0,blindBudgetTwo=0;
window.startBlindAuctionGame=function(){let n=+document.getElementById('blind-count-select').value,b=+document.getElementById('blind-budget-select').value;blindPositions=n===5?posNames5:posNames11;blindRound=0;blindBudgetOne=b;blindBudgetTwo=b;blindBidOne=null;blindBidTwo=null;p1Squad=[];p2Squad=[];p1WildcardUsed=false;p2WildcardUsed=false;usedPlayerNames.clear();document.getElementById('blind-p1-name').textContent=p1Name;document.getElementById('blind-p2-name').textContent=p2Name;showSection('blind-game');loadBlindCard()}
function loadBlindCard(){if(blindRound>=blindPositions.length){showSquadsPage();return}let pos=blindPositions[blindRound];blindCard=getRandomUniquePlayer(pos.key);document.getElementById('blind-pos-title').textContent='المركز الحالي: '+pos.name;document.getElementById('blind-card-rating').textContent=blindCard.rating;document.getElementById('blind-card-pos').textContent=blindCard.pos;document.getElementById('blind-card-name').textContent=blindCard.name;document.getElementById('blind-card-type').textContent=blindCard.type;document.getElementById('blind-p1-budget').textContent=blindBudgetOne;document.getElementById('blind-p2-budget').textContent=blindBudgetTwo;document.getElementById('blind-turn-display').textContent='📱 اللاعب 2: أعطِ الهاتف للاعب 1 ليكتب عرضه سراً';document.getElementById('blind-p1-btn').style.display='inline-block';document.getElementById('blind-p2-btn').style.display='none';document.getElementById('blind-status').textContent='';blindBidOne=null;blindBidTwo=null}
window.blindEnterBid=function(n){let budget=n===1?blindBudgetOne:blindBudgetTwo,name=n===1?p1Name:p2Name,val=prompt(name+' اكتب عرضك السري بالمليون:');if(val===null)return;val=Number(val);if(!Number.isFinite(val)||val<=0||val>budget)return alert('عرض غير صحيح أو أكبر من الميزانية');if(n===1){blindBidOne=val;document.getElementById('blind-p1-btn').style.display='none';document.getElementById('blind-p2-btn').style.display='inline-block';document.getElementById('blind-turn-display').textContent='📱 الآن اللاعب 1: أعطِ الهاتف للاعب 2 ليكتب عرضه سراً'}else{blindBidTwo=val;resolveBlindBid()}}
function resolveBlindBid(){if(blindBidOne===blindBidTwo){document.getElementById('blind-status').innerHTML='تعادل في العرض! ابدأوا المزايدة السرية من جديد.';document.getElementById('blind-p1-btn').style.display='inline-block';document.getElementById('blind-p2-btn').style.display='none';blindBidOne=null;blindBidTwo=null;return}let p1win=blindBidOne>blindBidTwo,winner=p1win?1:2,gift=getRandomUniquePlayer(blindCard.pos);if(p1win){blindBudgetOne-=blindBidOne;p1Squad.push({...blindCard,cost:blindBidOne});p2Squad.push({...gift,cost:0})}else{blindBudgetTwo-=blindBidTwo;p2Squad.push({...blindCard,cost:blindBidTwo});p1Squad.push({...gift,cost:0})}document.getElementById('blind-status').innerHTML=`<b>تم الكشف:</b> ${p1Name}: ${blindBidOne}M — ${p2Name}: ${blindBidTwo}M<br>🏆 الفائز ${winner===1?p1Name:p2Name} أخذ ${blindCard.name}، والآخر أخذ ${gift.name} مجاناً 🎁`;document.getElementById('blind-p1-btn').style.display='none';document.getElementById('blind-p2-btn').style.display='none';setTimeout(()=>{blindRound++;loadBlindCard()},1800)}

const R2_GUESS_PLAYERS=[
['كريستيانو رونالدو',['سبورتينغ لشبونة','مانشستر يونايتد','ريال مدريد','يوفنتوس','النصر']],['ليونيل ميسي',['برشلونة','باريس سان جيرمان','إنتر ميامي']],['نيمار',['سانتوس','برشلونة','باريس سان جيرمان','الهلال','سانتوس']],['كيليان مبابي',['موناكو','باريس سان جيرمان','ريال مدريد']],['محمد صلاح',['المقاولون','بازل','تشيلسي','فيورنتينا','روما','ليفربول']],['زلاتان إبراهيموفيتش',['مالمو','أياكس','يوفنتوس','إنتر','برشلونة','ميلان','باريس سان جيرمان','مانشستر يونايتد']],['لوكا مودريتش',['دينامو زغرب','توتنهام','ريال مدريد','ميلان']],['روبرت ليفاندوفسكي',['بوروسيا دورتموند','بايرن ميونخ','برشلونة']],['إيرلينغ هالاند',['مولده','سالزبورغ','بوروسيا دورتموند','مانشستر سيتي']],['كريم بنزيما',['ليون','ريال مدريد','الاتحاد']],['سيرجيو راموس',['إشبيلية','ريال مدريد','باريس سان جيرمان','مونتيري']],['تشافي',['برشلونة','السد']],['أندريس إنييستا',['برشلونة','فيسيل كوبي','الإمارات']],['رونالدينيو',['غريميو','باريس سان جيرمان','برشلونة','ميلان']],['رونالدو نازاريو',['كروزيرو','آيندهوفن','برشلونة','إنتر','ريال مدريد','ميلان','كورنثيانز']],['تييري هنري',['موناكو','يوفنتوس','أرسنال','برشلونة','نيويورك ريد بولز']],['ديفيد بيكهام',['مانشستر يونايتد','ريال مدريد','ميلان','لوس أنجلوس غالاكسي','باريس سان جيرمان']],['واين روني',['إيفرتون','مانشستر يونايتد','دي سي يونايتد','ديربي']],['لويس سواريز',['ناسيونال','أياكس','ليفربول','برشلونة','أتلتيكو مدريد','إنتر ميامي']],['لويس فيغو',['سبورتينغ','برشلونة','ريال مدريد','إنتر']],['ريكاردو كاكا',['ساو باولو','ميلان','ريال مدريد','أورلاندو']],['آريين روبن',['غرونينغن','آيندهوفن','تشيلسي','ريال مدريد','بايرن']],['فرانك ريبيري',['مرسيليا','بايرن','فيورنتينا','ساليرنيتانا']],['مانويل نوير',['شالكه','بايرن ميونخ']],['جانلويجي بوفون',['بارما','يوفنتوس','باريس سان جيرمان']],['إيكر كاسياس',['ريال مدريد','بورتو']],['بيبي',['ماريتيمو','بورتو','ريال مدريد','بشكتاش']],['فيرجيل فان دايك',['غرونينغن','سيلتيك','ساوثهامبتون','ليفربول']],['كيفن دي بروين',['جينك','تشيلسي','فيردر بريمن','فولفسبورغ','مانشستر سيتي']],['تشابي ألونسو',['ريال سوسيداد','إيبار','ليفربول','ريال مدريد','بايرن']],['جيرارد بيكيه',['برشلونة','مانشستر يونايتد','ريال سرقسطة','برشلونة']],['أنخيل دي ماريا',['روزاريو سنترال','بنفيكا','ريال مدريد','مانشستر يونايتد','باريس سان جيرمان','يوفنتوس','بنفيكا']],['باولو ديبالا',['إنستيتوتو','باليرمو','يوفنتوس','روما']],['أنتوان غريزمان',['ريال سوسيداد','أتلتيكو مدريد','برشلونة','أتلتيكو مدريد']],['سيرجيو أغويرو',['إنديبندينتي','أتلتيكو مدريد','مانشستر سيتي','برشلونة']],['هاري كين',['توتنهام','بايرن ميونخ']],['جود بيلينغهام',['برمنغهام','بوروسيا دورتموند','ريال مدريد']],['فينيسيوس جونيور',['فلامنغو','ريال مدريد']],['رودري',['فياريال','أتلتيكو مدريد','مانشستر سيتي']],['برونو فيرنانديز',['نوفارا','أودينيزي','سامبدوريا','سبورتينغ','مانشستر يونايتد']],['سون هيونغ مين',['هامبورغ','باير ليفركوزن','توتنهام']],['ساديو ماني',['ميتز','سالزبورغ','ساوثهامبتون','ليفربول','بايرن','النصر']],['رافائيل لياو',['سبورتينغ','ليل','ميلان']],['فيكتور أوسيمين',['فولفسبورغ','شارلروا','ليل','نابولي','غلطة سراي']],['لوتارو مارتينيز',['راسينغ','إنتر']],['إيدين هازارد',['ليل','تشيلسي','ريال مدريد']],['غاريث بيل',['ساوثهامبتون','توتنهام','ريال مدريد','لوس أنجلوس']],['مارسيلو',['فلومينينسي','ريال مدريد','أولمبياكوس','فلومينينسي']],['روبرتو كارلوس',['بالميراس','إنتر','ريال مدريد','فنربخشة','كورينثيانز']],['ديدييه دروغبا',['لو مان','غانغان','مارسيليا','تشيلسي','غلطة سراي']],['يايا توريه',['بيفيرين','ميتاليورغ','أولمبياكوس','موناكو','برشلونة','مانشستر سيتي']],['صامويل إيتو',['ريال مدريد','مايوركا','برشلونة','إنتر','أنجي','تشيلسي','إيفرتون','سامبدوريا']],['تشابي',['سبورتينغ لشبونة','برشلونة','بايرن','السد']],['داني ألفيش',['باهيا','إشبيلية','برشلونة','يوفنتوس','باريس سان جيرمان','ساو باولو','بوماس']],['جورج بست',['مانشستر يونايتد','فولهام','لوس أنجلوس أزتيكس']]
];
let guessPool=[],guessRound=0,guessCurrent=null,guessScore1=0,guessScore2=0,guessTurn=1;
window.startGuessPlayerGame=function(){guessPool=[...R2_GUESS_PLAYERS].sort(()=>Math.random()-.5).slice(0,5);guessRound=0;guessScore1=0;guessScore2=0;guessTurn=1;showSection('guess-game');loadGuessRound()}
function loadGuessRound(){if(guessRound>=5){document.getElementById('guess-clubs').innerHTML='🏁 انتهت 5 جولات!';document.getElementById('guess-turn').innerHTML=`📊 ${p1Name}: ${guessScore1}/5 — ${p2Name}: ${guessScore2}/5`;document.getElementById('guess-result').innerHTML='تم حساب النتيجة والمكافآت. 🎁 15 XB + 800 MARKET COINS + 500 POINTS';R2.completeGame();return}guessCurrent=guessPool[guessRound];guessTurn=1;renderGuessTurn()}
function renderGuessTurn(){document.getElementById('guess-round').textContent='الجولة '+(guessRound+1)+' من 5';let n=guessTurn===1?p1Name:p2Name;document.getElementById('guess-turn').innerHTML='📱 دور '+n+' — أعطِ الهاتف له واكتب اسم اللاعب <b>بالعربي</b>.';document.getElementById('guess-clubs').innerHTML='🏟️ الأندية: <b>'+guessCurrent[1].join(' ← ')+'</b>';document.getElementById('guess-answer').value='';document.getElementById('guess-result').textContent=''}
window.submitGuess=function(){const input=document.getElementById('guess-answer');let a=normGuess(input.value),correct=normGuess(guessCurrent[0]);if(!a){document.getElementById('guess-result').innerHTML='❗ اكتب اسم اللاعب أولاً';return}let ok=a===correct||a.includes(correct)||correct.includes(a);let n=guessTurn===1?p1Name:p2Name;if(ok){if(guessTurn===1)guessScore1++;else guessScore2++;document.getElementById('guess-result').innerHTML='✅ إجابة صحيحة يا '+n+'! اللاعب هو: <b>'+guessCurrent[0]+'</b>';}else{document.getElementById('guess-result').innerHTML='❌ إجابة خاطئة يا '+n+'! الإجابة الصحيحة: <b>'+guessCurrent[0]+'</b>';}input.disabled=true;setTimeout(()=>{input.disabled=false;if(guessTurn===1){guessTurn=2;renderGuessTurn()}else{guessRound++;loadGuessRound()}},1300)};
let hiddenRound=0,hiddenTurn=1,hiddenVisible=null,hiddenSecret=null;
window.startHiddenPlayerGame=function(){hiddenRound=0;hiddenTurn=1;p1Squad=[];p2Squad=[];p1WildcardUsed=false;p2WildcardUsed=false;usedPlayerNames.clear();showSection('hidden-game');loadHiddenRound()}
function loadHiddenRound(){if(hiddenRound>=posNames11.length){showSquadsPage();return}const pos=posNames11[hiddenRound];hiddenVisible=getRandomUniquePlayer(pos.key);hiddenSecret=getRandomUniquePlayer(pos.key);document.getElementById('hidden-round').textContent='المركز '+(hiddenRound+1)+' من '+posNames11.length+' — '+pos.name;renderHiddenTurn()}
function newHiddenChoices(){const pos=posNames11[hiddenRound];hiddenVisible=getRandomUniquePlayer(pos.key);hiddenSecret=getRandomUniquePlayer(pos.key)}
function renderHiddenTurn(){let n=hiddenTurn===1?p1Name:p2Name;document.getElementById('hidden-turn').innerHTML='📱 دور '+n+' — أعطِ الهاتف له. اختَر اللاعب الظاهر أو اللاعب الخفي.';document.getElementById('hidden-choice').innerHTML='⚽ اللاعب الظاهر: <b>'+hiddenVisible.name+'</b> — طاقة '+hiddenVisible.rating+'<br>🕶️ اللاعب الخفي: <b>؟؟؟</b>';document.getElementById('hidden-result').textContent=''}
window.chooseHidden=function(secret){let pick=secret?hiddenSecret:hiddenVisible;let sq=hiddenTurn===1?p1Squad:p2Squad;sq.push({...pick,cost:0});document.getElementById('hidden-result').innerHTML=(secret?'🕶️ اخترت اللاعب الخفي: ':'⚽ اخترت اللاعب الظاهر: ')+'<b>'+pick.name+'</b> ('+pick.rating+')';if(hiddenTurn===1){hiddenTurn=2;setTimeout(()=>{newHiddenChoices();renderHiddenTurn()},1100)}else{hiddenRound++;hiddenTurn=1;setTimeout(loadHiddenRound,1200)}};


/* V6 EVENT + MARKET UPDATE */
const R2_WEEK1_REWARDS=[
{name:'ديفيد بيكهام',rating:101,pos:'CM'},
{name:'رافينيا',rating:100,pos:'RW'},
{name:'فينيسيوس',rating:100,pos:'LW'},
{name:'مايكل لاودروب',rating:101,pos:'CAM'}
];
const R2_WEEK2_REWARDS=[
{name:'Zidane',rating:103,pos:'GK'},
{name:'Casillas',rating:103,pos:'GK'},
{name:'YAN DIOMANDE',rating:101,pos:'LW'},
{name:'cucurela',rating:101,pos:'LB'}
];
let r2EventClaimed={1:false,2:false};
function eventState(){return JSON.parse(localStorage.getItem('r2_event_v6')||'{"weeks":{},"claimed":{"1":false,"2":false}}')}
function saveEventState(x){localStorage.setItem('r2_event_v6',JSON.stringify(x))}
function openEventWeek(week){
 const st=eventState(); const games=week===1?5:7;
 if(!st.weeks[week]){const modes=['المزاد برو ماكس','الملعب الخماسي','DEAL OR NO DEAL','المزاد الأعمى','تخمين اللاعب','اللاعب الخفي'];const a=[];while(a.length<games)a.push(modes[Math.floor(Math.random()*modes.length)]);st.weeks[week]={games:a,done:0};saveEventState(st)}
 r2EventWeek=week;r2EventGames=st.weeks[week].games;r2EventDone=st.weeks[week].done;
 document.getElementById('event-week-play').style.display='block';document.getElementById('event-week-play').textContent=r2EventDone>=games?'🎁 استلم هدية الأسبوع':'🎮 العب الآن';renderEventWeek();
}
function renderEventWeek(){const st=eventState(),w=st.weeks[r2EventWeek];if(!w)return;const el=document.getElementById('event-week-status');el.innerHTML='<b>الأسبوع '+r2EventWeek+'</b><br>'+w.games.map((g,i)=>`<div>${i<w.done?'✅':'⬜'} ${i+1}. ${g}</div>`).join('')+`<div style="margin-top:10px">🎯 مكافأة كل مباراة: 20 XB + 1000 MARKET COINS + 600 POINTS</div>`+(w.done>=w.games.length?'<div style="margin-top:8px;color:var(--gold-primary)">🎁 أنهيت الأسبوع! استلم مكافأتك الكبرى.</div>':'')}
function playCurrentEventMatch(){
 const st=eventState(),w=st.weeks[r2EventWeek];if(!w)return;
 if(w.done<w.games.length){alert('🎮 مباراة الحدث: '+w.games[w.done]+'\n🎁 تم منحك: 20 XB + 1000 MARKET COINS + 600 POINTS');if(window.R2){R2.state.xb+=20;R2.state.coins+=1000;R2.state.points+=600;R2.state.tasks.forEach(t=>{if(!t.done)t.progress++});R2.render()}w.done++;saveEventState(st);r2EventDone=w.done;renderEventWeek();document.getElementById('event-week-play').textContent=w.done>=w.games.length?'🎁 استلم هدية الأسبوع':'🎮 العب الآن';return}
 if(st.claimed[r2EventWeek])return alert('تم استلام هدية هذا الأسبوع بالفعل');
 const pool=r2EventWeek===1?R2_WEEK1_REWARDS:R2_WEEK2_REWARDS;const reward=pool[Math.floor(Math.random()*pool.length)];
 const exists=R2.state.team.concat(R2.state.bench).some(p=>p.name===reward.name);if(!exists){if(R2.state.team.length<11)R2.state.team.push(reward);else R2.state.bench.push(reward)}
 if(r2EventWeek===1){R2.state.xb+=150;R2.state.coins+=500;R2.state.points+=3000;R2.state.freeDrafts+=1;alert('🎉 هدية الأسبوع 1: '+reward.name+' '+reward.rating+' '+reward.pos+' تمت إضافته إلى Ultimate Team!\n+150 XB +500 MARKET COINS +3000 POINTS +1 DRAFT')}
 else {R2.state.xb+=200;R2.state.coins+=6000;R2.state.points+=4500;R2.state.freeDrafts+=2;alert('🏆 هدية الأسبوع 2: '+reward.name+' '+reward.rating+' '+reward.pos+' تمت إضافته إلى Ultimate Team!\n+200 XB +6000 MARKET COINS +4500 POINTS +2 DRAFT')}
 st.claimed[r2EventWeek]=true;saveEventState(st);R2.render();document.getElementById('event-week-play').style.display='none';renderEventWeek();
}
// Upgrade market: searchable, expensive, varied prices, including event players.
(function(){
 const oldOpen=R2.openMarket;
 function marketPool(){const base=typeof uniquePool==='function'?uniquePool().slice():[];[...R2_WEEK1_REWARDS,...R2_WEEK2_REWARDS].forEach(x=>{if(!base.some(p=>p.name===x.name))base.push(x)});return base}
 function strongPrice(p){const key=p.name+'-'+p.rating;let h=0;for(let i=0;i<key.length;i++)h=(h*31+key.charCodeAt(i))>>>0;const rarity=Math.max(0,p.rating-85);const base=25000+rarity*rarity*2200;const mult=1+(h%181)/100;let v=Math.round(base*mult/1000)*1000;if(p.rating>=100)v=Math.min(1000000,Math.max(350000,v*2));return v}
 R2.openMarket=function(){window.__r2Market=marketPool();const a=document.getElementById('r2-action');a.innerHTML='<div class="r2-card"><h3>🛒 MARKET</h3><input id="r2-market-search" placeholder="ابحث عن اللاعب" style="width:100%;padding:10px;border-radius:10px;margin-bottom:10px" oninput="R2.filterMarket(this.value)"><div id="r2-market-list"></div></div>';R2.filterMarket('')}
 R2.filterMarket=function(q){q=(q||'').trim().toLowerCase();const ps=(window.__r2Market||[]).filter(p=>!q||p.name.toLowerCase().includes(q));const el=document.getElementById('r2-market-list');el.innerHTML=ps.map(p=>{const i=window.__r2Market.indexOf(p);return `<div class="r2-player">${p.name} — ${p.pos} — ⚡${p.rating} — 💰 ${strongPrice(p).toLocaleString()} <button class="btn" onclick="R2.buyMarket(${i})">شراء</button></div>`}).join('')||'لا يوجد لاعب بهذا الاسم'};
 R2.buyMarket=function(i){const p=(window.__r2Market||[])[i];if(!p)return;if(R2.state.team.concat(R2.state.bench).some(x=>x.name===p.name))return alert('ممنوع تكرار اللاعبين');const c=strongPrice(p);if(R2.state.coins<c)return alert('MARKET COINS لا تكفي');R2.state.coins-=c;if(R2.state.team.length<11)R2.state.team.push(p);else R2.state.bench.push(p);R2.render();R2.filterMarket(document.getElementById('r2-market-search')?.value||'')};
})();


/* V7 FINAL PATCH: XB levels 1-100 + stronger market + reliable hidden/guess */
(function(){
  const old=window.R2;
  if(old){
    const raw=localStorage.getItem('r2_games_profile_v4');
    let st={}; try{st=JSON.parse(raw||'{}')}catch(e){}
    if(!st.level)st.level=1; if(!st.xb)st.xb=0;
    // XB itself drives progress. Level 2 at 100 XB, then progressively harder up to 100.
    const need=l=>100+Math.max(0,l-2)*25;
    function save(){localStorage.setItem('r2_games_profile_v4',JSON.stringify(st))}
    function levelUpFromXB(){
      let changed=false;
      while(st.level<100 && st.xb>=need(st.level)){
        st.xb-=need(st.level); st.level++; changed=true;
        const factor=st.level-1;
        const pts=3000+factor*250, coins=1000+factor*500;
        st.points=(st.points||0)+pts; st.coins=(st.coins||0)+coins;
        if(st.level%10===0)st.freeDrafts=(st.freeDrafts||0)+1;
        if(st.level===2)alert('🎉 LEVEL 2! حصلت على 3000 POINTS و1000 MARKET COINS');
      }
      if(st.level>=100)st.level=100;
      save(); return changed;
    }
    const oldComplete=old.completeGame;
    old.completeGame=function(){
      st=JSON.parse(localStorage.getItem('r2_games_profile_v4')||'{}');
      st.level=st.level||1; st.xb=(st.xb||0)+15; st.coins=(st.coins||0)+800; st.points=(st.points||0)+500;
      const taskGames=(st.tasks||[]).find(x=>x.id==='games'&&!x.done); if(taskGames)taskGames.progress=Math.min(taskGames.target,taskGames.progress+1);
      (st.tasks||[]).filter(x=>String(x.id||'').startsWith('hard')).forEach(x=>x.progress=Math.min(x.target,x.progress+1));
      levelUpFromXB(); save(); old.render(); alert('🎁 مكافأة اللعبة: 15 XB + 800 MARKET COINS + 500 POINTS');
    };
    old.openMarket=function(){
      st=JSON.parse(localStorage.getItem('r2_games_profile_v4')||'{}');
      const all=(typeof playersByPos!=='undefined'?Object.values(playersByPos).flat():[]).filter(p=>!((st.team||[]).some(x=>x.name===p.name)||(st.bench||[]).some(x=>x.name===p.name)));
      window.__r2Market=all.sort(()=>Math.random()-.5).slice(0,120);
      const a=document.getElementById('r2-action');
      a.innerHTML='<div class="r2-card"><input id="r2-market-search" class="r2-input" placeholder="ابحث عن اللاعب"><div id="r2-market-list"></div></div>';
      const renderMarket=()=>{let q=(document.getElementById('r2-market-search').value||'').toLowerCase();let list=window.__r2Market.filter(p=>String(p.name).toLowerCase().includes(q)).slice(0,80);document.getElementById('r2-market-list').innerHTML=list.map(p=>{let i=window.__r2Market.indexOf(p);let price=Math.round((Math.pow(Math.max(1,p.rating-55),2.15))*180);price=Math.min(1000000,Math.max(25000,price));return `<div class="r2-player">${p.name} — ${p.pos} — ⚡ ${p.rating} — 💰 ${price.toLocaleString()} <button class="btn" onclick="R2.buyMarketV7(${i},${price})">شراء</button></div>`}).join('')||'لا يوجد لاعب مطابق'};
      old.buyMarketV7=function(i,c){st=JSON.parse(localStorage.getItem('r2_games_profile_v4')||'{}');let p=window.__r2Market[i];if(!p)return;if((st.team||[]).some(x=>x.name===p.name)||(st.bench||[]).some(x=>x.name===p.name))return alert('ممنوع تكرار اللاعبين');if((st.coins||0)<c)return alert('MARKET COINS لا تكفي');st.coins-=c;if((st.team||[]).length<11)st.team.push(p);else{st.bench=st.bench||[];st.bench.push(p)}save();old.render();alert('تم شراء '+p.name)};
      document.getElementById('r2-market-search').addEventListener('input',renderMarket);renderMarket();
    };
  }
  // Hidden player: never allow the same player for visible/secret and keep a global set.
  const hiddenUsed=new Set();
  window.startHiddenPlayerGame=function(){hiddenRound=0;hiddenTurn=1;p1Squad=[];p2Squad=[];p1WildcardUsed=false;p2WildcardUsed=false;usedPlayerNames.clear();hiddenUsed.clear();showSection('hidden-game');loadHiddenRound()};
  function pickHidden(pos){let tries=0,p;do{p=getRandomUniquePlayer(pos)}while(p&&hiddenUsed.has(p.name)&&++tries<100);if(p)hiddenUsed.add(p.name);return p}
  window.loadHiddenRound=function(){if(hiddenRound>=posNames11.length){showSquadsPage();return}let pos=posNames11[hiddenRound];hiddenVisible=pickHidden(pos.key);hiddenSecret=pickHidden(pos.key);document.getElementById('hidden-round').textContent='المركز '+(hiddenRound+1)+' من '+posNames11.length+' — '+pos.name;renderHiddenTurn()};
  window.newHiddenChoices=function(){let pos=posNames11[hiddenRound];hiddenVisible=pickHidden(pos.key);hiddenSecret=pickHidden(pos.key)};
  window.chooseHidden=function(secret){let pick=secret?hiddenSecret:hiddenVisible;if(!pick)return;let sq=hiddenTurn===1?p1Squad:p2Squad;if(sq.some(x=>x.name===pick.name))return alert('هذا اللاعب مكرر');sq.push({...pick,cost:0});document.getElementById('hidden-result').innerHTML=(secret?'🕶️ اللاعب الخفي: ':'⚽ اللاعب الظاهر: ')+'<b>'+pick.name+'</b> ('+pick.rating+')';if(hiddenTurn===1){hiddenTurn=2;setTimeout(()=>{newHiddenChoices();renderHiddenTurn()},800)}else{hiddenRound++;hiddenTurn=1;setTimeout(window.loadHiddenRound,900)}};
})();

// V7 EVENT PLAY NOW FIX: open the real selected game and force AI mode for events.
(function(){
  function eventAI(){
    selectedMode='ai';
    if(!p1Name || p1Name==='BA') p1Name='اللاعب';
    p2Name='الروبوت الذكي (AI)';
  }
  window.playCurrentEventMatch=function(){
    const st=eventState(), w=st.weeks[r2EventWeek];
    if(!w) return alert('اختر الأسبوع أولاً');
    if(w.done>=w.games.length) return window.__claimEventWeek();
    const game=w.games[w.done];
    eventAI();
    window.__r2EventActive=true;
    window.__r2EventGame=game;
    if(game==='المزاد برو ماكس'){
      auctionPosList=posNames11; startAuctionGame();
    }else if(game==='الملعب الخماسي'){
      auctionPosList=posNames5; startAuctionGame();
    }else if(game==='DEAL OR NO DEAL'){
      startDealOrNoDeal();
    }else if(game==='المزاد الأعمى'){
      showSection('blind-setup');
      setTimeout(()=>{document.getElementById('blind-count-select').value='11'; startBlindAuctionGame();},100);
    }else if(game==='تخمين اللاعب'){
      startGuessPlayerGame();
    }else if(game==='اللاعب الخفي'){
      startHiddenPlayerGame();
    }else alert('تعذر فتح لعبة الحدث');
  };
  window.__claimEventWeek=function(){
    const st=eventState();
    if(st.claimed[r2EventWeek]) return alert('تم استلام هدية هذا الأسبوع بالفعل');
    const pool=r2EventWeek===1?R2_WEEK1_REWARDS:R2_WEEK2_REWARDS;
    const reward=pool[Math.floor(Math.random()*pool.length)];
    if(window.R2){
      R2.state.team=R2.state.team||[];
      if(!R2.state.team.some(p=>p.name===reward.name)) R2.state.team.push(reward);
      if(r2EventWeek===1){R2.state.xb+=150;R2.state.coins+=500;R2.state.points+=3000;R2.state.freeDrafts=(R2.state.freeDrafts||0)+1;}
      else {R2.state.xb+=200;R2.state.coins+=6000;R2.state.points+=4500;R2.state.freeDrafts=(R2.state.freeDrafts||0)+2;}
      R2.render();
    }
    st.claimed[r2EventWeek]=true; saveEventState(st);
    alert('🎁 استلمت '+reward.name+' وتمت إضافته إلى Ultimate Team!');
    document.getElementById('event-week-play').style.display='none';
  };
  // When a real event game reaches its normal reward, mark one event match complete too.
  const oldComplete=R2.completeGame;
  R2.completeGame=function(){
    oldComplete();
    if(!window.__r2EventActive) return;
    const st=eventState(),w=st.weeks[r2EventWeek];
    if(w&&w.done<w.games.length){w.done++;saveEventState(st);r2EventDone=w.done;alert('🔥 تقدمت في الحدث: '+w.done+'/'+w.games.length+'\n+20 XB + 1000 MARKET COINS + 600 POINTS');}
    window.__r2EventActive=false;
  };
})();

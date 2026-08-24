/* R2 GAMES V8 — Railway + Events + Wallet reliability patch */
(function(){
  const KEY='r2_games_profile_v4';
  const EVENT_KEY='r2_event_v6';
  function profile(){ try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}} }
  function persist(s){ localStorage.setItem(KEY,JSON.stringify(s)); }
  function toast(msg){
    let el=document.getElementById('r2-v8-toast');
    if(!el){el=document.createElement('div');el.id='r2-v8-toast';el.style.cssText='position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999999;background:#171717;color:#fff;border:1px solid #d4af37;border-radius:14px;padding:12px 18px;font-weight:800;box-shadow:0 8px 30px rgba(0,0,0,.4);max-width:90%;text-align:center';document.body.appendChild(el)}
    el.textContent=msg;el.style.display='block';clearTimeout(el._t);el._t=setTimeout(()=>el.style.display='none',3500);
  }
  function sync(){ if(window.R2&&R2.render) R2.render(); }
  // Server health: don't claim the server is dead until the real health endpoint fails.
  window.R2ServerHealth=async function(){
    try{const r=await fetch('/api/health',{cache:'no-store'});if(!r.ok)throw 0;const d=await r.json();return !!d.ok}catch(e){return false}
  };
  // Reliable wallet mutation used by event rewards and future callers.
  window.R2Wallet=function(delta, message){
    const s=profile();
    s.level=s.level||1;s.xb=s.xb||0;s.points=s.points==null?3000:s.points;s.coins=s.coins||0;s.freeDrafts=s.freeDrafts||0;s.team=s.team||[];s.bench=s.bench||[];
    ['xb','points','coins','freeDrafts'].forEach(k=>s[k]+=Number(delta[k]||0));
    persist(s);
    if(window.R2&&R2.state){Object.assign(R2.state,s)}
    sync(); if(message)toast(message); return s;
  };
  // Event games: reward ONLY after the real game completes, then save progress.
  const oldComplete=window.R2&&R2.completeGame;
  if(oldComplete && !oldComplete.__v8){
    window.R2.completeGame=function(){
      oldComplete.apply(this,arguments);
      if(!window.__r2EventActive)return;
      let es;try{es=JSON.parse(localStorage.getItem(EVENT_KEY)||'{"weeks":{},"claimed":{"1":false,"2":false}}')}catch(e){return}
      const w=es.weeks&&es.weeks[window.r2EventWeek||r2EventWeek];
      if(w&&w.done<w.games.length){
        w.done++;localStorage.setItem(EVENT_KEY,JSON.stringify(es));
        window.r2EventDone=w.done;
        R2Wallet({xb:20,coins:1000,points:600},'🎁 مكافأة الحدث: +20 XB +1000 MARKET COINS +600 POINTS');
        if(typeof renderEventWeek==='function')renderEventWeek();
        const b=document.getElementById('event-week-play');if(b)b.textContent=w.done>=w.games.length?'🎁 استلم هدية الأسبوع':'🎮 العب الآن';
      }
      window.__r2EventActive=false;
    };window.R2.completeGame.__v8=true;
  }
  // Ensure claim rewards are persisted even if an older render function has stale state.
  const oldClaim=window.__claimEventWeek;
  if(oldClaim){ window.__claimEventWeek=function(){ const before=profile(); oldClaim.apply(this,arguments); const after=profile(); if(JSON.stringify(before)===JSON.stringify(after))sync(); }; }
  // Startup health indicator for existing UI, without changing its design.
  window.addEventListener('load',()=>{R2ServerHealth().then(ok=>{window.__r2ServerOnline=ok;console.log('R2 Railway server:',ok?'online':'offline')})});
})();

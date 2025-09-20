// ===== Shared helpers (lang + storage + RTL/LTR) =====
const LS = {
  get(k, def=null){ try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
};

function currentLang(){ return LS.get('lang','ur'); }
function setLang(k){
  LS.set('lang', k);
  document.getElementById('btn-ur')?.classList.toggle('active', k==='ur');
  document.getElementById('btn-en')?.classList.toggle('active', k==='en');
}
function applyDirLang(){
  const ur = currentLang()==='ur';
  document.documentElement.setAttribute('dir', ur ? 'rtl':'ltr');
  document.documentElement.setAttribute('lang', ur ? 'ur':'en');
  document.body.classList.toggle('ltr-mode', !ur);
}
function hookLangButtons(onChange){
  document.getElementById('btn-ur')?.addEventListener('click', ()=>{ setLang('ur'); onChange&&onChange(); });
  document.getElementById('btn-en')?.addEventListener('click', ()=>{ setLang('en'); onChange&&onChange(); });
}

function fmtLocale(){ return currentLang()==='en' ? 'en-PK' : 'ur-PK'; }
function daysBetween(a,b){ return Math.floor((b-a)/(1000*60*60*24)); }
function todayISO(){ return new Date().toISOString().slice(0,10); }

// call this once per page after DOM is ready
(function initLang(){
  setLang(currentLang()); // set active button states
  applyDirLang();
})();

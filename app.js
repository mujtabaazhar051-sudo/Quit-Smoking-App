// ================= I18N =================
const I18N = {
  ur: {
    dir: 'rtl', lang: 'ur',
    appTitle: "آپ کی روزانہ پیش رفت",
    appSubtitle: "چھوڑنے کی تاریخ سیٹ کریں، عادت ٹریک کریں، اور اپنی کامیابیاں دیکھیں۔",
    motivationTitle: "روزانہ موٹیویشن",
    newQuoteBtn: "نیا اقتباس",
    trackerTitle: "عادت اور پیش رفت ٹریکر",
    quitDateLabel: "چھوڑنے کی تاریخ منتخب کریں:",
    noSmokeLabel: "آج میں نے سگریٹ نہیں پی",
    saveDayBtn: "محفوظ کریں",
    streakLabel: "مسلسل دن:",
    streakHint: "اگلا ہدف: 7 دن",
    daysSinceLabel: "چھوڑے گئے دن:",
    daysHint: "اگلا ہدف: 30 دن",
    healthTitle: "صحت کے مائلسٹونز",
    badgesTitle: "کامیابی کے بیجز",
    calendarTitle: "کیلنڈر",
    legendOk: "اسموک فری",
    legendSlip: "سلیپ",
    legendNone: "کوئی ریکارڈ نہیں",
    savingsTitle: "بچت کیلکولیٹر",
    cigsPerDayLabel: "روزانہ سگریٹ (چھوڑنے سے پہلے):",
    packPriceLabel: "ایک پیکٹ کی قیمت (PKR):",
    cigsPerPackLabel: "ایک پیکٹ میں سگریٹ:",
    calcBtn: "حساب کریں",
    savedSoFarLabel: "اب تک بچت:",
    monthlySavingLabel: "متوقع ماہانہ بچت:",
    cigsAvoidedLabel: "بچائے گئے سگریٹ:",
    storiesTitle: "کامیابی کی کہانیاں",
    tipsTitle: "ماہرین کے مشورے",
    backHome: "ہوم پیج",
    // Help tools (card titles already in HTML; still used for overlay text pieces)
    helpTitle: "فوراً مدد",
    breathTitle: "سانس کی مشق (30s)",
    distractTitle: "5 منٹ ڈسٹرکشن",
    distractTip: "ایک سادہ سرگرمی منتخب کریں اور 5 منٹ کیلئے کریں۔",
    whyTitle: "میں نے کیوں چھوڑا؟",
    saveWhyBtn: "محفوظ کریں",
    aboutBtn: "میرے بارے میں",
    loginBtn: "لاگ ان",

    quotes: [
      "ہر دن ایک نیا موقع ہے۔",
      "خواہش آتی ہے، مگر گزرجاتی بھی ہے۔",
      "سانس لینے کی آزادی — یہی اصل جیت ہے۔",
      "تم اپنی سوچ سے زیادہ مضبوط ہو۔"
    ],
    tips: [
      "پانی زیادہ پئیں — craving کم ہوگی۔",
      "ٹرگرز لکھیں اور متبادل عادت طے کریں۔",
      "5 منٹ چلیں — ذہن بٹتا ہے۔",
      "گم یا کچُو کھائیں — منہ مصروف رکھیں۔",
      "دوست/گروپ سے سپورٹ لیں۔",
      "نیند پوری کریں — ارادے مضبوط رہتے ہیں۔"
    ],
    milestones: [
      { hours: 24,   title: "24 گھنٹے", text: "دل کا دورہ پڑنے کا خطرہ کم ہونا شروع۔" },
      { hours: 72,   title: "3 دن",     text: "آکسیجن کی سطح بہتر، سانس ہموار۔" },
      { hours: 168,  title: "1 ہفتہ",   text: "ذائقہ/بو میں بہتری اور توانائی میں اضافہ۔" },
      { hours: 720,  title: "1 مہینہ",  text: "پھیپھڑوں کی کارکردگی بہتر، کھانسی کم۔" },
      { hours: 2160, title: "3 ماہ",    text: "خون کی گردش بہتر؛ ورزش آسان۔" },
      { hours: 8760, title: "1 سال",    text: "دل کی بیماری کا خطرہ ~50٪ کم۔" }
    ],
    stories: [
      { name: "حسن، 29",  text: "30 دن بعد سانس ہلکی، فٹبال دوبارہ شروع۔" },
      { name: "عائشہ، 32", text: "بچت سے ایک آن لائن کورس — خود پر سرمایہ کاری!" },
      { name: "کامران، 40", text: "بچوں کے سامنے مثال قائم کی — اب وہ بھی فخر کرتے ہیں۔" }
    ],
    badges: [
      { id:'d1', emoji:'🏅', title:'پہلا دن مکمل', min:1 },
      { id:'d3', emoji:'🎯', title:'تین دن کا ہدف', min:3 },
      { id:'w1', emoji:'🏆', title:'ایک ہفتہ کامیابی', min:7 },
      { id:'m1', emoji:'🌟', title:'ایک مہینے کی جیت', min:30 },
      { id:'m3', emoji:'💎', title:'تین مہینے کی کامیابی', min:90 },
      { id:'y1', emoji:'👑', title:'ایک سال کی جیت', min:365 }
    ],
    distractIdeas: [
      "5 منٹ تیز چلیں",
      "چائے/پانی پئیں",
      "10 پُش اپس",
      "دوست کو میسج",
      "گہری سانسیں 10 بار"
    ],
    monthNames: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"]
  },
  en: {
    dir: 'ltr', lang: 'en',
    appTitle: "Your Daily Progress",
    appSubtitle: "Set a quit date, track habits, and watch your milestones stack up.",
    motivationTitle: "Daily Motivation",
    newQuoteBtn: "New Quote",
    trackerTitle: "Habit & Progress Tracker",
    quitDateLabel: "Pick your quit date:",
    noSmokeLabel: "I didn’t smoke today",
    saveDayBtn: "Save",
    streakLabel: "Streak:",
    streakHint: "Next goal: 7 days",
    daysSinceLabel: "Days since quit:",
    daysHint: "Next goal: 30 days",
    healthTitle: "Health Milestones",
    badgesTitle: "Achievement Badges",
    calendarTitle: "Calendar",
    legendOk: "Smoke‑free",
    legendSlip: "Slip",
    legendNone: "No record",
    savingsTitle: "Savings Calculator",
    cigsPerDayLabel: "Cigarettes per day (before quitting):",
    packPriceLabel: "Price per pack (PKR):",
    cigsPerPackLabel: "Cigarettes per pack:",
    calcBtn: "Calculate",
    savedSoFarLabel: "Saved so far:",
    monthlySavingLabel: "Projected monthly saving:",
    cigsAvoidedLabel: "Cigarettes avoided:",
    storiesTitle: "Success Stories",
    tipsTitle: "Expert Tips",
    backHome: "Back to Home",

    helpTitle: "Help Me Now",
    breathTitle: "Breathing (30s)",
    distractTitle: "5‑Minute Distraction",
    distractTip: "Pick a simple activity and do it for 5 minutes.",
    whyTitle: "Why I Quit",
    saveWhyBtn: "Save",
    

    quotes: [
      "Every day is a fresh start.",
      "Cravings pass; pride stays.",
      "Your lungs are cheering for you.",
      "One urge at a time."
    ],
    tips: [
      "Drink more water — it blunts cravings.",
      "List your triggers and swap routines.",
      "Take a 5‑minute walk.",
      "Chew gum or sunflower seeds.",
      "Lean on friends/groups.",
      "Sleep well to keep willpower high."
    ],
    milestones: [
      { hours: 24,   title: "24 hours", text: "Heart-attack risk starts dropping." },
      { hours: 72,   title: "3 days",   text: "Better oxygen levels, easier breathing." },
      { hours: 168,  title: "1 week",   text: "Taste/smell improve; more energy." },
      { hours: 720,  title: "1 month",  text: "Lung function improves; less cough." },
      { hours: 2160, title: "3 months", text: "Circulation improves; workouts feel easier." },
      { hours: 8760, title: "1 year",   text: "Heart disease risk ~50% lower." }
    ],
    stories: [
      { name: "Hasan, 29",  text: "By day 30 I could breathe freely and play football again." },
      { name: "Ayesha, 32", text: "Savings funded an online course — investing in myself!" },
      { name: "Kamran, 40", text: "Set a proud example for my kids." }
    ],
    badges: [
      { id:'d1', emoji:'🏅', title:'First Day Complete', min:1 },
      { id:'d3', emoji:'🎯', title:'3‑Day Target', min:3 },
      { id:'w1', emoji:'🏆', title:'1‑Week Success', min:7 },
      { id:'m1', emoji:'🌟', title:'1‑Month Win', min:30 },
      { id:'m3', emoji:'💎', title:'3‑Month Milestone', min:90 },
      { id:'y1', emoji:'👑', title:'1‑Year Champion', min:365 }
    ],
    distractIdeas: [
      "Walk briskly",
      "Drink water/tea",
      "Do 10 push‑ups",
      "Text a friend",
      "Ten deep breaths"
    ],
    monthNames: ["January","February","March","April","May","June","July","August","September","October","November","December"]
  }
};

// ================ Helpers ================
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const LS = {
  get(k, def=null){ try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
  set(k, v){ localStorage.setItem(k, JSON.stringify(v)); }
};
const daysBetween = (a, b) => Math.floor((b - a) / (1000*60*60*24));
const clamp01 = x => Math.max(0, Math.min(1, x));
const todayISO = () => new Date().toISOString().slice(0,10);

let currentLang = LS.get('lang', 'ur');
let quoteIndex = 0;

// ================ Language wiring ================
function applyLangText(t){
  $('#appTitle').textContent        = t.appTitle;
  $('#appSubtitle').textContent     = t.appSubtitle;

  $('#motivationTitle').textContent = t.motivationTitle;
  $('#btnNewQuote').textContent     = t.newQuoteBtn;

  $('#trackerTitle').textContent    = t.trackerTitle;
  $('#quitDateLabel').textContent   = t.quitDateLabel;
  $('#noSmokeLabel').textContent    = t.noSmokeLabel;
  $('#btnSaveDay').textContent      = t.saveDayBtn;
  $('#streakLabel').textContent     = t.streakLabel;
  $('#streakHint').textContent      = t.streakHint;
  $('#daysSinceLabel').textContent  = t.daysSinceLabel;
  $('#daysHint').textContent        = t.daysHint;

  $('#healthTitle').textContent     = t.healthTitle;

  $('#badgesTitle').textContent     = t.badgesTitle;
  $('#calendarTitle').textContent   = t.calendarTitle;
  $('#legendOk').textContent        = t.legendOk;
  $('#legendSlip').textContent      = t.legendSlip;
  $('#legendNone').textContent      = t.legendNone;

  $('#savingsTitle').textContent    = t.savingsTitle;
  $('#cigsPerDayLabel').textContent = t.cigsPerDayLabel;
  $('#packPriceLabel').textContent  = t.packPriceLabel;
  $('#cigsPerPackLabel').textContent= t.cigsPerPackLabel;
  $('#btnCalcSave').textContent     = t.calcBtn;
  $('#savedSoFarLabel').textContent = t.savedSoFarLabel;
  $('#monthlySavingLabel').textContent = t.monthlySavingLabel;
  $('#cigsAvoidedLabel').textContent= t.cigsAvoidedLabel;

  $('#storiesTitle').textContent    = t.storiesTitle;
  $('#tipsTitle').textContent       = t.tipsTitle;
  $('#backHome').textContent        = t.backHome;

  // Tools labels used in those cards
  $('#breathTitle').textContent     = t.breathTitle;
  $('#distractTitle').textContent   = t.distractTitle;
  $('#distractTip').textContent     = t.distractTip;

  // dir/lang + LTR switch
  document.documentElement.setAttribute('dir', t.dir);
  document.documentElement.setAttribute('lang', t.lang);
  document.body.classList.toggle('ltr-mode', currentLang === 'en');

  renderStories(t.stories);
  renderTips(t.tips);
  renderHealthTimeline(t.milestones);
  renderBadges();
  renderCalendar();
  recalcProgress(true);
  calcSavings(true);
}

function setLanguage(langKey){
  currentLang = langKey;
  LS.set('lang', langKey);
  $('#btn-ur')?.classList.toggle('active', langKey === 'ur');
  $('#btn-en')?.classList.toggle('active', langKey === 'en');
  applyLangText(I18N[langKey] || I18N.ur);
  quoteIndex = 0;
  setQuote();
}
$('#btn-ur')?.addEventListener('click', () => setLanguage('ur'));
$('#btn-en')?.addEventListener('click', () => setLanguage('en'));

// ============ Collapsible card behavior ============
function wireCollapsibles(){
  $$('.card-header').forEach(btn=>{
    const targetId = btn.getAttribute('data-target');
    const body = document.getElementById(targetId);
    btn.addEventListener('click', ()=>{
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!expanded));
      if(body){
        if(expanded){ body.hidden = true; }
        else { body.hidden = false; }
      }
    });
  });

  // Open Motivation & Tracker by default (nice first-run)
  const openIds = ['motivationBody','trackerBody'];
  openIds.forEach(id=>{
    const b = document.querySelector(`.card-header[data-target="${id}"]`);
    const body = document.getElementById(id);
    if(b && body){ b.setAttribute('aria-expanded','true'); body.hidden = false; }
  });
}

// ============ Daily Motivation ============
function setQuote(){
  const t = I18N[currentLang] || I18N.ur;
  const el = $('#motivationQuote');
  if(!el) return;
  const arr = t.quotes || [];
  if(!arr.length) return;
  el.classList.add('fade-out');
  setTimeout(() => {
    el.textContent = arr[quoteIndex % arr.length];
    el.classList.remove('fade-out');
  }, 250);
}
$('#btnNewQuote')?.addEventListener('click', () => { quoteIndex++; setQuote(); });

// ============ Tracker & Streak ============
function recalcProgress(reformatOnly=false){
  const locale = currentLang === 'en' ? 'en-PK' : 'ur-PK';
  const quitISO = $('#quitDate').value;

  if(!quitISO && !reformatOnly){
    $('#daysSince').textContent = '0';
    $('#daysProgress').style.width = '0%';
  }

  if(quitISO){
    const qDate = new Date(quitISO + 'T00:00:00');
    const now = new Date();
    const days = Math.max(0, daysBetween(qDate, now));
    $('#daysSince').textContent = days.toLocaleString(locale);
    $('#daysProgress').style.width = (clamp01(days/30)*100).toFixed(0) + '%';
  }

  const checkins = LS.get('checkins', {}); // { 'YYYY-MM-DD': true }
  let streak = 0;
  let cursor = new Date();
  for(;;){
    const ISO = cursor.toISOString().slice(0,10);
    if(checkins[ISO]) { streak++; cursor.setDate(cursor.getDate()-1); }
    else break;
  }
  $('#streakValue').textContent = streak.toLocaleString(locale);
  $('#streakProgress').style.width = (clamp01(streak/7)*100).toFixed(0) + '%';

  renderBadges();
  renderCalendar();
}
$('#quitDate')?.addEventListener('change', e => {
  LS.set('quitDate', e.target.value);
  recalcProgress();
  renderHealthTimeline((I18N[currentLang]||I18N.ur).milestones);
  calcSavings();
});
$('#btnSaveDay')?.addEventListener('click', () => {
  const checked = $('#noSmokeToday').checked;
  const d = todayISO();
  const checkins = LS.get('checkins', {});
  checkins[d] = !!checked;
  LS.set('checkins', checkins);
  $('#noSmokeToday').checked = false;
  recalcProgress();
});

// ============ Health Timeline ============
function renderHealthTimeline(milestones){
  const wrap = $('#healthTimeline');
  if(!wrap) return;
  wrap.innerHTML = '';
  const quitISO = $('#quitDate').value;
  const now = new Date();
  const elapsedHrs = quitISO ? (now - new Date(quitISO + 'T00:00:00'))/(1000*60*60) : 0;

  milestones.forEach(ms => {
    const reached = elapsedHrs >= ms.hours;
    const div = document.createElement('div');
    div.className = 'card';
    div.style.opacity = reached ? 1 : 0.6;
    div.innerHTML = `<h3>${reached ? '✅ ' : '⏳ '}${ms.title}</h3><p>${ms.text}</p>`;
    wrap.appendChild(div);
  });
}

// ============ Savings Calculator ============
function calcSavings(reformatOnly=false){
  const locale = currentLang === 'en' ? 'en-PK' : 'ur-PK';
  const quitISO = $('#quitDate').value;
  const cigsPerDay = +($('#cigsPerDay').value || 0);
  const packPrice  = +($('#packPrice').value || 0);
  const cigsPerPack= +($('#cigsPerPack').value || 20);

  if(!quitISO || !cigsPerDay || !packPrice || !cigsPerPack){
    if(reformatOnly){
      const n1 = parseFloat($('#savedSoFar').textContent.replace(/[^\d.]/g,'')) || 0;
      const n2 = parseFloat($('#monthlySaving').textContent.replace(/[^\d.]/g,'')) || 0;
      const n3 = parseInt($('#cigsAvoided').textContent.replace(/[^\d]/g,'')) || 0;
      $('#savedSoFar').textContent    = 'PKR ' + Math.round(n1).toLocaleString(locale);
      $('#monthlySaving').textContent = 'PKR ' + Math.round(n2).toLocaleString(locale);
      $('#cigsAvoided').textContent   = n3.toLocaleString(locale);
    }
    return;
  }

  const pricePerCig = packPrice / cigsPerPack;
  const days = Math.max(0, daysBetween(new Date(quitISO+'T00:00:00'), new Date()));
  const avoidedCigs = days * cigsPerDay;

  const savedSoFar = avoidedCigs * pricePerCig;
  const monthlySaving = 30 * cigsPerDay * pricePerCig;

  $('#savedSoFar').textContent    = 'PKR ' + Math.round(savedSoFar).toLocaleString(locale);
  $('#monthlySaving').textContent = 'PKR ' + Math.round(monthlySaving).toLocaleString(locale);
  $('#cigsAvoided').textContent   = avoidedCigs.toLocaleString(locale);

  LS.set('calc', { cigsPerDay, packPrice, cigsPerPack });
}
$('#btnCalcSave')?.addEventListener('click', () => calcSavings());

// ============ Success Stories ============
let storyIndex = 0;
function renderStories(stories){
  const inner = $('#storiesInner');
  if(!inner) return;
  inner.innerHTML = stories.map(s => `<div class="carousel-item"><h3>${s.name}</h3><p>${s.text}</p></div>`).join('');
  storyIndex = 0;
  inner.style.transform = `translateX(0%)`;
}
function moveStory(delta){
  const inner = $('#storiesInner');
  const items = inner?.children?.length || 0;
  if(!items) return;
  storyIndex = (storyIndex + delta + items) % items;
  inner.style.transform = `translateX(-${storyIndex*100}%)`;
}
$('#prevStory')?.addEventListener('click', () => moveStory(-1));
$('#nextStory')?.addEventListener('click', () => moveStory(1));

// ============ Expert Tips ============
function renderTips(tips){
  const grid = $('#tipsGrid');
  if(!grid) return;
  grid.innerHTML = tips.map(txt => `<div class="tip-card">${txt}</div>`).join('');
}

// ============ BADGES ============
function computeBadges(){
  const t = I18N[currentLang];
  const quitISO = $('#quitDate').value;
  if(!quitISO) return [];
  const days = daysBetween(new Date(quitISO+'T00:00:00'), new Date());
  return (t.badges || []).map(b => ({...b, earned: days >= b.min}));
}
function renderBadges(){
  const wrap = $('#badgesWrap');
  if(!wrap) return;
  const badges = computeBadges();
  wrap.innerHTML = badges.map(b => `
    <div class="badge-card ${b.earned ? 'earned' : ''}" title="${b.earned ? '✅' : '—'}">
      <div class="badge-emoji">${b.emoji}</div>
      <div>
        <div style="font-weight:700">${b.title}</div>
        <div style="font-size:.95rem">${b.earned ? (currentLang==='en'?'Unlocked':'اَن لاک ہوگیا') : (currentLang==='en'?'Locked':'ابھی باقی')}</div>
      </div>
    </div>
  `).join('');
}

// ============ CALENDAR ============
let calCursor = new Date(); // current visible month
function renderCalendar(){
  const grid = $('#calGrid');
  const head = $('#calMonth');
  if(!grid || !head) return;

  const t = I18N[currentLang];
  const y = calCursor.getFullYear();
  const m = calCursor.getMonth();
  head.textContent = `${t.monthNames[m]} ${y}`;

  grid.innerHTML = '';
  const first = new Date(y, m, 1);
  const startWeekday = first.getDay(); // Sun=0..Sat=6
  const daysInMonth = new Date(y, m+1, 0).getDate();

  // leading blanks
  for(let i=0;i<startWeekday;i++){
    const cell = document.createElement('div');
    cell.className = 'cal-cell muted';
    grid.appendChild(cell);
  }

  const checkins = LS.get('checkins', {});
  const today = new Date(); today.setHours(0,0,0,0);

  for(let d=1; d<=daysInMonth; d++){
    const dateObj = new Date(y, m, d);
    const iso = dateObj.toISOString().slice(0,10);
    const future = dateObj > today;
    const mark = checkins[iso]; // true=ok, false=slip, undefined=none
    const cell = document.createElement('div');
    cell.className = 'cal-cell';
    if(mark === true) cell.classList.add('ok');
    if(mark === false) cell.classList.add('slip');
    if(future) cell.classList.add('muted');
    cell.textContent = d;

    if(!future){
      cell.style.cursor = 'pointer';
      cell.title = currentLang === 'en'
        ? 'Click to cycle: ✅ / ❌ / —'
        : 'کلک کریں: ✅ / ❌ / —';
      cell.addEventListener('click', () => {
        const cur = checkins[iso];
        let next;
        if(cur === undefined) next = true;
        else if(cur === true)  next = false;
        else next = undefined;

        if(next === undefined) delete checkins[iso];
        else checkins[iso] = next;

        LS.set('checkins', checkins);
        recalcProgress();
      });
    }
    grid.appendChild(cell);
  }
}
$('#calPrev')?.addEventListener('click', () => { calCursor.setMonth(calCursor.getMonth()-1); renderCalendar(); });
$('#calNext')?.addEventListener('click', () => { calCursor.setMonth(calCursor.getMonth()+1); renderCalendar(); });

// ============ Breathing (30s) ============
let breathInterval = null;
function startBreath(){
  stopBreath();
  let secs = 30;
  const el = $('#breathTimer');
  el.textContent = '00:30';
  breathInterval = setInterval(() => {
    secs--;
    const mm = String(Math.floor(secs/60)).padStart(2,'0');
    const ss = String(secs%60).padStart(2,'0');
    el.textContent = `${mm}:${ss}`;
    if(secs<=0) stopBreath();
  }, 1000);
}
function stopBreath(){ if(breathInterval){ clearInterval(breathInterval); breathInterval=null; } }
$('#btnStartBreath')?.addEventListener('click', startBreath);

// ============ 5‑Minute Distraction ============
let distractInterval = null;
function startDistract(){
  stopDistract();
  const ideas = (I18N[currentLang].distractIdeas || []).slice().sort(() => 0.5 - Math.random()).slice(0,3);
  $('#distractIdeas').textContent = ideas.length ? '• ' + ideas.join(' • ') : '';
  let secs = 5*60;
  const el = $('#distractTimer');
  el.textContent = '05:00';
  distractInterval = setInterval(() => {
    secs--;
    const mm = String(Math.floor(secs/60)).padStart(2,'0');
    const ss = String(secs%60).padStart(2,'0');
    el.textContent = `${mm}:${ss}`;
    if(secs<=0) stopDistract();
  }, 1000);
}
function stopDistract(){ if(distractInterval){ clearInterval(distractInterval); distractInterval=null; } }
$('#btnStartDistract')?.addEventListener('click', startDistract);

// ============ Scroll animation fallback ============
(function initScrollAnim(){
  const els = $$('.animate-on-scroll');
  if ('IntersectionObserver' in window){
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.2 });
    els.forEach(el => obs.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible'));
  }
})();


// ============ Boot ============
(function init(){
  setLanguage(currentLang);

  const savedQuit = LS.get('quitDate', '');
  if(savedQuit) $('#quitDate').value = savedQuit;

  const calc = LS.get('calc', null);
  if(calc){
    $('#cigsPerDay').value = calc.cigsPerDay ?? 10;
    $('#packPrice').value  = calc.packPrice  ?? 400;
    $('#cigsPerPack').value= calc.cigsPerPack?? 20;
  }

  wireCollapsibles();

  recalcProgress();
  calcSavings();
  setQuote();
})();

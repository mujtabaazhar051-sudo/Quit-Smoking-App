const messages = [
  "آج تم نے اپنے آپ کو بہتر بنانے کا انتخاب کیا ہے۔",
  "ہر دن ایک نیا موقع ہے۔",
  "تم اس سے زیادہ مضبوط ہو جتنا تم سوچتے ہو۔"
];

const quitPlans = [
  "ہر روز سگریٹ کی تعداد کم کریں۔",
  "روزانہ پانی زیادہ پئیں اور ورزش کریں۔",
  "نیکوٹین ریپلیسمنٹ تھراپی پر غور کریں۔"
];

const distractions = ["گہری سانس لیں", "پانی پیئیں", "چلیں پھرے جائیں", "دوست کو کال کریں"];
const quotes = ["صحت ایک قیمتی دولت ہے۔", "آپ کی زندگی قیمتی ہے۔", "ہر دن ایک نیا موقع ہے۔", "چھوڑنا مشکل ہے، لیکن ممکن ہے۔"];
const avgCigCost = 100;

const communitySupportLinks = [
  { name: "اردو ترک تمباکو فورم", url: "https://www.exampleforum.pk" },
  { name: "واٹس ایپ گروپ: تمباکو چھوڑیں", url: "https://chat.whatsapp.com/examplelink" },
  { name: "ٹیلیگرام چینل: صحت مند زندگی", url: "https://t.me/examplechannel" },
  { name: "فیس بک گروپ: سگریٹ سے آزادی", url: "https://www.facebook.com/groups/examplegroup" }
];

function showDailyMessage() {
  document.getElementById('dailyMessage').innerText = messages[Math.floor(Math.random() * messages.length)];
}

function showQuitPlan() {
  document.getElementById('quitPlan').innerText = quitPlans[Math.floor(Math.random() * quitPlans.length)];
}

function logHabit(smoked) {
  let count = parseInt(localStorage.getItem('habitCount')) || 0;
  if (!smoked) {
    count++;
    localStorage.setItem('habitCount', count);
  }
  document.getElementById('habitLog').innerText = `اب تک کامیاب دن: ${count}`;
}

function distractUser() {
  document.getElementById('distraction').innerText = distractions[Math.floor(Math.random() * distractions.length)];
}

let quoteIndex = 0;
function rotateQuotes() {
  document.getElementById('quoteBox').innerText = quotes[quoteIndex];
  quoteIndex = (quoteIndex + 1) % quotes.length;
}

function saveQuitDate() {
  const dateInput = document.getElementById('quitDate').value;
  if (!dateInput) return alert("براہ کرم ایک تاریخ منتخب کریں");
  localStorage.setItem('quitDate', dateInput);
  updateDaysQuit();
  updateDashboard();
  alert("تاریخ محفوظ ہو گئی ہے");
}

function updateDaysQuit() {
  const quitDateStr = localStorage.getItem('quitDate');
  const el = document.getElementById('daysQuit');
  if (!quitDateStr) return el.innerText = "براہ کرم چھوڑنے کی تاریخ محفوظ کریں۔";
  const quitDate = new Date(quitDateStr);
  const now = new Date();
  if (now < quitDate) return el.innerText = "تاریخ مستقبل کی نہیں ہو سکتی۔";
  const diff = Math.floor((now - quitDate) / (1000 * 60 * 60 * 24));
  el.innerText = `آپ نے ${diff} دن سگریٹ نہیں پی۔`;
}

function updateDashboard() {
  const quitDateStr = localStorage.getItem('quitDate');
  const milestonesEl = document.getElementById('milestones');
  const moneySavedEl = document.getElementById('moneySaved');
  const healthBenefitsEl = document.getElementById('healthBenefits');
  if (!quitDateStr) return;

  const quitDate = new Date(quitDateStr);
  const now = new Date();
  const diff = Math.floor((now - quitDate) / (1000 * 60 * 60 * 24));
  let msg = "";
  if (diff >= 1) msg += "1 دن مکمل ہوا! مبارک ہو۔\n";
  if (diff >= 7) msg += "1 ہفتہ مکمل ہوا! زبردست کارکردگی۔\n";
  if (diff >= 30) msg += "1 مہینہ مکمل ہوا! بہترین حوصلہ۔\n";
  if (diff >= 90) msg += "3 مہینے! آپ واقعی شاندار ہیں۔\n";
  if (diff >= 180) msg += "6 مہینے! صحت بہتر ہو رہی ہے۔\n";
  if (diff >= 365) msg += "1 سال مکمل! زندگی بدل گئی۔\n";
  if (!msg) msg = `آپ نے ابھی ${diff} دن چھوڑے ہیں۔`;
  milestonesEl.innerText = msg;

  const money = ((diff * 20 / 20) * avgCigCost).toFixed(0);
  moneySavedEl.innerText = `آپ نے تقریباً ${money} پاکستانی روپے بچائے ہیں۔`;

  let healthMsg = "";
  if (diff < 1) healthMsg = "صحت کی بہتری ابھی شروع نہیں ہوئی۔";
  else if (diff < 30) healthMsg = "خون میں آکسیجن کی سطح بہتر ہو رہی ہے۔";
  else if (diff < 90) healthMsg = "دل کی بیماری کا خطرہ کم ہو رہا ہے۔";
  else healthMsg = "آپ کی صحت نمایاں طور پر بہتر ہو گئی ہے۔";
  healthBenefitsEl.innerText = healthMsg;
}

function populateCommunityLinks() {
  const container = document.getElementById('communityLinks');
  container.innerHTML = "";
  communitySupportLinks.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.url;
    a.target = "_blank";
    a.textContent = link.name;
    li.appendChild(a);
    container.appendChild(li);
  });
}

function shareOnWhatsApp() {
  const count = parseInt(localStorage.getItem('habitCount')) || 0;
  const message = `میں نے ${count} دن سے سگریٹ نہیں پی! آپ بھی چھوڑ سکتے ہیں۔ 💪`;
  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
}

window.onload = function () {
  showDailyMessage();
  showQuitPlan();
  rotateQuotes();
  logHabit(false);
  updateDaysQuit();
  updateDashboard();
  populateCommunityLinks();
  setInterval(rotateQuotes, 5000);
  setInterval(updateDaysQuit, 60000);
};

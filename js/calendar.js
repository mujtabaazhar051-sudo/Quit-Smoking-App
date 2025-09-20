/* calendar.js */
(function () {
  'use strict';

  // Guard: require common.js
  document.addEventListener('DOMContentLoaded', function () {
    if (typeof LS === 'undefined' || typeof currentLang === 'undefined' || typeof applyDirLang === 'undefined') {
      var n = document.getElementById('warn');
      if (n) {
        n.style.display = 'block';
        // Avoid literal </script> inside strings
        n.textContent = 'common.js نہیں ملا۔ براہ کرم js/common.js فائل شامل کریں (مثلاً: <scr' + 'ipt src="js/common.js"></scr' + 'ipt>).';
      }
      console.error('common.js not found. Ensure js/common.js exists and the path is correct.');
      return;
    }

    var MONTHS = {
      ur: ["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],
      en: ["January","February","March","April","May","June","July","August","September","October","November","December"]
    };

    var cursor = new Date();

    function setText(id, value) {
      var el = document.getElementById(id);
      if (el) el.textContent = value;
    }

    function render() {
      var ur = currentLang() === 'ur';

      setText('title',    ur ? 'کیلنڈر' : 'Calendar');
      setText('subtitle', ur ? 'روزانہ اسٹیٹس مارک کریں' : 'Mark your daily status');
      setText('okLbl',    ur ? 'اسموک فری' : 'Smoke-free');
      setText('slipLbl',  ur ? 'سلیپ' : 'Slip');
      setText('noneLbl',  ur ? 'کوئی ریکارڈ نہیں' : 'No record');
      setText('backApp',  ur ? 'ایپ مینو' : 'App Menu');

      applyDirLang();

      var y = cursor.getFullYear();
      var m = cursor.getMonth();
      var months = MONTHS[currentLang()] || MONTHS.ur;
      setText('month', months[m] + ' ' + y);

      var grid = document.getElementById('grid');
      if (!grid) return;
      grid.innerHTML = '';

      var first = new Date(y, m, 1);
      var start = first.getDay(); // 0..6 (Sun..Sat)
      var days  = new Date(y, m + 1, 0).getDate();

      // leading muted cells
      for (let i = 0; i < start; i++) {
        let lead = document.createElement('div');
        lead.className = 'cal-cell muted';
        grid.appendChild(lead);
      }

      let checkins = LS.get('checkins', {}); // { 'YYYY-MM-DD': true/false }
      let today = new Date();
      today.setHours(0, 0, 0, 0);

      for (let d = 1; d <= days; d++) {
        let dateObj = new Date(y, m, d);
        let iso = dateObj.toISOString().slice(0, 10);
        let future = dateObj > today;
        let mark = checkins[iso];

        let cell = document.createElement('div');
        cell.className = 'cal-cell';
        cell.textContent = String(d);

        if (mark === true)  cell.classList.add('ok');
        if (mark === false) cell.classList.add('slip');
        if (future)         cell.classList.add('muted');

        if (!future) {
          cell.style.cursor = 'pointer';
          cell.title = ur ? 'کلک کریں: ✅ / ❌ / —' : 'Click to cycle: ✅ / ❌ / —';
          cell.addEventListener('click', function () {
            let cur = checkins[iso];
            let next;
            if (cur === undefined) next = true;     // — → ✅
            else if (cur === true)  next = false;   // ✅ → ❌
            else next = undefined;                  // ❌ → —
            if (next === undefined) delete checkins[iso];
            else checkins[iso] = next;
            LS.set('checkins', checkins);
            render();
          });
        }
        grid.appendChild(cell);
      }
    }

    // Wire buttons
    var prevBtn = document.getElementById('prev');
    var nextBtn = document.getElementById('next');
    if (prevBtn) prevBtn.addEventListener('click', function () {
      cursor.setMonth(cursor.getMonth() - 1);
      render();
    });
    if (nextBtn) nextBtn.addEventListener('click', function () {
      cursor.setMonth(cursor.getMonth() + 1);
      render();
    });

    // Initial render + react to language toggle
    render();
    if (typeof hookLangButtons === 'function') {
      hookLangButtons(render);
    }
  });
})();

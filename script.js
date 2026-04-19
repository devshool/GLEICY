/* ============================================================
   script.js — Para Gleicy ❤️
   ============================================================ */

// ── CONTADOR ─────────────────────────────────────────────────
const START = new Date('2025-06-02T00:00:00');

function updateCounter() {
  const now  = new Date();
  const diff = now - START;
  if (diff < 0) return;

  const totalSecs = Math.floor(diff / 1000);

  let years = now.getFullYear() - START.getFullYear();
  let tY = new Date(START); tY.setFullYear(tY.getFullYear() + years);
  if (tY > now) { years--; tY.setFullYear(tY.getFullYear() - 1); }

  let months = (now.getFullYear() - tY.getFullYear()) * 12 + (now.getMonth() - tY.getMonth());
  let tM = new Date(tY); tM.setMonth(tM.getMonth() + months);
  if (tM > now) { months--; tM.setMonth(tM.getMonth() - 1); }

  const days      = Math.floor((now - tM) / 86400000);
  const secsToday = totalSecs % 86400;
  const h = Math.floor(secsToday / 3600);
  const m = Math.floor((secsToday % 3600) / 60);
  const s = secsToday % 60;

  document.getElementById('c-years').textContent  = years;
  document.getElementById('c-months').textContent = months;
  document.getElementById('c-days').textContent   = days;
  document.getElementById('c-hours').textContent  = String(h).padStart(2,'0');
  document.getElementById('c-mins').textContent   = String(m).padStart(2,'0');
  document.getElementById('c-secs').textContent   = String(s).padStart(2,'0');
}

updateCounter();
setInterval(updateCounter, 1000);

// ── MENSAGEM ─────────────────────────────────────────────────
const msgBtn     = document.getElementById('msg-btn');
const msgFull    = document.getElementById('msg-full');
const msgPreview = document.getElementById('msg-preview');
let msgOpen = false;

msgBtn.addEventListener('click', () => {
  msgOpen = !msgOpen;
  msgPreview.style.display = msgOpen ? 'none' : 'block';
  msgFull.classList.toggle('open', msgOpen);
  msgBtn.textContent = msgOpen ? 'Fechar Mensagem ✕' : 'Mostrar Mensagem 💬';
});

// ── SCROLL FADE IN ────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(s => observer.observe(s));

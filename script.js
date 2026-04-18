let started = false;

/* SHOW GIFT */
setTimeout(() => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("giftContainer").classList.remove("hidden");
}, 4000);

/* CLICK GIFT */
document.getElementById("giftImg").addEventListener("click", startExperience);

function startExperience() {
  if (started) return;
  started = true;

  if (navigator.vibrate) navigator.vibrate(100);

  // ❌ REMOVE TOP LINE AFTER CLICK
  document.getElementById("giftTopLine").style.display = "none";

  document.getElementById("giftContainer").style.display = "none";

  startMain();
}

/* MAIN */
function startMain() {
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.play().catch(()=>{});

  startSlider();
  createHearts();
}

/* SLIDER */
let i = 0;

const quotes = [
  "You are my everything 💖",
  "Every moment with you feels magical ✨",
  "I love you forever ❤️"
];

function startSlider() {
  let slides = document.querySelectorAll(".slide");
  let q = document.getElementById("quoteBox");

  q.innerText = "Happy Birthday Mamma 🎂❤️";

  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");

    q.innerText = quotes[i % quotes.length];

  }, 3500);
}

/* FLOATING HEARTS */
function createHearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }, 300);
}

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

  document.getElementById("giftContainer").style.display = "none";
  startMain();
}

/* MAIN */
function startMain() {
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.play().catch(()=>{});

  startSlider();
}

/* SLIDER */
let i = 0;

const quotes = [
  "Happy Birthday Mamma 🎂❤️",
  "Mamma… you are my everything 💖",
  "I love you forever ❤️"
];

function startSlider() {
  let slides = document.querySelectorAll(".slide");
  let q = document.getElementById("quoteBox");

  q.innerText = quotes[0];

  setInterval(() => {
    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");

    q.innerText = quotes[i % quotes.length];

  }, 3000);
}

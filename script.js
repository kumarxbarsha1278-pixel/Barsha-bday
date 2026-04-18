/* PREVENT MULTIPLE TRIGGERS */
let started = false;

/* SHOW GIFT AFTER INTRO */
setTimeout(() => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("giftBox").classList.remove("hidden");
}, 4000);

/* GLOBAL TAP (WORKS EVERYWHERE) */
document.body.addEventListener("click", startExperience);
document.body.addEventListener("touchstart", startExperience);

function startExperience() {
  if (started) return;
  started = true;

  // vibration
  if (navigator.vibrate) navigator.vibrate(100);

  // explode gift
  let gift = document.getElementById("giftBox");
  gift.innerHTML = "💥";

  setTimeout(() => {
    gift.style.display = "none";
    startMain();
  }, 500);
}

/* MAIN */
function startMain() {
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().catch(()=>{});

  startSlider();
  createHearts();

  setTimeout(finalMoment, 15000);
}

/* SLIDER */
let i = 0;
const quotes = [
  "Happy Birthday Mamma 🎂❤️",
  "Barsha… you are my everything 💖",
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

/* HEARTS */
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

/* FIREWORK */
let canvas = document.getElementById("fireworks");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function boom(x, y) {
  for (let j = 0; j < 50; j++) {
    particles.push({
      x, y,
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      life: 50
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, k) => {
    ctx.fillRect(p.x, p.y, 2, 2);
    p.x += p.dx;
    p.y += p.dy;
    p.life--;

    if (p.life <= 0) particles.splice(k, 1);
  });

  requestAnimationFrame(draw);
}
draw();

/* FINAL */
function finalMoment() {
  let fade = document.getElementById("fadeScreen");

  if (navigator.vibrate) navigator.vibrate([200,100,200]);

  fade.classList.add("show");

  setTimeout(() => {
    fade.classList.remove("show");

    // fireworks
    for (let k = 0; k < 5; k++) {
      setTimeout(() => {
        boom(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight / 2
        );
      }, k * 300);
    }

    document.getElementById("quoteBox").innerText =
      "HAPPY BIRTHDAY MAMMA 🎂❤️ I LOVE YOU FOREVER";

  }, 3000);
}

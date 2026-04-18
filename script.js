window.onload = function () {

let started = false;

/* ELEMENTS */
const startScreen = document.getElementById("startScreen");
const giftBox = document.getElementById("giftBox");
const tapArea = document.getElementById("tapArea");
const main = document.getElementById("main");
const bgMusic = document.getElementById("bgMusic");
const voiceNote = document.getElementById("voiceNote");
const quoteBox = document.getElementById("quoteBox");
const fadeScreen = document.getElementById("fadeScreen");
const finalMessage = document.getElementById("finalMessage");
const canvas = document.getElementById("fireworks");

/* SHOW GIFT */
setTimeout(() => {
  if(startScreen) startScreen.style.display = "none";
  if(giftBox) giftBox.classList.remove("hidden");
  if(tapArea) tapArea.classList.remove("hidden");
}, 4000);

/* TAP */
if(tapArea) tapArea.addEventListener("click", triggerStart);
if(giftBox) giftBox.addEventListener("click", triggerStart);

function triggerStart() {
  if (started) return;
  started = true;

  let gift = document.querySelector(".gift");
  if (gift) gift.classList.add("open");

  if (tapArea) tapArea.style.display = "none";

  setTimeout(() => {
    if (giftBox) giftBox.style.display = "none";
    startMain();
  }, 600);
}

/* MAIN */
function startMain() {
  if (main) {
    main.classList.remove("hidden");
    setTimeout(() => main.classList.add("show"), 100);
  }

  if (bgMusic) bgMusic.play().catch(() => {});

  startSlider();
  hearts();
  beatSync();

  setTimeout(finalMoment, 15000);
}

/* TYPE TEXT */
function typeText(el, text) {
  if (!el) return;
  el.innerText = "";
  let i = 0;

  let t = setInterval(() => {
    el.innerText += text[i];
    i++;
    if (i >= text.length) clearInterval(t);
  }, 40);
}

/* SLIDER */
let i = 0;
let quotes = [
  "Happy Birthday Mamma 🎂❤️",
  "You are my everything 💖",
  "I love you forever ❤️"
];

function startSlider() {
  let slides = document.querySelectorAll(".slide");

  typeText(quoteBox, quotes[0]);

  setInterval(() => {
    if (slides.length === 0) return;

    slides[i].classList.remove("active");
    i = (i + 1) % slides.length;
    slides[i].classList.add("active");

    typeText(quoteBox, quotes[i % quotes.length]);
  }, 3000);
}

/* HEARTS */
function hearts() {
  setInterval(() => {
    let h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
  }, 300);
}

/* BEAT */
function beatSync() {
  setInterval(() => {
    document.body.classList.add("beat");
    setTimeout(() => document.body.classList.remove("beat"), 200);
  }, 600);
}

/* FIREWORKS */
let ctx = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;

let particles = [];

function boom(x, y) {
  for (let j = 0; j < 50; j++) {
    particles.push({
      x, y,
      dx: (Math.random() - 0.5) * 5,
      dy: (Math.random() - 0.5) * 5,
      life: 50,
      color: `hsl(${Math.random() * 360},100%,50%)`
    });
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles = particles.filter(p => p.life > 0);

  particles.forEach(p => {
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, 2, 2);
    p.x += p.dx;
    p.y += p.dy;
    p.life--;
  });

  requestAnimationFrame(draw);
}
draw();

/* FINAL */
function finalMoment() {
  if (fadeScreen) fadeScreen.classList.add("show");

  setTimeout(() => {
    if (fadeScreen) fadeScreen.classList.remove("show");

    for (let k = 0; k < 5; k++) {
      setTimeout(() =>
        boom(Math.random() * innerWidth, Math.random() * innerHeight / 2),
        k * 300
      );
    }

    if (finalMessage) {
      finalMessage.classList.remove("hidden");
      setTimeout(() => finalMessage.classList.add("show"), 100);
    }

    if (voiceNote) voiceNote.play().catch(() => {});

  }, 3000);
}

};

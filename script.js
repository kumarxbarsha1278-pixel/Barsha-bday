window.onload = () => {
  setTimeout(() => {
    document.getElementById("cinematicIntro").style.display = "none";
  }, 4000);
};

/* START */
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.volume = 0;
  music.play();

  fadeInMusic(music);
  startSlider();

  setTimeout(() => {
    document.getElementById("scrollContainer").classList.remove("hidden");
  }, 2000);

  setTimeout(() => {
    showGiftScene();
  }, 27000);
}

/* MUSIC */
function fadeInMusic(music) {
  let v = 0;
  let i = setInterval(() => {
    if (v < 1) {
      v += 0.02;
      music.volume = v;
    } else clearInterval(i);
  }, 200);
}

/* SLIDER */
let current = 0;
function startSlider() {
  let slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

/* GIFT */
function showGiftScene() {
  let s = document.getElementById("specialLine");
  let g = document.getElementById("giftBox");

  s.classList.remove("hidden");

  setTimeout(() => {
    g.classList.remove("hidden");

    g.onclick = () => {
      g.innerHTML = "💥";
      setTimeout(() => {
        g.style.display = "none";
        s.style.display = "none";
        showFinal();
      }, 500);
    };

  }, 2000);
}

/* FINAL */
function showFinal() {
  document.getElementById("ultimateLove").classList.remove("hidden");
}

/* PARTICLES */
let canvas = document.getElementById("particles");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

for (let i = 0; i < 50; i++) {
  hearts.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    s: Math.random() * 5
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  hearts.forEach(h => {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(h.x, h.y, h.s, 0, Math.PI * 2);
    ctx.fill();

    h.y -= 1;
    if (h.y < 0) h.y = canvas.height;
  });

  requestAnimationFrame(draw);
}

draw();

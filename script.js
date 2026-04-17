document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("startBtn").addEventListener("click", startExperience);
});

/* START */
function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().catch(() => {});

  createHearts();
  startSlider();

  setTimeout(() => {
    document.getElementById("scrollContainer").classList.remove("hidden");
  }, 2000);

  setTimeout(showGiftScene, 20000);
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

/* HEARTS */
function createHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
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
      setTimeout(startCinematicReveal, 500);
    };

  }, 2000);
}

/* FINAL REVEAL */
function startCinematicReveal() {
  let reveal = document.getElementById("cinematicReveal");
  let img = document.getElementById("revealImg");
  let text = document.getElementById("revealText");

  const lines = [
    "My love ❤️",
    "You deserve all happiness",
    "You are my everything Barsha 💖",
    "Happy Birthday Mamma 🎂",
    "I LOVE YOU ❤️"
  ];

  reveal.classList.remove("hidden");

  setTimeout(() => reveal.classList.add("show"), 100);
  setTimeout(() => img.classList.add("show"), 1000);

  let i = 0;
  function showLines() {
    if (i < lines.length) {
      text.innerHTML = lines[i];
      i++;
      setTimeout(showLines, 2000);
    }
  }

  setTimeout(showLines, 3000);
}

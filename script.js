/* SHOW GIFT AFTER INTRO */
setTimeout(() => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("giftBox").classList.remove("hidden");
}, 4000);

/* CLICK GIFT */
document.getElementById("giftBox").onclick = () => {

  // 📳 vibration on tap
  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

  document.getElementById("giftBox").innerHTML = "💥";

  setTimeout(() => {
    document.getElementById("giftBox").style.display = "none";
    startMain();
  }, 500);
};

/* START MAIN */
function startMain() {
  document.getElementById("main").classList.remove("hidden");

  let music = document.getElementById("bgMusic");
  music.volume = 0.7;
  music.play().catch(()=>{});

  startSlider();
  createHearts();

  setTimeout(startFinalMoment, 18000);
}

/* TYPEWRITER */
function typeWriter(text, element, speed = 40) {
  element.innerHTML = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

/* SLIDER + QUOTES */
let current = 0;

const quotes = [
  "Happy Birthday Mamma 🎂❤️",
  "Barsha… you are my peace 💖",
  "Every moment with you feels like magic ✨",
  "I don’t need anything… just you 😊",
  "I love you more than anything ❤️"
];

function startSlider() {
  let slides = document.querySelectorAll(".slide");
  let quoteBox = document.getElementById("quoteBox");

  typeWriter(quotes[0], quoteBox);

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");

    setTimeout(() => {
      typeWriter(quotes[current], quoteBox);
    }, 500);

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

/* FINAL CINEMATIC */
function startFinalMoment() {

  // 📳 vibration again
  if (navigator.vibrate) {
    navigator.vibrate([200, 100, 200]);
  }

  let fade = document.getElementById("fadeScreen");
  let music = document.getElementById("bgMusic");
  let quoteBox = document.getElementById("quoteBox");

  fade.classList.add("show");

  let v = music.volume;
  let fadeOut = setInterval(() => {
    if (v > 0.1) {
      v -= 0.05;
      music.volume = v;
    } else clearInterval(fadeOut);
  }, 200);

  setTimeout(() => {
    fade.classList.remove("show");

    typeWriter(
      "HAPPY BIRTHDAY MAMMA 🎂❤️ I LOVE YOU FOREVER",
      quoteBox,
      60
    );

  }, 4000);
}

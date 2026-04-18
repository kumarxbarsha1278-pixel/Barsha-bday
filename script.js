let started=false;

/* SHOW GIFT */
setTimeout(()=>{
 document.getElementById("startScreen").style.display="none";
 document.getElementById("giftBox").classList.remove("hidden");
},4000);

/* TAP */
document.body.addEventListener("click",openGift);
document.body.addEventListener("touchstart",openGift);

function openGift(){
 if(started) return;
 started=true;

 let gift=document.querySelector(".gift");

 if(navigator.vibrate) navigator.vibrate(100);

 gift.classList.add("open");

 setTimeout(()=>{
   document.getElementById("giftBox").style.display="none";
   startMain();
 },1000);
}

/* MAIN */
function startMain(){
 document.getElementById("main").classList.remove("hidden");

 let music=document.getElementById("bgMusic");
 music.play().catch(()=>{});

 slider();
 hearts();

 setTimeout(finalMoment,15000);
}

/* SLIDER */
let i=0;
const quotes=[
 "Happy Birthday Mamma 🎂❤️",
 "Mamma… you are my everything 💖",
 "I love you forever ❤️"
];

function slider(){
 let slides=document.querySelectorAll(".slide");
 let q=document.getElementById("quoteBox");

 q.innerText=quotes[0];

 setInterval(()=>{
  slides[i].classList.remove("active");
  i=(i+1)%slides.length;
  slides[i].classList.add("active");
  q.innerText=quotes[i%quotes.length];
 },3000);
}

/* HEARTS */
function hearts(){
 setInterval(()=>{
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
 },300);
}

/* FIREWORK */
let c=document.getElementById("fireworks");
let ctx=c.getContext("2d");
c.width=innerWidth;
c.height=innerHeight;

let particles=[];
function boom(x,y){
 for(let j=0;j<50;j++){
  particles.push({x,y,dx:(Math.random()-0.5)*5,dy:(Math.random()-0.5)*5,life:50});
 }
}
function draw(){
 ctx.clearRect(0,0,c.width,c.height);
 particles.forEach((p,k)=>{
  ctx.fillRect(p.x,p.y,2,2);
  p.x+=p.dx;p.y+=p.dy;p.life--;
  if(p.life<=0) particles.splice(k,1);
 });
 requestAnimationFrame(draw);
}
draw();

/* FINAL */
function finalMoment(){
 let fade=document.getElementById("fadeScreen");

 if(navigator.vibrate) navigator.vibrate([200,100,200]);

 fade.classList.add("show");

 setTimeout(()=>{
  fade.classList.remove("show");

  for(let k=0;k<5;k++){
    setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight/2),k*300);
  }

  document.getElementById("quoteBox").innerText=
  "HAPPY BIRTHDAY MAMMA 🎂❤️ I LOVE YOU FOREVER";

 },3000);
}

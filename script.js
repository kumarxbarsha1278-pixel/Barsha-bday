window.onload = function () {

let started = false;

/* SHOW GIFT */
setTimeout(()=>{
  startScreen.style.display="none";
  giftBox.classList.remove("hidden");
  tapArea.classList.remove("hidden");
},4000);

/* TAP */
tapArea.onclick = triggerStart;
giftBox.onclick = triggerStart;

function triggerStart(){
 if(started) return;
 started=true;

 let gift=document.querySelector(".gift");
 gift.classList.add("open");

 tapArea.style.display="none";

 setTimeout(()=>{
   giftBox.style.display="none";
   startMain();
 },600);
}

/* MAIN */
function startMain(){
 main.classList.remove("hidden");

 setTimeout(()=>main.classList.add("show"),100);

 bgMusic.play().catch(()=>{});

 startSlider();
 hearts();
 beatSync();

 setTimeout(finalMoment,15000);
}

/* TYPING */
function typeText(el,text,speed=40){
 el.innerText="";
 let i=0;
 let t=setInterval(()=>{
   el.innerText+=text[i];
   i++;
   if(i>=text.length) clearInterval(t);
 },speed);
}

/* SLIDER */
let i=0;
let quotes=[
 "Happy Birthday Mamma 🎂❤️",
 "You are my everything 💖",
 "I love you forever ❤️"
];

function startSlider(){
 let slides=document.querySelectorAll(".slide");
 let q=quoteBox;

 typeText(q,quotes[0]);

 setInterval(()=>{
  slides[i].classList.remove("active");
  i=(i+1)%slides.length;
  slides[i].classList.add("active");

  typeText(q,quotes[i%quotes.length]);

 },3000);
}

/* HEARTS */
function hearts(){
 setInterval(()=>{
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="❤️";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize=(Math.random()*20+10)+"px";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
 },300);
}

/* BEAT */
function beatSync(){
 setInterval(()=>{
  document.body.classList.add("beat");
  setTimeout(()=>document.body.classList.remove("beat"),200);
 },600);
}

/* FIREWORK */
let canvas=fireworks;
let ctx=canvas.getContext("2d");

function resize(){
 canvas.width=innerWidth;
 canvas.height=innerHeight;
}
resize();
window.onresize=resize;

let particles=[];

function boom(x,y){
 for(let j=0;j<50;j++){
  particles.push({
   x,y,
   dx:(Math.random()-0.5)*5,
   dy:(Math.random()-0.5)*5,
   life:50,
   color:`hsl(${Math.random()*360},100%,50%)`
  });
 }
}

function draw(){
 ctx.clearRect(0,0,canvas.width,canvas.height);

 particles=particles.filter(p=>p.life>0);

 particles.forEach(p=>{
  ctx.fillStyle=p.color;
  ctx.fillRect(p.x,p.y,2,2);
  p.x+=p.dx;
  p.y+=p.dy;
  p.life--;
 });

 requestAnimationFrame(draw);
}
draw();

/* FINAL */
function finalMoment(){
 fadeScreen.classList.add("show");

 setTimeout(()=>{
  fadeScreen.classList.remove("show");

  for(let k=0;k<5;k++){
   setTimeout(()=>boom(Math.random()*innerWidth,Math.random()*innerHeight/2),k*300);
  }

  finalMessage.classList.remove("hidden");
  setTimeout(()=>finalMessage.classList.add("show"),100);

  voiceNote.play().catch(()=>{});

 },3000);
}

};

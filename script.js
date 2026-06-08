const message = `

Dear Purusothaman,

No matter what happens,
I will always be by your side.

You are my happiness,
my peace,
and my favorite person.

Happy Birthday My Love ❤️

Forever Yours,
Deepa Sri

`;

let i=0;

function typeWriter(){

if(i<message.length){

document.getElementById("typewriter")
.innerHTML += message.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();

const target =
new Date("June 09, 2026 00:00:00").getTime();

setInterval(()=>{

const now = new Date().getTime();

const gap = target-now;

const days =
Math.floor(gap/(1000*60*60*24));

document.getElementById("countdown")
.innerHTML =
"🌌 " + days + " Days Left ❤️";

},1000);

function openMoon(){

document.getElementById("moonMessage")
.style.display="block";

}

for(let i = 0; i < 250; i++) {

let star=document.createElement("div");

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";
star.style.top=Math.random() *100+"vh";

star.style.width="2px";
star.style.height="2px";

star.style.background="white";

star.style.borderRadius="50%";

star.style.opacity=Math.random();

document.body.appendChild(star);

}



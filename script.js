function unlock(){
  
  
  let password =
  document.getElementById("pass").value;

  if(password==="love"){

    document.getElementById("login").style.display="none";
    document.getElementById("content").style.display="block";
    
    document.body.style.overflowY = "auto";
document.getElementById("bgMusic").play();
  }else{

    alert("Wrong Password!");

  }

}

const startDate =
new Date("2026-01-17");

function updateCounter(){

  const now = new Date();

  const diff = now - startDate;

  const days =
  Math.floor(diff/(1000*60*60*24));

  document.getElementById("days").innerHTML =
  "❣️ " + days + " Days Together ❣️";

}

updateCounter();

for(let i=0;i<40;i++){

  let heart =
  document.createElement("div");

  heart.className="floating";

  heart.innerHTML="💖";

  heart.style.left=
  Math.random()*100+"vw";

  heart.style.animationDuration=
  (Math.random()*5+5)+"s";

  document.body.appendChild(heart);

}

function openMessage(){
  document.getElementById("content").style.display = "none";
  document.getElementById("message1").style.display = "block";
}


function goHome(){
  document.getElementById("message1").style.display = "none";
  document.getElementById("content").style.display = "block";
}

function nextMessage(){
  document.getElementById("message1").style.display = "none";
  document.getElementById("message2").style.display = "block";
}

function prevMessage(){
  document.getElementById("message2").style.display = "none";
  document.getElementById("message1").style.display = "block";
}

function nextMessage2(){
  document.getElementById("message2").style.display = "none";
  document.getElementById("message3").style.display = "block";
}

function prevMessage2(){
  document.getElementById("message3").style.display = "none";
  document.getElementById("message2").style.display = "block";
}
// من الرسالة التالتة للرابعة
function nextMessage3() {
  document.getElementById("message3").style.display = "none";
  document.getElementById("message4").style.display = "block";
}

// من الرسالة الرابعة للتالتة
function prevMessage3() {
  document.getElementById("message4").style.display = "none";
  document.getElementById("message3").style.display = "block";
}
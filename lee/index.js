// 시작줄 시간 찍기 /////////////////////////////////////////////
var Target = document.getElementById("clock");
var Target_apm = document.getElementById("apm");
function clock() {
  var time = new Date();
  var hours = time.getHours();
  var minutes = time.getMinutes();
  var seconds = time.getSeconds();
  var AmPm = "AM";
  if (hours > 12) {
    var AmPm = "PM";
    hours %= 12;
  }

  Target.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;

  Target_apm.innerHTML = `${AmPm}`;

}
clock();
setInterval(clock, 1000); // 1초마다 실행
// 시간 줄 찍기 //////////////////////////////////////////////


// 메인 ////////////////////////////////////////////////////////////////////////


const inner = document.querySelectorAll(".inner");
for (let i = 0; i < inner.length; i++) {
  inner[i].addEventListener('click',
    function() {
      // console.log (this);
          
      showModal(this.querySelector('p').textContent, 200 + (Math.random() * 100), 300 + (Math.random() * 100))
    
    }
  );
}


function showModal(title, x, y) {

  const modals = [...document.querySelectorAll(".modal .title > div")];
  for (const i in modals) {
    if (modals[i].textContent == title) return;
  }

  let content = "";
  if(title=="내 컴퓨터"){
    content = "내 컴퓨터입니다";
  } else if(title=="자료실"){
    content = "자료실 입니다.";
  } else if(title=="TimeLine"){
    content = "TimeLine 입니다.";
  } else if(title=="Portfolio"){
    content = "Portfolio 입니다.";
  }else{
    content = "Contact 입니다.";
  }

  const modal = document.createElement("div");
  modal.className = "modal";
  // <div class="modal"></div>
  modal.innerHTML = `
  <div class="title"><div>${title}</div><span class="close">X</span></div>
  <div class="content">${content}</div>
  `;
  
  
  modal.style.left = x + "px";
  modal.style.top = y + "px";
  document.querySelector(".modal-wrap").append(modal);


  
  modal.querySelector('.close').addEventListener('click',function(){
  modal.remove();
})
  
}

// 메인 ////////////////////////////////////////////////////////////////////////


// footer ///////////////////////////////////////////////////////////////

// start창 모달
const start =document.querySelector('.start');
const startmodal = document.querySelector('.startmodal');
start.addEventListener('click',function(){
  startmodal.classList.toggle('hide');
  start.classList.toggle('shadow');
})

// 바탕화면을 눌러도 start 창이 닫아지게
document.querySelector('#main').addEventListener('click', function(){
  startmodal.classList.add('hide');
  start.classList.remove('shadow');
})




const p = document.querySelectorAll('.btmodal>p');
const sidemodal = document.querySelectorAll('.sidemodal');
for(let i = 0; i<p.length; i++){
  p[i].addEventListener('mouseover', function(){
    sidemodal[i].classList.add('open');
  })

  p[i].addEventListener('mouseout', function(){
    sidemodal[i].classList.remove('open');
  })
}

// footer ///////////////////////////////////////////////////////////////

// fticon 클릭시 동일한 모달창 띄우기
const fticon = document.querySelectorAll(".fticon");
for (let i = 0; i < fticon.length; i++) {
  fticon[i].addEventListener('click',
    function() {
      // console.log (this);
          
      showModal(this.querySelector('p').textContent, 200 + (Math.random() * 100), 300 + (Math.random() * 100))
    
    }
  );
}


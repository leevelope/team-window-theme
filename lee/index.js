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
// const inner = document.querySelectorAll(".inner");
// const modal = document.querySelectorAll('.modal');
// const modalContent = modal.querySelector('.content');
// for (let i = 0; i < inner.length; i++) {
//   console.log(inner[i]);

//   inner[i].addEventListener('click',function(){
//     document.querySelector(".modal .title > div").textContent = this.querySelector('p').textContent;

//     modal.style.display = "block";
//     modal.classList.remove("medium");

//     if(i==0){
//       modalContent.textContent = "내 컴퓨터입니다"; 
//     } else if(i==1){
//       modalContent.textContent = "자료실 입니다.";
//     } else if(i==2){
//       modalContent.textContent = "TimeLine 입니다.";
//       modal.classList.add("medium");

//     } else if(i==3){
//       modalContent.textContent = "Portfolio 입니다.";
//     }else{
//       modalContent.textContent = "Contact 입니다.";
//     }
//   })

//   document.querySelector('.close').addEventListener('click',function(){
    
//     document.querySelector('.modal').style.display = "none";
//   })
// }
// 메인 ////////////////////////////////////////////////////////////////////////
const inner = document.querySelectorAll(".inner");
for (let i = 0; i < inner.length; i++) {
  inner[i].addEventListener('click',
    function() {
      console.log (this);

      let nayoung;

      if(i==0){
              nayoung = "내 컴퓨터입니다"; 
            } else if(i==1){
              nayoung = "자료실 입니다.";
            } else if(i==2){
              nayoung = "TimeLine 입니다.";
              // modal.classList.add("medium");
        
            } else if(i==3){
              nayoung = "Portfolio 입니다.";
            }else{
              nayoung = "Contact 입니다.";
            }
          
      showModal(this.querySelector('p').textContent, nayoung, 200 + (Math.random() * 100), 300 + (Math.random() * 100))
    }
  );
}



// const aa = document.querySelector(".modal .title > div").textContent;

function showModal(title, content, x, y) {
  // const findModal = document.querySelectorAll('.modal');
  //  for(let i = 0; i < inner.length; i++){
  //   if(title==aa) return;

  // //   indModal .textContent

  // // return; 
  // }

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


  
  document.querySelector('.close').addEventListener('click',function(){
  console.log("모달닫기");
  // 삭제가 아니라 숨기기만함 // 계속 생성되는데 하나만 숨김 처리되니까 첫번째 none 말곤 작동x
  // document.querySelector('.modal').style.display = "none";
  // 한개당 하나의 삭제가 아니라 여러창이 띄워져있어도 처음 띄워진 모달창에 close를 누르면 전체 다 삭제 됨.
  document.querySelector('.modal').remove();
})
  
}









// const fticon = document.querySelectorAll('.fticon');

// for (let i = 0; i < fticon.length; i++) {
//   fticon[i].addEventListener('click', function(){

//     // document.querySelector(".modal .title > div").textContent =
//     // this.querySelector('p').textContent;
//     modal.style.display = "block";
    
//   })
  
// }



// footer ///////////////////////////////////////////////////////////////

// start창 모달
const start =document.querySelector('.start');
const startmodal = document.querySelector('.startmodal');
start.addEventListener('click',function(){
  startmodal.classList.toggle('toggle');
})

// 바탕화면을 눌러도 start 창이 닫아지게
document.querySelector('#main').addEventListener('click', function(){
  startmodal.classList.add('toggle');
})

start.addEventListener('click',function(){
  start.classList.toggle('shadow');
  // if(startmodal.class='shadow'){
  //   document.querySelector('#footer > ul > li.start').style = "background-color : rgb(30 30 30)";
  // }
})


// 인식 안 됨
// if(startmodal.style.display=="block"){
//   console.log(startmodal.style.display);
//   document.querySelector('#footer > ul > li.start').style = "background-color : rgb(30 30 30)";
// }


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

// const btmodal = document.querySelectorAll('.btmodal');
// const sidemodal = document.querySelectorAll('.sidemodal');
// for (let i = 0; i<btmodal.length; i++){
//   btmodal[i].addEventListener('mouseover', function(){
//     console.log("mouseover", i, sidemodal[i]);
//     sidemodal[i].style.display = "block";
//   })

//   btmodal[i].addEventListener('mouseout', function(){
//     console.log("mouseout", i, sidemodal[i]);
//     sidemodal[i].style.display = "none";
//   })
// }

// for (let i = 0; i<btmodal.length; i++){
//   btmodal[i].addEventListener('mouseout', function(){
//     console.log("dddd");
//     sidemodal[i].style.display = "none";
//   })
// }
// footer ///////////////////////////////////////////////////////////////



// 기존창만 바뀜 한번에 2개이상 창이 띄워지지 않음 -> 생성으로 바꾸던가 / 만들어진 기존창만 띄우던가
const fticon = document.querySelectorAll('.fticon')
for (let i = 0; i < fticon.length; i++) {
  fticon[i].addEventListener('click',
  function() {
    let title = document.querySelector('.modal > .title > div');
        if(i==0){
              document.querySelector('title').textContent = "내 컴퓨터";
              document.querySelector('.content').textContent = "내 컴퓨터입니다";
              } else if(i==1){
                document.querySelector('title').textContent = "Contact";
                document.querySelector('.content').textContent = "Contact입니다";
              }
  
    document.querySelectorAll('.fticon')[i].addEventListener('click', function(){
      document.querySelector('.modal').style.display = "block";
    })
  }
  
)}






















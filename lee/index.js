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

      // let nayoung;

      // if(i==0){
      //         nayoung = "내 컴퓨터입니다";
      //       } else if(i==1){
      //         nayoung = "자료실 입니다.";
      //       } else if(i==2){
      //         nayoung = "TimeLine 입니다.";
      //         // modal.classList.add("medium");
        
      //       } else if(i==3){
      //         nayoung = "Portfolio 입니다.";
      //       }else{
      //         nayoung = "Contact 입니다.";
      //       }
          
      showModal(this.querySelector('p').textContent, 200 + (Math.random() * 100), 300 + (Math.random() * 100))
    
    


    }
  );
}



// const aa = document.querySelector(".modal .title > div").textContent;

function showModal(title, x, y) {

  const modals = [...document.querySelectorAll(".modal .title > div")];
  for (const i in modals) {
    if (modals[i].textContent == title) return;
  }

  let nayoung = "";
  if(title=="내 컴퓨터"){
    nayoung = "내 컴퓨터입니다";
  } else if(title=="자료실"){
    nayoung = "자료실 입니다.";
  } else if(title=="TimeLine"){
    nayoung = "TimeLine 입니다.";
  } else if(title=="Portfolio"){
    nayoung = "Portfolio 입니다.";
  }else{
    nayoung = "Contact 입니다.";
  }

  /*
  for (const m of modals) {
    if (m.textContent == title) return;
  }
  */
 /*
  for (const modal of [...document.querySelectorAll(".modal .title > div")]) {
    m.textContent;
  }
 */





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


  
  modal.querySelector('.close').addEventListener('click',function(){
  modal.remove();
})
  
}


// let isButtonClicked = false;
// if (isButtonClicked) { // boolean
//   // dasd
//   isButtonClicked = false;
// } else {
//   // 버튼이 눌렸을 때
//   isButtonClicked = true;
// }

// let kk = document.querySelector(".modal .title > div");

// if(kk >= 1){
//   isButtonClicked = false;
// }





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
  startmodal.classList.toggle('hide');
  start.classList.toggle('shadow');
})

// 바탕화면을 눌러도 start 창이 닫아지게
document.querySelector('#main').addEventListener('click', function(){
  startmodal.classList.add('hide');
  start.classList.remove('shadow');
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
// const fticon = document.querySelectorAll('.fticon')
// for (let i = 0; i < fticon.length; i++) {
//   fticon[i].addEventListener('click',
//   function() {
//     let title = document.querySelector('.modal > .title > div');
//         if(i==0){
//               document.querySelector('title').textContent = "내 컴퓨터";
//               document.querySelector('.content').textContent = "내 컴퓨터입니다";
//               } else if(i==1){
//                 document.querySelector('title').textContent = "Contact";
//                 document.querySelector('.content').textContent = "Contact입니다";
//               }
  
//     document.querySelectorAll('.fticon')[i].addEventListener('click', function(){
//       document.querySelector('.modal').style.display = "block";
//     })
//   }
  
// )}






















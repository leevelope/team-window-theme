let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let inner = document.querySelector('.inner');


// function add(){
//     const list = document.createElement('li');
//     list.className = "todolist";
//     console.log(input);
//     if(!input.value){
//         alert('내용을 입력해주세요');
//     }else{
//         list.innerHTML = input.value;
//         inner.append(list);
//         input.value = "";
//     }
//     list.addEventListener('click', function(){     
//         list.classList.toggle('line');
//     })
//     list.addEventListener('dblclick', function(){   
//         inner.removeChild(list);
//     })
// }




btn.addEventListener('click', function(){
    const list = document.createElement('li');
    list.className = "todolist";
    console.log(input);
    if(!input.value){
        alert('내용을 입력해주세요');
        // console.log('왜 안나오냐');
    }else{
        list.innerHTML = input.value;
        inner.append(list);
        input.value = "";
    }
    // li에 클릭시 줄긋기/줄긋기 지우기
    list.addEventListener('click', function(){
        list.classList.toggle('line');
    })
    // li에 더블클릭시 줄 삭제
    list.addEventListener('dblclick', function(){
    })
    // add();
})


input.addEventListener('keypress', (e)=>{
    if( e.key === 'Enter'){
    const list = document.createElement('li');
    list.className = "todolist";
    console.log(input);
    if(!input.value){
        alert('내용을 입력해주세요');
        // console.log('왜 안나오냐');
    }else{
        list.innerHTML = input.value;
        inner.append(list);
        input.value = "";
    }
    // li에 클릭시 줄긋기/줄긋기 지우기
    list.addEventListener('click', function(){
        list.classList.toggle('line');
    })
    // li에 더블클릭시 줄 삭제
    list.addEventListener('dblclick', function(){
        inner.removeChild(list);
    })
    // add();
    }
})


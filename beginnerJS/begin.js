//const title = document.getElementById("title");
//title.innerText = "Got you!";

//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

const h1 = document.querySelector("div.hello:first-child h1"); // 똑같은게 있다면 요소 중 하나만 가져옴 --> 다 가져오려면 qeurySelectorAll 사용
//title.innerText = "Hello";

function handleTitleClick(){
    const clickedClass = "clicked"; // 오타를 막기위해 변수로 저장 후 값 불러오거나 출력하기
    if(h1.classList.contains(clickedClass)) { 
        h1.classList.remove(clickedClass);
    } else {
        h1.classList.add(clickedClass);
    }
}



h1.addEventListener("click", handleTitleClick);

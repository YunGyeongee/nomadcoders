//const title = document.getElementById("title");
//title.innerText = "Got you!";

//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

const title = document.querySelector("div.hello:first-child h1"); // 똑같은게 있다면 요소 중 하나만 가져옴 --> 다 가져오려면 qeurySelectorAll 사용
//title.innerText = "Hello";

function handleTitleClick(){
    //console.log("title was clicked!");
    title.style.color = "blue";
}

function handleMouseEnter(){
    title.innerText = "Mouse is here!";
}

function handleMouseLeave(){
    title.innerText = "Mouse is gone!";
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
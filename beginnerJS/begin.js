//const title = document.getElementById("title");
//title.innerText = "Got you!";

//const hellos = document.getElementsByClassName("hello");
//console.log(hellos);

const h1 = document.querySelector("div.hello:first-child h1"); // 똑같은게 있다면 요소 중 하나만 가져옴 --> 다 가져오려면 qeurySelectorAll 사용
//title.innerText = "Hello";

function handleTitleClick(){
    const currentColor = h1.style.color;
    //console.log("title was clicked!");
    if(currentColor === "blue"){
        newColor ="tomato";
    } else {
        newColor = "blue";
    }
    h1.style.color = newColor;
}



h1.addEventListener("click", handleTitleClick);

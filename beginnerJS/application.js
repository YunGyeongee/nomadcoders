const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string들을 대문자 변수로 저장해놓는 것이 좋음 -> 오타 방지
const HIDDEN_CALSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CALSSNAME);
    const username = loginInput.value; 
    //console.log(username);
    localStorage.setItem(USERNAME_KEY, username);
    //greeting.innerText = "Hello " + username;
    //greeting.innerText = `hello ${username}`; // '' 홑따옴표 아님 `` 백틱
    paintGrettings(username);
}


function paintGrettings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CALSSNAME);
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CALSSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    // show the greetings
    paintGrettings(username);
}
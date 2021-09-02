const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CALSSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CALSSNAME);
    const username = loginInput.value; 
    //console.log(username);
    localStorage.setItem("username", username);
    //greeting.innerText = "Hello " + username;
    greeting.innerText = `hello ${username}`; // '' 홑따옴표 아님 `` 백틱

    greeting.classList.remove(HIDDEN_CALSSNAME);
}


loginForm.addEventListener("submit", onLoginSubmit);

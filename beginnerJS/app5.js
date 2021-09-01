/* function : 코드를 캡슐화해서 여러번 실행 할 수 있게 해줌 */

function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("Rachel", 25);
sayHello("Elena", 28);
sayHello("June", 35);

// =======================================================

function plus(a, b){
    console.log(a + b);
}
function divide(a, b){
    console.log(a / b);
}

plus(8, 60);
divide(98, 20);

// =======================================================

const player = {
    name : "rachel",
    sayHello : function(otehrPersonsName){
        console.log("hello " + otehrPersonsName + " nice to meet you");
    },
}

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");
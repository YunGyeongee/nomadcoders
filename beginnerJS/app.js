const a = 5;
const b = 2;
let myName = "Rachel";

/* 
    * var 와 let, const 의 차이점
      const : 상수. 즉, 값이 바뀔 수 없음
      let : 생성할 때 만들며 값이 바뀔 수 있음, 업데이트가 허용되어야 하는 변수의 경우에 사용
      var : 생성 후 업데이트 될 수 있음. 변수 모두 var로 사용해도 상관은 없으나 의미 전달하기가 어려움

    대부분 const를 사용하고 가끔은 let, 절대 사용x var

*/

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("Hello " + myName);

myName = "Rachel Kim";

console.log("your new name is " + myName);
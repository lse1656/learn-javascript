'use strict';

//Javascript is synchronous. 동기적이다
//Execute(실행하다) the code block in order(적합하다) after hoisting.
//hoisting: var, function declaration 이러한 함수 선언들이 자동적으로 제일 올라가는 것
//callback 함수: 우리가 전달해준 함수를 나중에 다시 부르는 것 ex)setTimeout()
console.log('1');
setTimeout(()=> console.log('2'), 1000);
console.log('3');

//Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'))
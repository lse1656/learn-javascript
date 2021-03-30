//Function
// - fundamental(핵심적인) building block in the program
// - subprogram can be used multiple times(여러번)
// - performs(수행하다) a task or calculates a value

// 1.Function declaration
// function name(param1, param2) {body...return;}
// one function === one thing
// naming: doSomething, command, verb(동사)
// e.g. createCardAndPoind -> createCard, createPoint
// function is 'object' in JS

function printHello(message) {
    console.log(message)
}
printHello('안뇽');

//2.Parameters
// primitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj){
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie)
console.log(ellie);

//3.Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

//4.Rest parameters (added in ES6) 배열 형태로 전달된다
function printAll(...args){
    for(let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // for(const arg of args){
    //     console.log(arg)
    // }

    // args.forEach((arg) => console.log(arg))
}
printAll('dream','coding','ellie');

//5. Local scope (밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.)
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello';
    console.log(message); //local variable
    console.log(globalMessage);
}
printMessage();

//6. Return a value
// 모든 함수에는 return undefined(생략가능)이나 값이 들어감
function sum(a,b){
    return a + b;
}
const result = sum(1,2)
console.log(`sum: ${result}`)

//7. Early return, early exit
// bad
function upgradeUser(user){
    if (user.point > 10){
        //long upgrad logic...
    }
}
//good
function upgradeUser(user){
    if (user.point <= 10){
        return;
    }
    //long upgrad logic...
}

// First-class function 일급함수
// functions are treated(여기다) like any other variable
// can be assigned(할당된) as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

//1.Function experssion 함수 표현식
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function(){  // anonymous fuction
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2.Callback function using function expression
// parameter에 함수를 넣어서 상황에 맞으면 전달된 함수를 부르는 것을 callback function이라 한다
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces(추적)
// recursions(반복)
const printNo = function print(){
    console.log('no!');
};
randomQuiz('wrong',printYes,printNo);
randomQuiz('love you',printYes,printNo);

// Arrow function
// always anonymous
const simplePint = function(){
    console.log('simplePrint!');
};

// const simplePint = () => console.log('simplePrint!');
// const add = (a,b) => a + b;

// IIFE : Immediately Invoked(적용된) Function Expression
// 선언과 동시에 즉시 호출
(function hello(){
    console.log('IIFE');
})();

//Fun quiz time
//function calculate(command, a, b)
//command: add. subtract, divide, multiply, remainder

function calculate(command,a,b){
    switch (command){
        case 'add':
            return a + b;
        case 'subtract':
             return a - b; 
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
    }
};

console.log(calculate('add',1,2))


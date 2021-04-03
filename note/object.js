// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all abjects in JavaScript are instances of Object
//object = { key : value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntaxt
const obj2 = new Object(); // 'object constructor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const ellie = {name:'ellie', age: 4};
print(ellie);


// with JavaScript magic (dynamically typed language)
// can add properties  later
ellie.hasJob = true;
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2.Computed(계산된) properties
// key should be always string
console.log(ellie.name);
console.log(ellie['name']); //우리가 정확하게 어떤 key가 필요할지 모를 때 사용

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie, 'name')

// 3. Property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4, Constructor function
function Person(name, age){
    // this = {};
    this.name = name;
    this.age = age;
    //return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie);
console.log('random' in ellie);

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for(key in ellie){
    console.log(key);
}

// for (value of iterable(반복 가능한 객체))
const array = [1, 2, 4, 5];
for(value of array){
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
// 열거할 수 있는 하나 이상의 출처 객체로부터 대상 객체로 속성을 복사할 때 사용
const user = { name: 'ellie', age: '20'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.log(user3);

const user4 = Object.assign({}, user);
console.log(user4);

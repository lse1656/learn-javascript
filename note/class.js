'use strict';
// Object-oriendted programming
// class: template
// Object: instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance(물려받다)

// 1. class declarations
class Person {
    // constructor
    constructor(name,age){
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie);
ellie.speak();

// 2. Getter and setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){
        return this._age;
    }

    set age(value){
        // if(value < 0){
        //     throw Error('age an not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve','Job',-1);
console.log(user1)

// 3. Fields (public, private)
// Too soon!
class Experiment{
    publicField = 2;
    #privateFied = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateFied);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

// 5. Inheritance 상속
// a way for one class to extend another class.
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color!`);
    }

    getArea(){
        return this.width * this.height;    
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape{
    getArea(){
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 20,'blue');
rectangle.draw();

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle) //ture
console.log(triangle instanceof Rectangle)  //false
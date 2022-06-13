console.log('Hello my name is Brian');

// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JS --
    Primitive Data Types: String, Number, Boolean, Undefined, Null
    Objects: Object, Array, Function

    Control Flow
*/

// Variable Declaration
// var myName;

// console.log(myName);

// String Declaration
var myName = 'Brian';

// console.log() is equivalent to python's print() function
console.log(myName);
console.log(typeof myName);

// Strings can be created using '', "", or ``. The tick marks (``) have a special behavior to format the string
// Tick Marks + ${varName} is equiv to f"{}" in python 
console.log("My name is ${myName}");
console.log('My name is ${myName}');
console.log(`My name is ${myName}`); 


// Integer
var myAge = 100;

console.log(myAge);
console.log(typeof myAge);

// Float
var pi = 3.14;

console.log(pi);
console.log(typeof pi);


// Boolean
var boolTrue = true;
console.log(boolTrue);
console.log(typeof boolTrue);

var boolFalse = false;
console.log(boolFalse);
console.log(typeof boolFalse);


// Undefined
var something;

console.log(something);
console.log(typeof something);


// Null
var someNull = null;

console.log(someNull);
console.log(typeof someNull); // A Bug in the code! 


// Object
var myObject = {
    a: 123,
    test: 'Hello World'
}

console.log(myObject);
console.log(typeof myObject);


// Array
var myArr = ['Brian', 'Chicago', 'Coding Temple', 10];

console.log(myArr);
console.log(typeof myArr);


// Function
function abc(){};

console.log(abc);
console.log(typeof abc);


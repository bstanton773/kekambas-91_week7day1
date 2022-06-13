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



// Accessing Properties from an Object
var person = {
    first: 'Brian',
    last: 'Stanton',
    languages: ['Python', 'JavaScript']
};

console.log(person);

// Bracket Notation
console.log(`My first name is ${person['first']}`);

// Dot Notation
console.log(`My last name is ${person.last}`);

console.log(person.languages);

console.log(`My favorite language is ${person.languages[0]}`)


// Arrays have a "length" property
var myNewArr = ['abc', '123', 'hello world']
console.log(myNewArr, myNewArr.length);

console.clear();

// let - Allows us to declare a variable similar as var *let is block-scoped, var is global-scoped*
let myCity = 'Chicago';
let test;
console.log(test);

if (true){
    var myState = 'Illinois';
    // let myCity = 'Champaign';
    let color = 'Blue'
    console.log(myCity, myState, color);
}

console.log(myCity, myState);


// const - similar to let (block scoped) - 2 differences: 1. Needs a value when declared 2. Cannot be reassigned
const newVariable = 'something';
console.log(newVariable);

const myBirthday = true;
let ageOfPerson = 40;

if (myBirthday){
    const myFavColor = 'Orange';
    ageOfPerson = ageOfPerson + 1; // OK because ageOfPerson declared with let
    console.log(ageOfPerson);
    // myBirthday = false; // Error because myBirtday declared with const -> cannot be reassigned
    console.log(myFavColor);
}
// console.log(myFavColor); // Error: myFavColor not defined

if (myBirthday){
    const myFavColor = 'Blue';
    console.log(myFavColor)
}


const cities = ['Chicago', 'New York', 'Boston', 'Los Angeles']

console.log(cities);

cities[1] = 'San Fancisco';

console.log(cities);

// cities = ['Austin', 'Portland'];

// console.log(cities);

const newPerson = {
    first: 'Abe',
    last: 'Lincoln'
}

console.log(newPerson);

newPerson.first = 'Abraham';

console.log(newPerson);

// newPerson = {
//     first: 'Mary Todd',
//     last: 'Lincoln'
// }

// console.log(newPerson);

// Clear the console for new topic
console.clear()


/*
    Basic Math Operations 
*/

// Addition
let sum = 5 + 5;
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum += 5; // sum = sum + 5
console.log(sum);
sum++; // sum += 1 OR sum = sum + 1 
console.log(sum);


// Subtraction
let diff = 10 - 5;
console.log(diff);
diff -= 3; // diff = diff -3
console.log(diff);
diff--; // diff -= 1 OR diff = diff - 1
console.log(diff);


// Multiplication
let prod = 4 * 5;
console.log(prod);
prod *= 2; // prod = prod * 2
console.log(prod);

// Division
let quotient = 40 / 5;
console.log(quotient);
quotient /= 2; // quotient = quotient / 2;
console.log(quotient);


// Exponents
let square = 5 ** 2
console.log(square);
square **= 2; // square = square ** 2
console.log(square);


// Modulo 
let remainder = 19 % 4;
console.log(remainder);
remainder %= 2; // remainder = remainder % 2;
console.log(remainder);


// Floor Division
let floor = Math.floor(10/3)
console.log(floor);

let ceil = Math.ceil(10/3);
console.log(ceil);


let myString = 'My age is ';
let myCoolAge = 45;

let addedString = myString + myCoolAge;
console.log(addedString);
console.log(typeof addedString);


console.log(square);


let quizOne = square + '4';
// undefined, 629, 6254, 625+4
console.log(quizOne);

let quizOneWithParse = square + parseInt('4');
// undefined, 629, 6254, 625+4
console.log(quizOneWithParse);


let quizTwo = square - '4';
// undefined, 621, 6254, 625-4
console.log(quizTwo);


console.clear();

/*
    JavaScript Comparisons
*/


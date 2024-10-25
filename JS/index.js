//Primitives / Value Types

//let name = 'Marvy';         // String literal
//let age = 46;               // Number literal
let isApproved = false;     // Boolean literal
let firstName = undefined;  // undefined
let selectedColor = null;   // null

console.log('Hello World');

let myName = 'Me';
console.log(myName);

//CONSTANTS
// if you need to reassign a constant, define it as let
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);

//REFERENCE TYPES
// object
// array
// function

//create a person object using the data above

let person = {
    name: 'Marvy',
    age: 30
};
console.log(person);

//DOT NOTATION
person.name = 'John';
console.log('DOT NOTATION: ' + person.name);

//BRACKET NOTATION
person['name'] = 'Mary';

console.log('BRACKET NOTATION: ' + person.name);

//create an array
let selectedColors = ['red', 'blue'];
console.log(selectedColors);
console.log(selectedColors[0]);
selectedColors[2] = 99;
console.log(selectedColors);
console.log(selectedColors.length);


// FUNCTIONS
// adding a name variable. This is only accessible in this function and called a parameter. An argument is what gets parsed into the function

function greet(name, lastName) {
    console.log('HELLO MA! ' + name + ' ' + lastName);
}

greet('John', 'Smith');
greet('Mary');

//Function to calculate a value

function square(number) {
    return number * number;
}

console.log(square(3));
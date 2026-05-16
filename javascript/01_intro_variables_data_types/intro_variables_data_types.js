// Print to the console
console.log("Hello World");
console.log(10);                // Prints 10 to the console
console.log(/*IGNORED!*/ 10);   // Still just prints 10
console.log("--------------------");

// Data types
// Reference: https://www.codecademy.com/resources/docs/javascript/data-types
console.log(typeof 'Hello World'); // string
console.log(typeof 10);            // number
console.log(typeof 10.55);         // number
console.log(typeof true);          // boolean
console.log(typeof undefined);     // undefined
console.log(typeof {});            // object
console.log("--------------------");

// Arithmetic Operators
console.log(10 + 5);  // Addition
console.log(10 - 5);  // Subtraction
console.log(10 * 5);  // Multiplication
console.log(10 / 5);  // Division
console.log(10 % 3);  // Modulus (Remainder)
console.log(10 ** 2); // Exponentiation (10 raised to the power of 2)
console.log("--------------------");

// String Concatenation
console.log("Hello " + "World");                // Concatenates two strings
console.log("The answer is: " + 42);            // Concatenates a string and a number
let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.');      // Concatenates a string and a variable. Output: 'I own a pet armadillo.'

// String Interpolation
// Allows you to embed expressions within string literals using template literals
console.log(`I own a pet ${myPet}.`);   // Output: I own a pet armadillo.
let myName = 'Jesse Varela';
let myCity = 'Houston';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);
console.log("--------------------");

// Properties
console.log("Hello".length); // Length of the string
console.log([1, 2, 3].length); // Length of the array
console.log("--------------------");

// Methods
console.log("Hello".toUpperCase());                 // Converts string to uppercase
console.log("Hello".toLowerCase());                 // Converts string to lowercase
console.log('Hey'.startsWith('H'));                 // Prints true
console.log('    Remove whitespace   '.trim());     // Removes whitespace from both ends of the string
console.log([1, 2, 3].join("-"));                   // Joins array elements into a string with a separator
console.log("--------------------");

// Built-in objects
console.log(Math.random());                         // Prints a random number between 0 and 1
console.log(Math.floor(Math.random() * 50));        // Prints a random whole number between 0 and 50
console.log(Number.isInteger(2017));                // Checks if the value is an integer, returns true
console.log(Math.ceil(43.8));                       // Returns the smallest integer greater than or equal to a given number
console.log(Math.PI);                               // Accessing the value of PI from the Math object
console.log(Math.sqrt(16));                         // Using the sqrt method to calculate the square root of 16
console.log(Date.now());                            // Getting the current timestamp in milliseconds
console.log("--------------------");
console.log("--------------------");


// -------------------- Variables --------------------
// Resource: https://www.codecademy.com/resources/docs/javascript/variables

// Create a variable: var   // Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
// Prior to ES6, programmers could only use the var keyword to declare variables. This is not the preferred way to declare variables nowadays
var her_name = "Alice";
console.log(her_name);

// Create a variable: let
// let is the preferred way to declare variables in modern JavaScript because it has block scope and helps prevent accidental reassignments.
// Values declared with let can be reassigned, but cannot be redeclared within the same scope.
let age = 30;
console.log(age);

// Create a variable: const
// const is used to declare variables that are meant to be constants, meaning their values cannot be reassigned after they are set.
// Attempting to reassign a constant will result in an error.
// However, if the constant is an object or an array, its properties or elements can still be modified.
const name = 'Jesse Varela';
console.log(name);
const PI = 3.14159;
console.log(PI);
// PI = 3.14;               // Uncommenting this line will throw a TypeError because 'PI' is a const variable
console.log("--------------------");

// -------------------- Operators --------------------
// Resource: https://www.codecademy.com/resources/docs/javascript/operators

// Mathematical Assignment Operators
let x = 20;
x -= 5;             // Can be written as x = x - 5
console.log(x);     // Output: 15

let y = 50;
y *= 2;             // Can be written as y = y * 2
console.log(y);     // Output: 100

let z = 8;
z /= 2;             // Can be written as z = z / 2
console.log(z);     // Output: 4

// Increment and Decrement Operators
let count = 10;
count++;            // Increments count by 1 (count = count + 1)
console.log(count); // Output: 11

let score = 5;
score--;            // Decrements score by 1 (score = score - 1)
console.log(score); // Output: 4
console.log("--------------------");

// typeof operator
// determine the type of a variable or value. It returns a string indicating the type.
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

const unknown2 = 10;
console.log(typeof unknown2); // Output: number

const unknown3 = true; 
console.log(typeof unknown3); // Output: boolean

let unknown4;
console.log(typeof unknown4); // Output: undefined
unknown4 = 5;
console.log(typeof unknown4); // Output: number
console.log("--------------------");
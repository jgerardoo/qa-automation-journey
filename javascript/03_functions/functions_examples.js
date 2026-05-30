// Functions                    Ref: https://www.codecademy.com/resources/docs/javascript/functions
// Declare a function
function getReminder() {
  console.log("Water the plants.");
}

function greetInSpanish() {
  console.log("Buenas tardes.");
}

// Call the functions
greetInSpanish();
getReminder();
console.log("-----------------------");

// Functions with parameters and arguments
function calculateArea(width, height) {
  console.log(width * height);
}

function sayThanks(name) {
  console.log("Thank you for your purchase, "+ name + "! We appreciate your business.");
}

calculateArea(10, 6);                     // Arguments added manually
sayThanks("Cole");

const rectWidth = 5;
const rectHeight = 3;
calculateArea(rectWidth, rectHeight);     // Arguments taken from variables
console.log("-----------------------");

// Default parameters
// allow parameters to have a predetermined value in case no argument is passed into the function
function greeting (name = "stranger") {
  console.log(`Hello, ${name}!`)
}
greeting("Nick");    // Nick is the argument
greeting();          // No argument passed. The function uses "stranger" by default.

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs"){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList("water");      // Only one argument is passed, the other two default values will be used
console.log("-----------------------");

// Return
// allows functions to produce an output. We can then save the output to a variable for later use
function monitorCount(rows, columns) {
  return rows * columns;
}
const numOfMonitors = monitorCount(5, 4);
console.log(numOfMonitors);
console.log("-----------------------");

// Helper functions
// use the return value of a function inside another function
function multiplyByNineFifths(number) {
  return number * (9/5);
};
function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};
const celToFar = getFahrenheit(15);
console.log(celToFar);
console.log("-----------------------");

// Funtion expressions
// function expression is often stored in a variable in order to refer to it
const sum = function(a, b) {
  const total = a + b
  return total
}
console.log(sum(2, 2));

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};
console.log(plantNeedsWater('Tuesday'));
console.log("-----------------------");

// Arrow functions          Ref: https://www.codecademy.com/resources/docs/javascript/arrow-functions?page_ref=catalog
// a shorter way to write functions by using the special “fat arrow” () => notation 
// removes the need to type out the keyword function
const substraction = (a, b) => {
  const aMinusB = a - b
  return aMinusB
}
console.log(substraction(6, 3));
console.log("-----------------------");

// Concise Body Arrow Functions
// the most condensed form of the function
const multiply = (a, b) => a * b;
console.log(multiply(4, 2));

const squareNum = num => num * num;
console.log(squareNum(3));

const plantNeedsSun = day => day === "Monday" ? true : false;
console.log(plantNeedsSun("Monday"));
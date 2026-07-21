const radius = 5;
const sideLength = 10;

// import the entire modules_examples_export.js module
const areaFunctions = require("./modules_examples_export.js");

// use the imported circleArea and squareArea methods here
const areaOfCircle = areaFunctions.circleArea(radius);
const areaOfSquare = areaFunctions.squareArea(sideLength);

console.log(areaOfCircle);
console.log(areaOfSquare);

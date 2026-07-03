/*
References:
    - JS Objects: https://www.codecademy.com/resources/docs/javascript/objects
    - JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    - JS Data Types: https://www.codecademy.com/resources/docs/javascript/data-types
    - JS Object Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
    - JS Object Prototypes: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
*/

// Creating Object Literals
let car = {};                 // car is an empty object

// An object literal with two key-value pairs
let spaceship = {
  "Fuel Type": "Diesel",
  numCrew: 5,
  "Active Duty": true,
  homePlanet: "Earth",
  color: "silver"             // when a key doesn't have special characters or spaces, we can omit the " "
};

// Accessing Object Properties
console.log(spaceship["Fuel Type"]);            // Returns "Diesel"
console.log(spaceship.numCrew);                 // Returns 5
console.log(spaceship["Active Duty"]);          // Returns true
console.log(spaceship.color);                   // Returns "silver"

// With bracket notation, you can also use a variable inside the brackets to select the keys of an object, 
// especially helpful when working with functions:
let returnAnyProp = (objectName, propName) => objectName[propName];
console.log(returnAnyProp(spaceship, "homePlanet"));         // Returns "Earth"

// Property Assignment
// If the property already exists on the object, the value will be replaced
// If there was no property with that name, a new property will be added to the object
spaceship.color = "black";
spaceship.mission = "Explore the universe";
console.log(spaceship.color);                   // Returns "black"
console.log(spaceship.mission);                 // Returns "Explore the universe"

// Delete a property from an object using the delete keyword
delete spaceship.mission;
console.log(spaceship.mission);                 // Returns undefined

// Methods
// A function as the property of an object, and can be invoked using dot notation.
// A property is what an object has, a method is what an object does.

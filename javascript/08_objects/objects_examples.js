/*
References:
    - JS Objects: https://www.codecademy.com/resources/docs/javascript/objects
    - JS Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    - JS Data Types: https://www.codecademy.com/resources/docs/javascript/data-types
    - JS Object Methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
    - JS Object Prototypes: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
    - JS Operators: https://www.codecademy.com/resources/docs/javascript/operators
    - JS Loops: https://www.codecademy.com/resources/docs/javascript/loops
    - JS Arrays: https://www.codecademy.com/resources/docs/javascript/arrays
    - for...in syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
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
console.log("--------------------");

/*
Methods
A function as the property of an object, and can be invoked using dot notation.
A property is what an object has, a method is what an object does.
  console is a global JavaScript object and .log() is a method on that object
  Math is also a global JavaScript object, and .floor() is a method on it
*/
let alienShipInvade = {
  invade: function () {   // invade (key) is a method (value) of the alienShip object
    console.log("Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.")
  }
};

// Object methods are invoked by the object’s name with the dot operator, followed by the method name and parentheses
alienShipInvade.invade();

// Methods examples
let retreatMessage = "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";
let alienShipRetreat = {
  retreat: function () {
    console.log(retreatMessage)
  },
  takeOff () {    // ES6 syntax: we can omit the colon and the function keyword
    console.log("Spim... Borp... Glix... Blastoff!")
  }
};
alienShipRetreat.retreat();
alienShipRetreat.takeOff();
console.log("--------------------");

const person = {
  firstName: "Elizabeth",
  lastName: "Harmon",
  age: 22,
  eyeColor: "brown",
  greeting: function () {
    console.log(`Hi, I am ${this.firstName} ${this.lastName}.`);
  },
};
person.greeting();
console.log("--------------------");

/*
Nested Objects
An object might have another object as a property, which in turn could have a property that’s an array of even more objects.
*/
const spaceshipNested = {
  passengers: [{p1: "passenger1"}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: "Sandra", 
      degree: "Computer Engineering", 
      encourageTeam() {
        console.log("We got this!")},
      "favorite foods": ["cookies", "cakes", "candy", "spinach"]
    }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

// Accessing Nested Objects
console.log(spaceshipNested.nanoelectronics["back-up"].battery);       // Returns "Lithium"

// favorite food of captain (the element in the “0th” index of "favorite foods" array)
let capFave = spaceshipNested.crew.captain["favorite foods"][0];
console.log(capFave);

// first passenger (the element in the “0th” index of the spaceship.passengers array)
let firstPassenger = spaceshipNested.passengers[0];
console.log(firstPassenger);
console.log("--------------------");

/*
Pass by Reference
Objects are mutable and are passed by reference, which means that when we pass an object to a function, 
the function can change the properties of that object.
*/
const rocket = {
  homePlanet : "Earth",
  color : "silver"
};
console.log(rocket.color);          // Returns "silver"
console.log(rocket.homePlanet);     // Returns "Earth"
console.log(rocket.type);           // Returns "undefined" because the property does not exist yet

let paintIt = obj => {
  obj.color = "glorious gold"
};

let movingTomars = obj => {
  obj.homePlanet = "Mars";
};

let rocketType = obj => {
  obj.type = "shuttle"              // Adding a new property to the object
};

paintIt(rocket);
movingTomars(rocket);
rocketType(rocket);
 
console.log(rocket.color);          // Returns "glorious gold"
console.log(rocket.homePlanet);     // Returns "Mars"
console.log(rocket.type);           // Returns "shuttle"
console.log("--------------------");

/*
Looping Through Objects
The for...in statement iterates over the enumerable properties of an object, in arbitrary order.
for...in will execute a given block of code for each property in an object.
*/
let spaceshipCrew = {
  crew: {
    captain: { 
      name: "Lily", 
      degree: "Computer Engineering", 
      cheerTeam() { console.log("You got this!") } 
    },
    "chief officer": { 
      name: "Dan", 
      degree: "Aerospace Engineering", 
      agree() { console.log("I agree, captain!") } 
    },
    medic: { 
      name: "Clementine", 
      degree: "Physics", 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: "Shauna", 
      degree: "Conservation Science", 
      powerFuel() { console.log("The tank is full!") } 
    }
  }
}; 

// for...in
for (let crewMember in spaceshipCrew.crew) {
  console.log(`${crewMember}: ${spaceshipCrew.crew[crewMember].name}`);
};

for (let crewMember in spaceshipCrew.crew) {
  console.log(`${spaceshipCrew.crew[crewMember].name}: ${spaceshipCrew.crew[crewMember].degree}`);
};

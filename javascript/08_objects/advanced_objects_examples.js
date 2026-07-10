/*
References:
    - JS Objects: https://www.codecademy.com/resources/docs/javascript/objects
    - JS MDN Objects: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
    - JS MDN this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
    - JS this: https://www.codecademy.com/resources/docs/javascript/this
    - JS destructuring: https://www.codecademy.com/resources/docs/javascript/destructuring
    - JS functions: https://www.codecademy.com/resources/docs/javascript/functions
    - JS methods: https://www.codecademy.com/resources/docs/javascript/methods
    - JS MDN Arrow functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
    - JS MDN Global obeject: https://developer.mozilla.org/en-US/docs/Glossary/Global_object
    - JS conditionals: https://www.codecademy.com/resources/docs/javascript/conditionals
    - JS variables: https://www.codecademy.com/resources/docs/javascript/variables
    - JS destructuring: https://www.codecademy.com/resources/docs/javascript/destructuring
    - MDN’s object instance documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods_of_the_Object_constructor
*/

// The this keyword
// references the calling object, which provides access to the calling object’s properties.
const goat = {
    dietType: "herbivore",
    makeSound() {
        console.log("baaa");
    },
    diet() {
        console.log(this.dietType);
    }
};
goat.makeSound();       // Output: baaa
goat.diet();            // Output: herbivore
console.log("--------------------");

const robot = {
    model: "1E78V2",
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
console.log(robot.provideInfo());
console.log("--------------------");

/*
Arrow functions and this
Arrow functions do not have their own this value.
Instead, they inherit the this value of the enclosing context where they are defined.
*/
const robotTwo = {
    energyLevel: 100,
    checkEnergy: () => {
        console.log(`Energy is currently at ${this.energyLevel}%.`)     // this is not bound to robotTwo, but instead inherits its value from the global scope
    }
};
robotTwo.checkEnergy();                 // Output: Energy is currently at undefined%.
console.log("--------------------");

/*
Privacy
In JavaScript, there is no true way to make properties private.
JavaScript developers follow naming conventions that signal to other developers how to interact with a property.
One common convention is to place an underscore (_) before the name of a property to mean that the property should not be altered.
*/
const bankAccount = {
    _amount: 1000,         // _amount is not intended to be directly manipulated
};
console.log(bankAccount._amount);        // Output: 1000
// Even so, it is still possible to reassign _amount:
bankAccount._amount = 1000000;
console.log(bankAccount._amount);        // Output: 1000000
console.log("--------------------");

// Example of how it affects to change a property that is not intended to be directly manipulated
const robotThree = {
  _energyLevel: 60,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};
robotThree.recharge();                  // Output: Recharged! Energy is currently at 90%.
robotThree._energyLevel = 'high';       // _energyLevel is not intended to be directly manipulated
robotThree.recharge();                  // Output: Recharged! Energy is currently at high30%.
console.log("--------------------");

/*
Getters
methods that get and return the internal properties of an object.
*/
const person = {
    _firstName: "John",
    _lastName: "Doe",
    get fullName() {
        if (this._firstName && this._lastName){
            return `${this._firstName} ${this._lastName}`;
        } else {
            return "Missing a first name or a last name.";
        }
    }
};
// call the getter method:
console.log(person.fullName);                // "John Doe"
// modify the _lastName property to an empty string to get the error message
person._lastName = "";
// call the getter method again:
console.log(person.fullName);                // "Missing a first name or a last name."

const bot = {
    _model: "1E78V2",
    _energyLevel: 100,
    get energyLevel() {
        if (typeof this._energyLevel === "number") {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return "System malfunction: cannot retrieve energy level";
        }
    }
};
// call the getter method:
console.log(bot.energyLevel);
// modifying the _energyLevel property to a string to get the error message
bot._energyLevel = "low";
// call the getter method again:
console.log(bot.energyLevel);
console.log("--------------------");

/*
Setters
methods that set and update the internal properties of an object.
*/
const personTwo = {
    _age: 37,
    set age(newAge){
        if (typeof newAge === "number"){
            this._age = newAge;
        } else {
            console.log("You must assign a number to age");
        }
    }
};
// call the setter method
personTwo.age = 40;
console.log(personTwo._age);            // 40
personTwo.age = "40";                   // "You must assign a number to age"

const botTwo = {
    _model: "1E78V2",
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === "number"){
            return this._numOfSensors;
        } else {
            return "Sensors are currently down."
        }
    },
    set numOfSensors(num) {
        if (typeof num === "number" & num >= 0) {
            this._numOfSensors = num;
        } else {
            console.log("Pass in a number that is greater than or equal to 0");
        }
    }
};
// call the setter method
botTwo.numOfSensors = 100;
console.log(botTwo.numOfSensors);   // 100
botTwo.numOfSensors = "one";        // "Pass in a number that is greater than or equal to 0"
console.log("--------------------");

/*
Factory Functions
functions that return objects. They allow us to create multiple instances of similar objects.
*/
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return { 
        name: name,
        age: age, 
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        } 
    }
};
// create a new monster object
const ghost = monsterFactory("Ghouly", 251, "ectoplasm", "BOO!");
console.log(ghost.name);              // Ghouly
console.log(ghost.age);               // 251
console.log(ghost.energySource);      // ectoplasm
ghost.scare();                        // BOO!
console.log("--------------------");

// create a robot factory function
const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log("Beep boop");
        }
    }
};
// create a new robot object
const tinCan = robotFactory("P-500", true);
console.log(tinCan.model);            // P-500
console.log(tinCan.mobile);           // true
tinCan.beep();                        // Beep boop
console.log("--------------------");

/*
Property Value Shorthand
When the property name and variable name are the same, you can use the property value shorthand to only write the name once.
The following example works exactly the same as the previous factory function:
*/
const robotFactoryTwo = (model, mobile) => {
    return {
        model,
        mobile
    }
};
const megatron = robotFactoryTwo("A-100", true);
console.log(megatron.model);          // A-100
console.log(megatron.mobile);         // true
console.log("--------------------");

/*
Shorthand property name syntax for object creation
Allows creating objects without explicitly specifying the property names (ie. explicitly declaring the value after the key).
Shorthand property names populate an object with a key matching the identifier and a value matching the identifier’s value
*/
const activity = "Surfing";
const beach = { activity };
console.log(beach);                 // { activity: "Surfing" }

const fullName = "Tony Hawk";
const age = 30;
const surfer = { fullName, age };
console.log(surfer);                // { fullName: "Tony Hawk", age: 30 }
console.log("--------------------");

/*
Destructured Assignment
Extract key-value pairs from objects and save them as variables
*/
const vampire = {
    name: "Dracula",
    residence: "Transylvania",
    preferences: {
        day: "stay inside",
        night: "satisfy appetite"
    }
};
// extract the residence property as a variable WITHOUT destructuring
const residence = vampire.residence;
console.log(residence);                 // Transylvania
// extract the name property as a variable WITH destructuring
const { name } = vampire;
console.log(name);                      // Dracula
// use destructured assignment to grab nested properties of an object:
const { day } = vampire.preferences; 
console.log(day);                       // "stay inside"
console.log("--------------------");

// Built-in Object Methods
// Object to use for the different built-in object methods
const gadget = {
    model: "SAL-1000",
    mobile: true,
    madeOf: "Steel",
    energyLevel: 75
};

// Object.keys() - returns an array of the keys of an object
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
const gadgetKeys = Object.keys(gadget);
console.log(gadgetKeys);
console.log("----------");

// Object.values() - returns an array of the values of an object
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
const gadgetValues = Object.values(gadget);
console.log(gadgetValues);
console.log("----------");

// Object.entries() - returns an array of the key-value pairs of an object
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
const gadgetEntries = Object.entries(gadget);
console.log(gadgetEntries);
console.log("----------");

// Object.assign() - copies the properties of one object into another object
// Ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
const newGadget = Object.assign({laserBlaster: true, voiceRecognition: true}, gadget);
console.log(newGadget);

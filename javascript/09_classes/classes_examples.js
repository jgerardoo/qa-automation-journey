/*
References:
    - JS objects: https://www.codecademy.com/resources/docs/javascript/objects
    - JS methods: https://www.codecademy.com/resources/docs/javascript/methods
    - JS sets: https://www.codecademy.com/resources/docs/javascript/sets
*/

/*
-- Classes --
A tool that developers use to produce similar objects quickly
Instead of using the object literal syntax for every new [object] we need in our program, we can create
an [object] class that serves as a template for creating new [objects].
For each new [object], we can provide its values.
*/
class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }
    get name() {
        return this._name;
    }
    get behavior() {
        return this._behavior;
    }   
    incrementBehavior() {
        this._behavior ++;
    }
};

// Generate a new object from the Dog class
const halley = new Dog("Halley");
console.log(halley);
console.log(halley.name);               // Print object.name value to console
console.log(halley.behavior);           // Print object.behavior value to console
halley.incrementBehavior();             // Add one to behavior (run the incrementBehavior) method
console.log(halley.behavior);           // Print object.behavior value to console
console.log("--------------------");

/*
-- Constructor --
JS calls the .constructor() method every time it creates a new instance of a class.
Inside the .constructor() method, we use the "this" keyword.
In the context of a class, "this" refers to an instance of that class.
*/
class Surgeon {
    constructor (name, department) {
        this.name = name;
        this.department = department;
    }
};

/*
-- Instance --
Is an object that contains the property names and methods of a class, but with unique property values.
We use the "new" keyword to create an instance of our class.
The "new" keyword calls the constructor, executes the code inside of it, and then returns the new instance.
*/
const surgeonJames = new Surgeon("James Smith", "Orthopedics");
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
console.log(surgeonJames.name);
console.log(surgeonJames.department);
console.log(surgeonRomero);
console.log("--------------------");

/*
-- Methods (in classes) --
Class method and getter syntax is the same as it is for objects, except we cannot include commas between methods.
When generating methods with the same name as the parameters in the constructor, we need to prepend
the properties with an underscore (_) to indicate they should not be accessed directly.
*/
class Hospital {
    constructor (name, speciality) {
        this._name = name;
        this._speciality = speciality;
        this._activeFloors = 10;
    }
    get name() {
        return this._name;
    }
    get department() {
        return this._speciality;
    }
    get numberOfFloors() {
        return this._activeFloors;
    }
    floorOutOfService(floorsOff) {
        this._activeFloors -= floorsOff;
    }
};

/*
-- Method calls --
Using the Methods to access and manipulate data from our class instances.
The syntax for calling methods and getters on an instance is the same as calling them on
an object: append the instance with a period, then the property or method name.
*/
let metropolitan = new Hospital("Metropolitan", "Pediatric");   // Create hospital named Metropolitan
console.log(metropolitan.name);                                 // Logs the name of the metropolitan instance
metropolitan.floorOutOfService(2);                              // Reduce active floors by 2
console.log(metropolitan.numberOfFloors); 		                // Logs 8 to the console

let central = new Hospital("Central", "Cardiology");            // Create hospital named Central
console.log(central.name);                                      // Logs the name of the central instance
console.log(central.numberOfFloors);                            // Logs 10 to the console
console.log("--------------------");

/*
-- Inheritance --
The child classes inherit the properties and methods from their parent class.

In this example, instead of having one class for each employee type (with same properties and methods),
we can create a HospitalEmployee superclass and other classes will inherit the properties and methods from their parent class.
*/
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }
    get remainingVacationDays() {
        return this._remainingVacationDays;
    }   
    takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
    }
};

class Nurse extends HospitalEmployee {  // "extends" makes the properties and methods of the parent class available inside the child class.
    constructor(name, certifications) {
        super(name);                    // "super" calls the constructor of the parent class.
        this._certifications = certifications;  // child classes can contain their own properties, getters, setters, and methods.
    }
    get certifications() {
        return this._certifications;
    }
    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
console.log(nurseOlynyk);                           // Logs the instance of the class
console.log(nurseOlynyk._name);                     // Logs the instance.name
console.log(nurseOlynyk._remainingVacationDays);    // Logs the default value for instance._remainingVacationDays

nurseOlynyk.takeVacationDays(5);                    // Reduce 5 to instance_remainingVacationDays
console.log(nurseOlynyk._remainingVacationDays);    // Logs the new value for instance._remainingVacationDays

nurseOlynyk.addCertification("Genetics");           // Adds "Genetics" to instance._certifications list
console.log(nurseOlynyk.certifications);            // Logs the full instance._certifications list
console.log(nurseOlynyk._certifications[0]);        // Logs the 1st value of the instance._certifications list
console.log(nurseOlynyk._certifications[1]);        // Logs the 2nd value of the instance._certifications list
console.log(nurseOlynyk._certifications[2]);        // Logs the 3rd value of the instance._certifications list
console.log("--------------------");

/*
-- Static methods --
Functions defined directly on a class rather than on instances of that class.
Call them using the class name itself. Commonly used to create utility or helper functions for an application.
*/
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(5, 3));              // static method called directly on the class
const myCalc = new Calculator();                // a new instance of the class
// console.log(myCalc.add(5, 3));               // TypeError: myCalc.add is not a function
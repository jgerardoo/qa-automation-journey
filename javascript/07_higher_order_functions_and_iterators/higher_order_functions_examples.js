/*
Higher Order Functions (HOF) references:
    - JS functions: https://www.codecademy.com/resources/docs/javascript/functions
    - JS variables: https://www.codecademy.com/resources/docs/javascript/variables
    - JS iterators: https://www.codecademy.com/resources/docs/javascript/iterators
    - MDN iterators: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Iterator

Functions as Data:
JavaScript functions behave like any other data type in the language:
    - We can assign functions to variables
    - We can reassign functions to new variables.
In JavaScript, functions are first-class objects. This means that, like other objects we’ve encountered,
JavaScript functions can have properties and methods.
Since functions are a type of object, they have properties such as .length and .name, and methods such as .toString().
*/
const announceThatIAmDoingImportantWork = () => {
    console.log("I'm doing very important work!");
};

const busy = announceThatIAmDoingImportantWork;
busy(); // This function call barely takes any space!
console.log("----------");

let plusFive = (number) => {
    return number + 5;  
};
console.log(plusFive(3));       // 8
let f = plusFive;               // f is assigned the value of plusFive
// Since f has a function value, it can be invoked. 
console.log(f(10));             // 15
console.log("----------");

/*
Functions as Parameters:
A higher-order function is a function that either accepts functions as parameters, returns a function, or both!
We call functions that get passed in as parameters callback functions.
Callback functions get invoked during the execution of the higher-order function.

In this example we have a function, addTwo(), that adds 2 to whatever is passed into it.
Below that, we’ve created what will be a higher-order function, checkConsistentOutput().
The purpose of the higher-order function will be to check the work of addTwo().
*/
const addTwo = num => {
    return num + 2;
}

const checkConsistentOutput = (func, val) => {
    const checkA = val + 2;
    const checkB = func(val);
    if (checkA === checkB) {
        return checkB;
    } else {
        return "inconsistent results";
    }
}

console.log(checkConsistentOutput(addTwo, 2));      // Returns '4'

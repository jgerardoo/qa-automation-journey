// Conditionals         Ref: https://www.codecademy.com/resources/docs/javascript/conditionals

// if statement
// checks a condition and runs certain code only if that condition is true
let sale = true;

if (sale) {
    console.log("Time to buy!");
}
console.log("--------------------");

// else statement
// provides an alternative block of code to run when the condition in the if statement is false.
let isLoggedIn = false;

if (isLoggedIn) {
	console.log("User is logged in");
} else {
	console.log("User is not logged in");
}
console.log("--------------------");

// else if statement
// allows you to check multiple conditions in sequence
// if the first condition is false, it checks the next one, and so on
let temperature = 75;

if (temperature > 80) {
    console.log("It's hot outside!");
} else if (temperature >= 60 && temperature <= 80) {
    console.log("The weather is nice.");
} else {
    console.log("It's cold outside!");
}
console.log("--------------------");

// comparison operators         Ref: https://www.codecademy.com/resources/docs/javascript/operators
// used to compare values and return a boolean (true or false)
// less than: <
// greater than: >
// less than or equal to: <=
// greater than or equal to: >=
// is equal to: ===
// is not equal to: !==
let a = 10;
let b = 20;

console.log(a > b);   // Output: false
console.log(a < b);   // Output: true
console.log(a >= 10); // Output: true

let hungerLevel = 7;
if (hungerLevel > 7) {
    console.log('Time to eat!');
} else {
    console.log('We can eat later!');
}
console.log("--------------------");

// logical operators
// and operator "&&"
// or operator "||"
// not operator (bang operator) "!"
let mood = "sleepy";
let tirednessLevel = 6;

if (mood === "sleepy" || tirednessLevel > 8) {
    console.log("time to sleep");
} else {
    console.log("not bedtime yet");
}
console.log("--------------------");

// truthy and falsy
// In JavaScript, values can be considered "truthy" or "falsy" when evaluated in a boolean context (like in an if statement).
// Falsy values include: false, 0, "", null, undefined, and NaN. All other values are considered truthy.
let wordCount = 0;

if (wordCount) {
    console.log("Great! You've started your work!");
} else {
    console.log("Better get to work!");
}


let favoritePhrase = '';

if (favoritePhrase) {
    console.log("This string doesn't seem to be empty.");
} else {
    console.log("This string is definitely empty.");
}
console.log("--------------------");

// truthy and falsy assignment (short-circuit evaluation)
// You can use the logical OR operator (||) to assign a default value to a variable if the original value is falsy.
let username = "";
let defaultName = "Guest";

let displayName = username || defaultName;      // this usecase is also referred to as short-circuit evaluation
console.log(displayName);                       // Output: "Guest"
console.log("--------------------");

// ternary operator
// a shorthand way to write an if-else statement
// syntax: condition ? expressionIfTrue : expressionIfFalse
let isNightTime = false;
isNightTime ? console.log("Turn on the lights!") : console.log("Turn off the lights!");

let loveMessage = "Love";
loveMessage === "Love" ? console.log("I love you!") : console.log("I don't love you!");
console.log("--------------------");

// switch statement
// allows you to compare a value against multiple cases and execute different code based on which case matches
let athleteFinalPosition = "second place";

switch (athleteFinalPosition) {
    case "first place":
        console.log("You get the gold medal!");
        break;
    case "second place":
        console.log("You get the silver medal!");
        break;
    case "third place":
        console.log("You get the bronze medal!");
        break;
    default:
        console.log("No medal awarded.");
        break;
}
console.log("--------------------");

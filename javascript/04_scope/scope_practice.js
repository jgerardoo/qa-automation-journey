/*
=======================================================
Learn JavaScript - Codecademy | Lesson 4: Scope
Practice exercise from the course lesson concepts.
Project practice: Training Days
    Concepts: Scope in JavaScript
=======================================================

In this project you will make the Training Days program more maintainable and less error-prone by fixing variable scopes.
*/

const name = "Nala";

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) return "Marathon";
    if (random === 1) return "Triathlon";
    return "Pentathlon";
};

const getTrainingDays = event => {
    let days = 0;
    if (event === "Marathon") return 50;
    if (event === "Triathlon") return 100;
    if (event === "Pentathlon") return 200;
    return days;
};

const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(name, event);
logTime(name, days);
console.log("-----------------------------------");

// Another competitor
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = "Warren";
logEvent(name2, event2);
logTime(name2, days2);
console.log("-----------------------------------");
console.log("-----------------------------------");




/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Garage Gym Session Logger
==================================================================================

You're building a program that logs workout sessions for different athletes.
If variables aren't scoped correctly, sessions from different athletes will bleed into each other and produce wrong results.

Task 1. Declare a single global const named GYM_NAME and set it to "Houston Iron Gym".
This is the only variable that belongs in global scope for this entire program.
*/
const GYM_NAME = "Houston Iron Gym";

/*
Task 2. Using arrow function syntax, create a function named calculateCaloriesBurned that takes three parameters:
    - weightLbs
    - durationMinutes
    - intensity (a number 1 through 3).

Inside the function:
    - Declare a local variable MET (Metabolic Equivalent). Use an if / else if / else block to set it:
        - intensity === 1: MET = 3.5
        - intensity === 2: MET = 7
        - intensity === 3: MET = 10
    - Declare a local variable weightKg and convert weightLbs to kilograms by dividing by 2.205
    - Calculate calories burned using this formula and store in a local variable: calories = (MET * weightKg * durationMinutes) / 60
    - Return Math.round(calories)
*/
const calculateCaloriesBurned = (weightLbs, durationMinutes, intensity) => {
    let MET;
    if (intensity === 1) {
        MET = 3.5;
    } else if (intensity === 2) {
        MET = 7;
    } else {
        MET = 10;
    };
    /* BONUS: Block scope
    if (intensity === 3) {
    const warningMessage = "High intensity: make sure you're warmed up!";
    console.log(warningMessage);
    };
    console.log(warningMessage) -----> Uncaught ReferenceError ReferenceError: warningMessage is not defined (warningMessage is block-scoped inside the IF statement).
    */
    const weightKg = weightLbs / 2.205;
    const calories = (MET * weightKg * durationMinutes) / 60;
    return Math.round(calories);
};

/*
Task 3. Using a function expression, create a function named getSessionRating that takes one parameter calories.
Using if / else if / else, return a rating string:
    - 500 or above: "Beast Mode"
    - 300 to 499: "Solid Session"
    - 150 to 299: "Good Effort"
    - Below 150: "Light Work"
*/
const getSessionRating = function(calories) {
    if (calories >= 500) return "Beast Mode";
    if (calories >= 300) return "Solid Session";
    if (calories >= 150) return "Good Effort";
    return "Light Work";
};

/*
Task 4. Using a function declaration, create the main orchestrator function logSession that takes four parameters:
    - athleteName
    - weightLbs
    - durationMinutes
    - intensity

Inside the function:
    - Declare a local variable calories set to the result of calling calculateCaloriesBurned
    - Declare a local variable rating set to the result of calling getSessionRating, passing calories directly as the argument
    - Use console.log and string interpolation to print: [GYM_NAME] | [athleteName] | Calories: [calories] | Rating: [rating]
*/
function logSession(athleteName, weightLbs, durationMinutes, intensity) {
    const calories = calculateCaloriesBurned(weightLbs, durationMinutes, intensity);
    const rating = getSessionRating(calories);
    console.log(`${GYM_NAME} | ${athleteName} | Calories: ${calories} | Rating: ${rating}`);
};

// Task 5. Call logSession for different athletes with different weights, durations, and intensities.
logSession("Alice", 150, 60, 3);    // Beast Mode
logSession("Charlie", 200, 45, 2);  // Solid Session
logSession("Kevin", 170, 30, 2);    // Good Effort
logSession("Bob", 180, 30, 1);      // Light Work

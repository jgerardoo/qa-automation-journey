/*
=======================================================
Learn JavaScript - Codecademy | Lesson 3: Functions
Practice exercise from the course lesson concepts.
Project practice 1: Rock, paper, or scissors
    Concepts: control flow, build decision-making
=======================================================

Given a certain input you want to return a certain output. If this than that.
The possible outcomes are:
    - Rock destroys scissors.
    - Scissors cut paper.
    - Paper covers rock.
    - If there’s a tie, then the game ends in a draw.

Our code will break the game into four parts:
    1. Get the user’s choice.
    2. Get the computer’s choice.
    3. Compare the two choices and determine a winner.
    4. Start the program and display the results.
*/

// Task 1. Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.
// Task 2. Utilize JavaScript’s .toLowerCase() method to make the userInput all lowercase.
// Task 3. Make sure the userInput is either 'rock', 'paper', or 'scissors'. If it does, then return the userInput. If not, use console.log() to print an error message
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput;
    } else {
        return "Input not valid";
    }
};

// Task 4. Test the function by calling it with valid and invalid input, and printing the results to the console.
// console.log(getUserChoice("Paper"));
// console.log(getUserChoice("ROCK"));
// console.log(getUserChoice("wood"));
// const userChoice = getUserChoice("Scissors");       // Set the userChoice
// console.log(`The user choose: ${userChoice}`);      // Print the userChoice
// console.log("------------------------------");

/*
Task 5. Create a new function named getComputerChoice with no parameters.
Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2.
Then, depending on the number, return either 'rock', 'paper', or 'scissors'.
*/
function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice === 0) {
        return "rock";
    } else if (cpuChoice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
};

// Task 6. Test the function by calling it multiple times and printing the results to the console
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// const computerChoice = getComputerChoice()           // Set the cpuChoice
// console.log(`The CPU choose: ${computerChoice}`);    // Print the cpuChoice
// console.log("------------------------------");

/*
Task 7. Create a function named determineWinner that takes two parameters named userChoice and computerChoice.
    This function will compare the two choices played and then return if the human player won, lost, or tied
Task 8. If the game is not a tie, you’ll need to determine a winner when userChoice is "rock".
Task 9. If the game is not a tie, you’ll need to determine a winner when userChoice is "paper".
Task 10. If the game is not a tie, you’ll need to determine a winner when userChoice is "scissors".
*/
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "This was a tie!";
    }
    if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "The CPU won this game!";
        } else {
            return "The User won this game!";
        }
    }
    if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "The CPU won this game!";
        } else {
            return "The User won this game!";
        }
    }
    if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "The CPU won this game!";
        } else {
            return "The User won this game!";
        }
    }
};
// Task 11. Test the determineWinner function
// console.log(determineWinner(userChoice, computerChoice));
// console.log("------------------------------");

/*
Task 12. Play the game and log the results. Create a function named playGame.
Inside the playGame() function, create a variable named userChoice set equal to the result of calling getUserChoice(), passing in either "rock", "paper", or "scissors" as an argument.
Create another variable named computerChoice, and set it equal to the result of calling getComputerChoice().
Under both of these variables, use console.log() to print them to the console.
*/
function playGame() {
    const userChoice = getUserChoice("Scissors");
    const computerChoice = getComputerChoice();
    console.log(`The user choise is ${userChoice}. The CPU choice is ${computerChoice}.`);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();
console.log("------------------------------");
console.log("------------------------------");



/*
=======================================================
Learn JavaScript - Codecademy | Lesson 3: Functions
Practice exercise from the course lesson concepts.
Project practice 2: Sleep debt calculator
    Concepts: control flow, build decision-making
=======================================================

The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

Task 1. The first problem to solve is determining how many hours of sleep you get each night of the week.
    You can create a function that returns any given night’s number of hours of rest.
    Instead of writing seven different functions (one for each day of the week), let’s write one function with a parameter for the day.
    Create a function named getSleepHours with a single parameter named day
Task 2. The function should accept a day as an argument and return the number of hours you slept that night.
    For instance, if you got 8 hours of sleep on Monday night, calling getSleepHours('monday') should return 8.
    Use an if/else or switch statement to implement this
*/
const getSleepHours = function(day) {
    switch (day) {
        case "mon":
            return 8;
            break;
        case "tue":
            return 7;
            break;
        case "wed":
            return 6;
            break;
        case "thu":
            return 7;
            break;
        case "fri":
            return 5;
            break;
        case "sat":
            return 10;
            break;
        case "sun":
            return 7;
            break;
        default:
            return "Error. Day not valid!";
    }
};

// Task 3. Test the function by calling it multiple times and printing the results to the console.
// console.log(getSleepHours("mon"))
// console.log(getSleepHours("wed"))
// console.log(getSleepHours("sun"))

/*
Task 4. Get the total sleep hours that you actually slept, create a new function named getActualSleepHours that takes no parameters.
Task 5. Call the getSleepHours() function for each day of the week. Add the results together and return the sum using an implicit return
*/
const getActualSleepHours = function() {
    return  getSleepHours("mon") +
            getSleepHours("tue") +
            getSleepHours("wed") +
            getSleepHours("thu") +
            getSleepHours("fri") +
            getSleepHours("sat") +
            getSleepHours("sun");
};

/*
Task 6. Get the ideal sleep hours that you prefer. Create a function named getIdealSleepHours with no parameters.
        Inside the function, declare a variable named idealHours and set its value to your ideal hours per night.
        Then return the idealHours multiplied by 7.
        You’ll want to multiply by 7 to get the total hours you prefer per week.
*/
const getIdealSleepHours = function() {
    const idealHours = 8;
    return idealHours * 7;
};

// Task 7. Test your two new functions by calling them and printing the results to the console
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

/*
Task 8. Calculate sleep debt. Create a function named calculateSleepDebt with no parameters.
        Inside of its block, create a variable named actualSleepHours set equal to the getActualSleepHours() function call.
        Then, create another variable named idealSleepHours, set equal to the getIdealSleepHours() function call.
Task 9. Write a few if/else statements to output the result to the console based on the actual vs ideal sleep hours
Task 10. To make this calculator more helpful, add the hours the user is over or under their ideal sleep time in each log statement in calculateSleepDebt()
*/
const calculateSleepDebt = function() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const sleepDebt = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log(`You slept ${getIdealSleepHours()}, the perfect amount of sleep!`);
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`You slept ${sleepDebt} hours more than needed.`);
    } else {
        console.log(`You are missing ${Math.abs(sleepDebt)} hours of sleep this week. You should get some rest.`);
    };
};

// Task 11. Start the program by calling the calculateSleepDebt() function.
calculateSleepDebt();
console.log("------------------------------");
console.log("------------------------------");


/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Houston Astros Game Day Tracker
==================================================================================

A program that takes a player's name and their stats from a single game, evaluates their performance, and prints a postgame summary.

Task 1. Using arrow function syntax, create a function named formatPlayerName that takes a single parameter name.
        Inside, use .toLowerCase() and then return the name with the first letter capitalized. For now, you can assume the name is a single word.
*/
const formatPlayerName = name => {
    const playerName = name.toLowerCase();
    return playerName[0].toUpperCase() + playerName.slice(1);
};
// Testing the function:    console.log(formatPlayerName("jOHN"));

/*
Task 2. Using a function expression, create a function named getPerformanceLabel that takes a single parameter battingAverage.
Using an if / else if / else block, return a label string based on the value:
    .300 or above: "Elite"
    .250 to .299: "Solid"
    .200 to .249: "Average"
    Below .200: "Struggling"
*/
const getPerformanceLabel = function(battingAverage) {
    if (battingAverage >= .300) {
        return "Elite";
    } else if (battingAverage >= .250) {
        return "Solid";
    } else if (battingAverage >= .200) {
        return "Average";
    } else {
        return "Struggling";
    };
};
// Testing the function:    console.log(getPerformanceLabel(.249));

/*
Task 3. Using a function declaration, create a function named calculateBattingAverage that takes two parameters: hits and atBats.
Return the result of dividing hits by atBats. Round the result to three decimal places using Math.round() and some multiplication trick
(think about what multiplying and dividing by 1000 does).
*/
function calculateBattingAverage(hits, atBats) {
    const batAvg = hits / atBats;
    return Math.round((batAvg) * 1000) / 1000;
};
// Testing the function:    console.log(calculateBattingAverage(5, 10));

/*
Task 4. Using a function declaration, create the main orchestrator function named generateGameSummary.
It should take three parameters: rawName, hits, and atBats.
    Call formatPlayerName and store the result
    Call calculateBattingAverage passing hits and atBats, and store the result
    Call getPerformanceLabel passing the batting average result directly as the argument (no intermediate variable, pass the function call itself as the argument)
    Use console.log and string interpolation to print: [Name] | AVG: .[average] | Rating: [label]
*/
function generateGameSummary(rawName, hits, atBats, homeRuns) {
    const playerName = formatPlayerName(rawName);
    const playerBatAvg = calculateBattingAverage(hits, atBats);
    const playerPerf = getPerformanceLabel(calculateBattingAverage(hits, atBats));
    if (homeRuns > 0) {
        console.log(`${playerName} | AVG: ${playerBatAvg} | Rating: ${playerPerf} | HR: ${homeRuns}`);
    } else {
        console.log(`${playerName} | AVG: ${playerBatAvg} | Rating: ${playerPerf}`);
    };
};

// Task 5. Call generateGameSummary three times with different players and stats to test all four performance labels.
// At least one call should trigger "Elite" and one should trigger "Struggling".
generateGameSummary("esteban", 12, 39, 5);
generateGameSummary("caRLos", 6, 23, 1);
generateGameSummary("gABRIEL", 4, 19, 0);
generateGameSummary("Sergio", 23, 120, 0);

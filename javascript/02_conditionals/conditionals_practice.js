/*
=======================================================
Learn JavaScript - Codecademy | Lesson 2: Conditionals
Practice exercise from the course lesson concepts.
Project practice 1: Magic 8 Ball
    Concepts: control flow, build decision-making
=======================================================

The user will be able to input a question, and then our program will output a random fortune
*/

// Task 1 - Define a variable called userName that is set to an empty string.
let userName = "";

// Task 2 - Create a ternary expression that decides what to do if the user enters a name or not
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

// Task 3 - Create a variable named userQuestion. The value of the variable should be a string that is the question the user wants to ask the Magic Eight Ball
let userQuestion = "Am I going to win the lottery?";

// Task 4 - Write a console.log() for the userQuestion, stating what was asked
console.log(`Question: ${userQuestion}`);

// Task 5 - Create a variable randomNumber and generate a random number between 0 and 7 for its value
let randomNumber = Math.floor(Math.random() * 8);

// Task 6 - Create a variable named eightBall, and set it equal to an empty string
let eightBall = ""

/*
Task 7 - Create a control flow that takes in the value of randomNumber and then assigns eightBall to a reply that a Magic Eight Ball would return.
Here are 8 Magic Eight Ball phrases that we’d like to save to the variable eightBall:
1. "It is certain"
2. "It is decidedly so"
3. "Reply hazy try again"
4. "Cannot predict now"
5. "Do not count on it"
6. "My sources say no"
7. "Outlook not so good"
8. "Signs point to yes"
*/
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;
  case 1:
    eightBall = "It is decidedly so";
    break;
  case 2:
    eightBall = "Reply hazy try again";
    break;
  case 3:
    eightBall = "Cannot predict now";
    break;
  case 4:
    eightBall = "Do not count on it";
    break;
  case 5:
    eightBall = "My sources say no";
    break;
  case 6:
    eightBall = "Outlook not so good";
    break;
  case 7:
    eightBall = "Signs point to yes";
    break;
}

// Task 8 - Print the Magic Eight Ball’s answer
console.log(`Answer: ${eightBall}`);
console.log("----------------------------------------");

/*
=======================================================
Learn JavaScript - Codecademy | Lesson 2: Conditionals
Practice exercise from the course lesson concepts.
Project practice 2: Race Day
    Concepts: control flow, build decision-making
=======================================================

Write a program that will register runners for the race and give them instructions on race day.
As a timeline, registration would look like this:
    9:30am - Adult and registered early
    11:00am - Adult and registered late
    12:30pm - All youth

There are adult runners (over 18 years of age) and youth runners (under 18 years of age).
They can register early or late. Runners are assigned a race number and start time based on their age and registration.
Race number:
    - Early adults receive a race number at or above 1000.
    - All others receive a number below 1000.
Start time:
    - Adult registrants run at 9:30 am or 11:00 am.
        - Early adults run at 9:30 am.
        - Late adults run at 11:00 am.
    - Youth registrants run at 12:30 pm (regardless of registration).
But we didn’t plan for runners that are exactly 18! We’ll handle that by the end of the project.
*/

// Task 1 - Create a variable raceNumber and set it to a random number between 0 and 999.
let raceNumber = Math.floor(Math.random() * 1000);

// Task 2 - Create a variable that indicates whether a runner registered early or not.
// Set it equal to a Boolean value. You’ll change this later as you test different runner conditions
let isEarly = true;

// Task 3 - Create a variable for the runner’s age and set it equal to a number.
// You’ll change this later as you test different runner conditions
let runnerAge = 19;

// Task 4 - Create a control flow statement that checks whether the runner is an adult AND registered early.
// Add 1000 to their raceNumber if this is true
if (runnerAge > 18 && isEarly === true) {
  raceNumber += 1000
}

/*Task 5 - Create a separate control flow statement that will check age and registration time to determine race time.
Runners over 18 who registered early: they will race at 9:30 am. Include their raceNumber
Runner is over 18 AND did not register early: they will race at 11:00am. Include their raceNumber
People who are under 18 (regardless of registration): they will race at 12:30 pm. Include their raceNumber.
Runners exactly 18 years old: runner to see the registration desk
*/
if (runnerAge > 18 && isEarly === true) {
  console.log(`Your race number is: ${raceNumber} and you will race at 9:30 am.`);
} else if (runnerAge > 18 && isEarly === false) {
  console.log(`Your race number is: ${raceNumber} and you will race at 11:00 am.`);
} else if (runnerAge < 18) {
  console.log(`Your race number is: ${raceNumber} and you will race at 12:30 pm.`);
} else {
  console.log("You need to see the registration desk");
}

console.log("----------------------------------------");

/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Houston Cinema Ticket Pricing System
==================================================================================

A local Houston movie theater needs a program to calculate a customer's ticket price and print their order summary.

Pricing rules:
    - Children (under 13): $8
    - Seniors (65 and over): $10
    - Adults (everyone else): $15
    - Members get $3 off any ticket
    - Matinee shows (before 6pm) get an additional $2 off

Task 1: Create the following variables. Think carefully about const vs let for each
    - customerName set to any name string
    - customerAge set to a number
    - isMember set to a Boolean
    - showHour set to a number representing the hour in 24h format (e.g. 14 = 2pm, 19 = 7pm)
    - dayNumber set to a number between 0 and 6 (0 = Sunday, 6 = Saturday)
    - ticketPrice set to 0
*/
const customerName = "Movie Fan";
const customerAge = 13;
const isMember = true;
const showHour = 17;
const dayNumber = 6;
let ticketPrice = 0;

// Task 2: Use a ternary to greet the customer.
// If customerName is not an empty string, log Welcome, [name]!. Otherwise log Welcome, valued guest!
customerName ? console.log(`Welcome, ${customerName}!`) : console.log("Welcome, valued guest!");

/*
Task 3: Write an if / else if / else block that sets ticketPrice based on customerAge:
    - Under 13: 8
    - 65 or older: 10
    - Everyone else: 15
*/
if (customerAge < 13) {
    ticketPrice = 8;
} else if (customerAge >= 65) {
    ticketPrice = 10;
} else {
    ticketPrice = 15;
}

// Task 4: If the customer is a member, subtract 3 from ticketPrice.
if (isMember) {
    ticketPrice -= 3;
}

// Task 5: If the show is a matinee (before 6pm, meaning showHour is less than 18), subtract 2 from ticketPrice.
if (showHour < 18) {
    ticketPrice -= 2;
}

/*
Task 6: Write a switch statement on dayNumber that logs a concession recommendation for each day.
Group Saturday and Sunday together using fall-through (two case labels, one block, one break) since the weekend recommendation is the same.
Every other day gets its own message. Use a default for anything unexpected
*/
switch (dayNumber) {
    case 1:
        console.log("Monday: Popcorn and sodas are 20% off!");
        break;
    case 2:
        console.log("Tuesday: Taco Tuesday at the concession stand with special discounts!");
        break;
    case 3:
        console.log("Wednesday: Special animated movie showing!");
        break;
    case 4:
        console.log("Thursday: Trivia night with prizes at the concession stand!");
        break;
    case 5:
        console.log("Friday: Late-night showings with exclusive snacks!");
        break;
    case 0:
    case 6:
        console.log("Weekend: Special deals for movie lovers!");
        ticketPrice += 1;           // Weekend surcharge
        break;
    default:
        console.log("Invalid day number.");
        break;
}

// Task 7: Use console.log and string interpolation to print: [name], your ticket price is $[price].
console.log(`${customerName}, your ticket price is $${ticketPrice}.`);

/*
Bonus: Weekend tickets (Saturday or Sunday) have a $1 surcharge.
Use the || operator inside a single if statement to check for this, and add 1 to ticketPrice if true.
This should go between Tasks 5 and 6 so the final log in Task 7 reflects it.

Adding the bonus solution here but I created a simpler version of it in the switch statement for Saturday and Sunday above.
This is just to show how it can be done with an if statement and logical OR operator.
if (dayNumber === 0 || dayNumber === 6) {
    ticketPrice += 1;
}
*/
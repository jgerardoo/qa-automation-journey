/*
======================================================================
Learn JavaScript - Codecademy | Lesson 1: Introduction to JavaScript
Practice exercise from the course lesson concepts.
Project practice 1: Kelvin Weather
    Concepts: variables and printing to the console
======================================================================

Use JavaScript to convert Kelvin to Celsius, and then to Fahrenheit:
    - 283 K converts to 10 °C, which converts to 50 °F.
    - Convert Kelvin to Celsius by subtracting 273 from the kelvin variable.
    - Convert Celsius to Fahrenheit by multiplying the celsius variable by 9/5, then adding 32.
    - Convert Celsius to the Newton scale using the equation Newton = Celsius * (33/100)
*/

// Create a variable named kelvin, and set it equal to 293.
// This value will stay constant. Choose the variable type with this in mind
const kelvin = 293;

// Convert Kelvin to Celsius. Store the result in another variable, named celsius
const celsius = kelvin - 273;

// Calculate Fahrenheit, then store the answer in a variable named fahrenheit.
// Choose the variable type that allows you to change its value
let fahrenheit = celsius * (9/5) + 32;

// Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature.
// Save the result to the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);

// Use console.log and string interpolation to log the temperature in fahrenheit to the console
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// Bonus tasks
// Convert celsius to the Newton scale.
let newton = celsius * (33/100);

// Round down the Newton temperature using the .floor() method
newton = Math.floor(newton);

// Use console.log() and string interpolation to log the temperature in Newton to the console
console.log(`The temperature is ${newton} degrees newton`);
console.log("--------------------------------------------");


/*
======================================================================
Learn JavaScript - Codecademy | Lesson 1: Introduction to JavaScript
Practice exercise from the course lesson concepts.
Project practice 2: Dog Years
    Concepts: variables and strings
======================================================================

Use JavaScript to convert your human age into dog years using the following logic:
    - The first two years of a dog’s life count as 10.5 dog years each.
    - Each year following equates to 4 dog years
*/

// Task 1 - Create a variable named myAge, and set it equal to your age as a number
const myAge = 35;

// Task 2 - Create a variable named earlyYears and save the value 2 to it. The value saved to this variable will change
let earlyYears = 2;

// Task 3 - Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears
earlyYears *= 10.5;

// Task 4 - Since we already accounted for the first two years, take the myAge variable, and subtract 2 from it.
// Set the result equal to a variable called laterYears. We’ll be changing this value later
let laterYears = myAge - 2;

// Task 5 - Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years.
// Use the multiplication assignment operator to multiply and assign in one step.
laterYears *= 4;

// Task 6 - Print earlyYears and laterYears to the console
console.log(earlyYears);
console.log(laterYears);

// Task 7 - Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
const myAgeInDogYears = earlyYears + laterYears;

// Task 8 - Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
let myName = 'Jesse Varela';
myName = myName.toLowerCase();

// Task 9 - Write a console.log() statement that displays your name and age in dog years. Use string interpolation to display the value
console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
console.log("--------------------------------------------");

/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Pizza Party Budget Planner
==================================================================================

Your friends are coming over to watch the Astros game and you're ordering pizza.
You know how many people are showing up, how many slices each person typically eats,
how many slices come in a pizza, and the price per pie.
Your job is to figure out exactly how many pizzas to order and what each person owes

Setup:
- Create a variable named guestsArriving and set it to 8. This number won't change.
- Create a variable named slicesPerPerson and set it to 3. This also won't change.
- Create a variable named slicesPerPizza and set it to 8. Same deal.
- Create a variable named pricePerPizza and set it to 12.99. Same deal.
*/
const guestsArriving = 8;
const slicesPerPerson = 3;
const slicesPerPizza = 8;
const pricePerPizza = 12.99;

/*
Calculations:
1. Calculate the total number of slices needed by multiplying guestsArriving by slicesPerPerson.
Store this in a variable named totalSlicesNeeded.
2. Calculate how many pizzas you need by dividing totalSlicesNeeded by slicesPerPizza.
Store this in a variable named pizzasNeeded. Choose the variable type that allows reassignment.
    - Think about this one carefully: if the math gives you a decimal, do you want to round down or round up?
    You don't want anyone going hungry. Use the appropriate Math method and reassign pizzasNeeded.
3. Calculate the total cost by multiplying pizzasNeeded by pricePerPizza. Store this in a variable named totalCost.
4. Calculate each person's share by dividing totalCost by guestsArriving. Store this in a variable named costPerPerson.
Choose the variable type that allows reassignment.
    - Round costPerPerson up to the nearest whole dollar so the total is always covered. Reassign costPerPerson.
*/
const totalSlicesNeeded = guestsArriving * slicesPerPerson;
let pizzasNeeded = totalSlicesNeeded / slicesPerPizza;
pizzasNeeded = Math.ceil(pizzasNeeded);
const totalCost = pizzasNeeded * pricePerPizza;
let costPerPerson = totalCost / guestsArriving;
costPerPerson = Math.ceil(costPerPerson);

/*
Output:
- Use console.log and string interpolation to log: We need X pizzas for 8 guests.
- Use console.log and string interpolation to log: Each person owes $X.
*/
console.log(`We need ${pizzasNeeded} pizzas for ${guestsArriving} guests.`);
console.log(`Each person owes $${costPerPerson}.`);

/*
Bonus:
- Houston has an 8.25% sales tax. Create a variable named taxRate and set it to 0.0825.
- Calculate the tax amount on totalCost and store it in a variable named taxAmount. Round it down with Math.floor().
- Calculate a new totalWithTax by adding totalCost and taxAmount.
- Log: Total with tax is $X.
*/
const taxRate = 0.0825;
const taxAmount = Math.floor(totalCost * taxRate);
const totalWithTax = totalCost + taxAmount;
console.log(`Total with tax is $${totalWithTax}.`);

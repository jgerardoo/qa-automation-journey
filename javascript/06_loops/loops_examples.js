// Ref: https://www.codecademy.com/resources/docs/javascript/loops

// For loop
// iterates from 5 to 10 and logs each number to the console, including both 5 and 10.
for (let counter = 5; counter < 11; counter++) {
    console.log(counter);
};
console.log("--------------------")

// Reverse For loop
// iterates from 3 to 0 and logs each number to the console, including both 3 and 0.
for (let counter = 3; counter >= 0; counter--){
    console.log(counter);
}
console.log("--------------------")

// Looping through Arrays
// use a for loop to perform the same operation on each element on an array
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
    console.log(`I would love to visit ${vacationSpots[i]}`);
};
console.log("--------------------")

// Nested Loops
// to compare the elements in two arrays. For each round of the outer for loop, the inner for loop will run completely.
let bobsFollowers = ["a", "b", "c", "d"];
let tinasFollowers = ["e", "b", "d"];
let mutualFollowers = [];

for (let bob = 0; bob < bobsFollowers.length; bob++) {
    for (let tina = 0; tina < tinasFollowers.length; tina++) {
        if (bobsFollowers[bob] === tinasFollowers[tina]) {
            mutualFollowers.push(bobsFollowers[bob]);
        }
    }
};
console.log(mutualFollowers);
console.log("--------------------");

// While Loop
// a loop that is executed as long as a specified condition evaluates to true.
let counter = 1;
while (counter < 4) {
    console.log(counter);
    counter++;
};

const cards = ["diamond", "spade", "heart", "club"];
let currentCard;
while (currentCard !== "spade") {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
};
console.log("--------------------");

// Do-While Loop
// a loop that executes a block of code at least once, and continues to execute as long as a specified condition is true.
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

let cupsOfSugarNeeded = 4;
let cupsAdded = 0;
do {
    cupsAdded++;
    console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);
console.log("--------------------");

// Break
// used to exit a loop prematurely when a certain condition is met.
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
    if (rapperArray[i] === "Notorious B.I.G.") {
        console.log(rapperArray[i]);
        break;
    }
    console.log(rapperArray[i]);
};
console.log("--------------------");

// For...of Loop
// iterates over an object’s (array, string, etc.) values rather than their keys.
const fruits = ["apple", "banana", "cherry", "orange"];

for (const item of fruits) {
  console.log(item);
}
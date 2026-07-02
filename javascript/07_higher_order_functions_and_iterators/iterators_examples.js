/*
Iterators are methods called on arrays to manipulate elements and return values.

References:
    - JS Iterators: https://www.codecademy.com/resources/docs/javascript/iterators
    - Built-in array iteration methods: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#iterative_methods
    - JS Arrays: https://www.codecademy.com/resources/docs/javascript/arrays
*/

// Utilize iterator methods in JavaScript

// The .reduce() method iterates through an array and returns a single value (sum up all the elements of the array).
const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});
console.log(sum);                       // 10
console.log("----------");

// .reduce() can take an optional second parameter to set an initial value for accumulator.
const sumWithInitialValue = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 10);                 // Initial value for accumulator is 10
console.log(sumWithInitialValue);       // 20
console.log("--------------------");

// The .forEach() method executes the same code for each element of an array.
const twoDigitNumbers = [28, 77, 45, 99, 27];
twoDigitNumbers.forEach(number => {  
    console.log(number);
});
console.log("----------");

const artists = ["Picasso", "Kahlo", "Matisse", "Utamaro"];
artists.forEach(artist => {
    console.log(`${artist} is one of my favorite artists.`);
});
console.log("--------------------");

// The .filter() method returns an array of elements after filtering out certain elements from the original array.
// The returned array is a new array with any elements for which the callback function returns TRUE.
const numbersToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbersToTen.filter(number => {
    return number % 2 === 0;
});
console.log(evenNumbers);       // [2, 4, 6, 8, 10]
console.log("----------");

const things = ["desk", "chair", 5, "backpack", 3.14, 100];
const onlyNumbers = things.filter(thing => {
    return typeof thing === "number";
});
console.log(onlyNumbers);
console.log("----------");

const favoriteWords = ["nostalgia", "hyperbole", "fervent", "esoteric", "serene"];
const longFavoriteWords = favoriteWords.filter(word => {
    return word.length > 7;
});
console.log(longFavoriteWords);
console.log("--------------------");

// The .map() method creates a new array by calling a function on each element of the original array. The original
// array does not get altered, and the returned array may contain different elements than the original array.
const finalParticipants = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
const announcements = finalParticipants.map(member => {
    return `${member} joined the contest.`;
});
console.log(announcements);
console.log("----------");

const numbersToFive = [1, 2, 3, 4, 5];
const squareNumbers = numbersToFive.map(number => {
    return number * number;
});
console.log(squareNumbers);
console.log("--------------------");

// The .findIndex() method returns the index of the first element in an array that passes a certain condition.
const fruits = ["apple", "banana", "orange", "grape"];
const indexOfOrange = fruits.findIndex(fruit => fruit === "orange");
console.log(indexOfOrange);     // 2
console.log("----------");

const moreAnimals = ["hippo", "tiger", "lion", "seal", "cheetah", "monkey", "salamander", "elephant"];
const startsWithS = moreAnimals.findIndex(animal => {
    return animal[0] === "s";
});
console.log(startsWithS);
console.log("----------");

// If there isn’t a single element in the array that satisfies the condition, .findIndex() will return -1.
const startsWithX = moreAnimals.findIndex(animal => {
    return animal[0] === "X";       // Returns -1 since no animal starts with "X"
});
console.log(startsWithX);
console.log("--------------------");

// The .every() method checks if all elements in an array pass a certain condition.
const animals = ["bears", "cats", "dogs", "elephants", "giraffes"];
const words = ["unique", "uncanny", "pique", "oxymoron", "guise"];
console.log(animals.every(animal => animal.length < 10));       // true - the length of all animals is less than 10
console.log("----------");

console.log(words.every((word) => {
    return word.length > 8;                             // false - not all words are longer than 8 characters
} ));
console.log("--------------------");

// The .some() method checks if at least one element in an array passes a certain condition.
console.log(animals.some(animal => animal.length > 10));        // false - no animal has a length greater than 10
console.log("----------");

console.log(words.some(word => {
    return word.length < 6;                         // true - there are some words less than 6 characters long
}));
console.log("--------------------");
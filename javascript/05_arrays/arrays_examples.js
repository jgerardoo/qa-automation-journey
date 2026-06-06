// Ref: https://www.codecademy.com/resources/docs/javascript/arrays

// An array containing numbers
const numberArray = [0, 1, 2, 3, 4];

// An array containing different data types
const mixedArray = [1, "chicken", false];

// Create an array using the "new" keyword
const musicGenres = new Array("Rock", "Pop", "Country", "Jazz");

// Arrays can be created empty
const colors = [];

// Array elements can be declared variables
const myNum = 42;
const myString = "world";
const myBoolean = true;
const arrayVariables = [myNum, myString, myBoolean];

// Log the arrays to the console
console.log(numberArray);
console.log(mixedArray);
console.log(musicGenres);
console.log(colors);
console.log(arrayVariables);

// Accessing the elements of an array (ordered by index values, starting at 0)
console.log(musicGenres[0]);

// Assign a new value to an array element using its index
musicGenres[0] = "Soul";
console.log(musicGenres);
musicGenres[musicGenres.length - 1] = "Metal";      // Change the last element of the array to "Metal"
console.log(musicGenres);

// Arrays are mutable, so we can change their elements (but cannot reassign a new array or a different value) even if they are declared with const
mixedArray[4] = 4;
console.log(mixedArray[3]);         // undefined - because we haven't assigned a value to index 3 yet
console.log(mixedArray[4]);         // 4 - because the value 4 was assigned to index 4
console.log(mixedArray);            // [1, "chicken", false, undefined, 4] - the array now has 5 elements, with index 3 being undefined

// .length is a built-in property that returns the number of elements in the array
const newYearsResolutions = ["Keep a journal", "Take a falconry class", "Run a marathon"];
console.log(newYearsResolutions.length);    // 3

// .push() method adds one or more elements to the end of an array
colors.push("red");       // 'colors' is the empty array created in line 13
console.log(colors);
colors.push("yellow", "blue", "white", "black", "orange");
console.log(colors);

// .pop() method removes the last element from an array
colors.pop();                       // orange is removed because it was the last element of the array
console.log(colors);                // the last element is now black
const lastColor = colors.pop();     // lastColor is assigned the value of the popped element, which is "black"
console.log(lastColor);             // black
console.log(colors);                // orange and black are no longer part of the array

// .shift() method removes the first element from an array
colors.shift();                     // red is removed because it was the first element of the array
console.log(colors);                // the first element is now yellow
const firstColor = colors.shift();   // firstColor is assigned the value of the shifted element, which is "yellow"
console.log(firstColor);            // yellow
console.log(colors);                // red and yellow are no longer part of the array

// .unshift() method adds one or more elements to the beginning of an array
colors.unshift("purple", "pink", "brown");    // purple, pink, and brown are added to the beginning of the array
console.log(colors);

// .slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals);
console.log(animals.slice(2));              // ["camel", "duck", "elephant"] - the slice starts from index 2 until the end of the array
const slicedAnimals = animals.slice(2, 4);  // ["camel", "duck"] - the element at index 4 is not included in the new array
console.log(slicedAnimals);
console.log(animals);                       // the original array is unchanged

// .indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present
console.log(animals.indexOf("camel"));       // 2
console.log(animals.indexOf("giraffe"));     // -1

// Arrays and Functions
const concepts = ["arrays", "can", "be", "mutated"];
console.log(concepts);

function changeArray(arr) {
    arr[3] = "MUTATED";
}
changeArray(concepts);
console.log(concepts);

function removeElement(newArr) {
  newArr.pop();
};
removeElement(concepts);
console.log(concepts);

// Nested arrays (arrays with one or more arrays as elements)
const nestedArray = [
    ["Rock", "Pop", "Country"],
    ["Soul", "Hip Hop", "Reggae"],
    ["Folk", "Classical", "Electronic"],
];

// Retrieve the genre at index 2 of the array at index 1
console.log(nestedArray[1][2]);     // Reggae

// Retrieve the genre at index 1 of the array at index 0
console.log(nestedArray[0][1]);     // Pop
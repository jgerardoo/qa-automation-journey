/*
=======================================================
Learn JavaScript - Codecademy | Lesson 5: Arrays
Practice exercise from the course lesson concepts.
Project practice: Secret Message
    Concepts: Arrays in JavaScript
=======================================================

Using array methods, you will transform an array of strings into a secret message!
Consult the Mozilla Developer Network (MDN) for reference on any method with which you are not familiar.
    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
*/

// Array provided with the practice
let secretMessage =     ["Learning", "is", "not", "about", "what", "you", "get", "easily", "the", "first", "time,", "it",
                        "is", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,", "Learn", "JavaScript"];
console.log(secretMessage);

// 1. Use an array method to remove the last string of the array secretMessage.
secretMessage.pop();

// 2. You can check your work by logging the .length of the array. At this point, the length should be one less than the original length.
console.log(secretMessage.length);

// 3. Use an array method to add the words 'to' and 'Program' as separate strings to the end of the secretMessage array.
secretMessage.push("to", "Program");

// 4. Replace the string 'easily' in the array with 'right' by accessing its index and assigning the new value.
secretMessage[7] = "right";

// 5. Use an array method to remove the first string of the array.
secretMessage.shift();

// 6. Use an array method to add the string 'Programming' to the beginning of the array.
secretMessage.unshift("Programming");

// 7. Use an array method to remove the strings 'get', 'right', 'the', 'first', 'time,', and replace them with the single string 'know,'.
secretMessage.splice(6, 5, "know,");

// 8. On one line, use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(" "));
console.log("------------------------------");
console.log("------------------------------");



/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Houston Astros Roster Manager
==================================================================================

The Astros coaching staff needs a program to manage the active game roster.
Players get added, moved around, injured, and swapped throughout the season.
Your job is to handle those changes using array methods.
*/

// Setup - Start with this array, do not modify it directly:
let activeRoster = ["Altuve", "Bregman", "Alvarez", "Tucker", "Peña", "Diaz", "Meyers", "McCormick", "Abreu"];

/*
Task 1:
    Log the current roster length.
    Then log the full roster using .join() so it prints as a single comma-separated string, like: "Current roster: Altuve, Bregman, Alvarez, ..."
*/
console.log(activeRoster.length);
console.log(`Current roster: ${activeRoster.join(", ")}`);

/*
Task 2:
    The last player on the roster was scratched from today's game. Use .pop() to remove him and store the removed player in a variable named scratchedPlayer.
    Then log: "[player] was scratched from today's lineup."
*/
const scratchedPlayer = activeRoster.pop();
console.log(`${scratchedPlayer} was scratched from today's lineup.`);

// Task 3: Julks is leading off today, add him to the beginning of the list. Dubin is the last at bat, add him to the end of the list
activeRoster.unshift("Julks");
activeRoster.push("Dubin");

/*
Task 4:
    Use .indexOf() to find the current index of "Tucker" in the roster. Store it in a variable named tuckerIndex.
    Log: Tucker is currently at position [index] in the roster.
    Then use .splice() at tuckerIndex to remove "Tucker" and replace him with "Singleton" in a single .splice() call. Log: Tucker swapped out for Singleton.
*/
const tuckerIndex = activeRoster.indexOf("Tucker");
const playerSwappedOut = activeRoster[tuckerIndex];
const playerSwappedIn = "Singleton";
console.log(`Tucker is currently at position ${tuckerIndex + 1} in the roster.`);       // +1 because index starts at 0 but we want to log the position starting at 1
activeRoster.splice(tuckerIndex, 1, playerSwappedIn);
console.log(`${playerSwappedOut} swapped out for ${playerSwappedIn}.`);

/*
Task 5: 
    Use .slice() to create a new array named startingInfield that contains only the first four players of the current roster.
    Log: Starting infield: [player1], [player2], [player3], [player4] using .join().
    Then log the full activeRoster to confirm .slice() did not modify the original
*/
const startingInfield = activeRoster.slice(0, 4);
console.log(`Starting infield: ${startingInfield.join(", ")}`);
console.log(activeRoster);

/*
Task 6:
    The game is over. Use .splice() to remove the last two players from the roster (no replacement).
    Then use direct index assignment to update the player at index 0 to "Altuve" (he's always captain).
    Log the final roster with .join().
*/
activeRoster.splice(-2, 2);
const firstOnTheList = activeRoster[0];
const altuveIndex = activeRoster.indexOf("Altuve");
activeRoster[altuveIndex] = firstOnTheList;
activeRoster[0] = "Altuve";
console.log(activeRoster.join(", "));

/*
Bonus:
    Create a copy of the final activeRoster using the spread operator: const rosterBackup = [...activeRoster].
    Then .push() a new player "Hader" only onto rosterBackup.
    Log both arrays to confirm they are independent (adding to the backup did not affect the original).
*/
const rosterBackup = [...activeRoster];
rosterBackup.push("Hader");
console.log(activeRoster);
console.log(rosterBackup);

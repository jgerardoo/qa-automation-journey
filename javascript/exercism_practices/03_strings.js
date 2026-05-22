/*
=================================================================================
Exercise: Poetry Club Door Policy
Source: https://exercism.org/tracks/javascript/exercises/poetry-club-door-policy
=================================================================================

Instructions:
A new poetry club has opened in town, and you're thinking of attending. Because there have been incidents in the past,
the club has a very specific door policy which you'll need to master, before attempting entry.

There are two doors at the poetry club, a front and a back door, and both are guarded. To gain entry, you'll need to work out the password of the day.
The password is always based on a poem and can be derived in a two-step process:
    1. The guard will recite the poem, one line at a time and you have to respond with an appropriate letter of that line.
    2. The guard will now tell you all the letters you responded with at once, and you need to write them down on a piece of paper in a specific format.
The details of the process depend on which door you are trying to enter.

You have 4 tasks to complete. Detailed task instructions can be found in the exercise source. The tasks are as follows:
    Task 1 - Get the first letter of a sentence
    Task 2 - Capitalize a word
    Task 3 - Get the last letter of a sentence
    Task 4 - Be polite

Good luck with that door policy!
*/

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the front door.
 *
 * @param {string} line
 * @returns {string}
 */
function frontDoorResponse(line) {
    return line[0];
}
// Test the function with 5 lines
const firstLetterOfLineOne = frontDoorResponse("Stands so high");
const firstLetterOfLineTwo = frontDoorResponse("Huge hooves too");
const firstLetterOfLineThree = frontDoorResponse("Impatiently waits for");
const firstLetterOfLineFour = frontDoorResponse("Reins and harness");
const firstLetterOfLineFive = frontDoorResponse("Eager to leave");
const wordFront = firstLetterOfLineOne+firstLetterOfLineTwo+firstLetterOfLineThree+firstLetterOfLineFour+firstLetterOfLineFive;
console.log(wordFront);              // Should print "SHIRE"

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
function frontDoorPassword(word) {
    const firstL = word[0].slice(0,1).toUpperCase();
    const restOfWord = word.slice(1).toLowerCase();
    return firstL+restOfWord;
}
// Test the function to generate the password
const capitalizePwdFrontDoor = frontDoorPassword(wordFront);
console.log(capitalizePwdFrontDoor);                     // Should print "Shire"

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
function backDoorResponse(line) {
    const cleanLine = line.trim();
    const lastIndex = cleanLine.length - 1;
    const lastChar = cleanLine[lastIndex];
    return lastChar;
}
// Test the function with 5 lines
const lastLetterOfLineOne = backDoorResponse("Stands so high    ");
const lastLetterOfLineTwo = backDoorResponse("Huge hooves too    ");
const lastLetterOfLineThree = backDoorResponse("Impatiently waits for    ");
const lastLetterOfLineFour = backDoorResponse("Reins and harness    ");
const lastLetterOfLineFive = backDoorResponse("Eager to leave    ");
const wordBack = lastLetterOfLineOne+lastLetterOfLineTwo+lastLetterOfLineThree+lastLetterOfLineFour+lastLetterOfLineFive;
console.log(wordBack);              // Should print "horse"

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
function backDoorPassword(word) {
    return frontDoorPassword(word) + ", please";
}
// Test the function to generate the password
const capitalizePwdBackDoor = backDoorPassword(wordBack);
console.log(capitalizePwdBackDoor);         // Should print "Horse, please"
/*
===============================================================================
Learn JavaScript - Codecademy | Lesson 7: Higher Order Functions and Iterators
Practice exercise from the course lesson concepts.
Project practice: Grammar Checker
    Concepts: Iterating over arrays
===============================================================================

Practice iterating over arrays in JavaScript to gather information and improve the quality of a paragraph.
*/

// Setup:
let story = "Last weekend, I took literally the most beautifull bike ride of my life. The route is called 'The 9W to Nyack' and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It's really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.";
let storyWords = story.split(" ");
let unnecessaryWord = "literally";
let misspelledWord = "beautifull";
let badWord = "freaking";

/*
Getting started
1. To see the array we’ll be working with throughout the lesson, log storyWords to the console.
After you’ve viewed the storyWords array, comment out the console.log() statement before moving to the next task.
*/
// console.log(storyWords);

// 2. For a better visual comparison of the original and edited stories, we want to view the
// edited storyWords array as a string using the .join() method on storyWords.
// console.log(storyWords.join(" "));

/*
Counting Words:
3. Now it’s time to start editing the story by manipulating the storyWords array. Create a variable named
count that stores the number 0. Use a .forEach() method to iterate over the storyWords array. As an argument
of the forEach() method, create an empty function to be used as the callback function.
4. For each word in the storyWords array, we want the count variable to increment by one. Log count to see
how many words are in the story.
*/
let count = 0;
storyWords.forEach(word => {
    count += 1;
});
console.log(count);

/*
Filtering Words:
5. Let’s filter out all instances of the word “literally” to shorten the story and remove the unnecessary word.
We will reassign the filtered story to the same storyWords variable by applying the .filter() method.
6. Use the unnecessaryWord variable to filter out the value of unnecessaryWord from the story.
*/
storyWords = storyWords.filter(word => {
    return word != unnecessaryWord;
});

/*
Replacing Words:
7. Let’s take care of any misspelled words in the story. We can reassign storyWords to a new array of
spell-checked words using the .map() method. Reassign storyWords to equal the invocation of the .map() method
on the storyWords array. Define a conditional statement to check if the argument is equal to the misspelledWord variable.
If it is, return the correct spelling of the string, “beautiful”. If not, return word.
*/
storyWords = storyWords.map(word => {
    if (word === "beautifull") {
        return "beautiful";
    } else {
        return word;
    }
});

/*
8. There’s a “bad” word in the story! Declare a variable called badWordIndex and apply the .findIndex() method
to storyWords to check each word to see if it equals the badWord variable and return the index of the found word.
Log badWordIndex to the console.
*/
const badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});
console.log(badWordIndex);

/*
9. Access the element inside the storyWords array that has the index of badWordIndex and set it equal to
the more appropriate string, 'really'.
*/
storyWords[badWordIndex] = "really"

/*
10. We want to simplify the words in the story to appeal to a broader audience.
Define a variable called lengthCheck to check whether every word has less than or equal to 10 characters.
*/
const lengthCheck = storyWords.every(word => {
    return word.length <= 10;
});
console.log(lengthCheck);

/*
11. Use an iterator method of your choice to access the word in the storyWords array that is greater than 10 characters.
Then, manually replace the word in the original story string with a shorter word.
*/
storyWords = storyWords.map(word => {
    if (word.length > 10) {
        return "stunning";
    } else {
        return word;
    }
});

// Log the final story
console.log(storyWords.join(" "));




/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Houston Astros Season Stats Analyzer
==================================================================================

The Astros analytics team has end-of-season batting stats for their roster.
They need a program to clean the data, run calculations, and surface insights from it.
*/

// Setup:
const roster = [
    { name: "Altuve",       avg: 0.311, homeRuns: 20, atBats: 450, hits: 140 },
    { name: "Bregman",      avg: 0.268, homeRuns: 15, atBats: 430, hits: 115 },
    { name: "Alvarez",      avg: 0.304, homeRuns: 39, atBats: 470, hits: 143 },
    { name: "Tucker",       avg: 0.257, homeRuns: 29, atBats: 460, hits: 118 },
    { name: "Peña",         avg: 0.261, homeRuns: 22, atBats: 440, hits: 115 },
    { name: "Singleton",    avg: 0.196, homeRuns: 17, atBats: 380, hits:  74 },
    { name: "Meyers",       avg: 0.241, homeRuns:  8, atBats: 390, hits:  94 },
    { name: "Julks",        avg: 0.228, homeRuns:  6, atBats: 360, hits:  82 },
    { name: "Diaz",         avg: 0.189, homeRuns:  5, atBats: 310, hits:  59 },
];
const minimumAvg = 0.200;
const eliteAvgThreshold = 0.300;
const powerThreshold = 25;

/*
Task 1.
The analytics dashboard needs a simple count of total players on the roster. Without using .length,
iterate over roster and count each player, storing the result in a variable named playerCount.
Log: Total players: [count]
*/
let playerCount = 0;
roster.forEach(player => {
    playerCount += 1;
});
console.log(`Total players: ${playerCount}`);

/*
Task 2.
Two players are hitting below the minimumAvg threshold and will be sent to the minors for more development.
Build a new array named activeRoster containing only players at or above minimumAvg. Log the names of the
players who made the cut as a comma-separated string: Active roster: Altuve, Bregman, ...
Hint: each element in roster is an object, so you'll need dot notation to access individual fields inside your callback.
*/
const activeRoster = roster.filter(player => {
    return player.avg >= minimumAvg;
});
const names = activeRoster.map(player => player.name);
const nameList = names.join(", ");
console.log(`Active roster: ${nameList}`);
// the three lines above can be simplified to:
// console.log(`Active roster: ${activeRoster.map(player => player.name).join(", ")}`);

/*
Task 3.
The team wants a clean display version of the roster. From activeRoster, build a new array named rosterDisplay
where each element is a formatted string: [name] | AVG: .[avg display]. Log each string in rosterDisplay on its own line.
For the average display, multiply avg by 1000, round it, and display it without the leading zero
(just the three digits, like .311 displays as 311).
*/
const rosterDisplay = activeRoster.map(player => {
    return `${player.name} | AVG: ${Math.round(player.avg * 1000)}`;
});

rosterDisplay.forEach(player => console.log(player));

/*
Task 4.
The team wants to know if any player in activeRoster is a true power hitter, meaning they hit more home runs
than powerThreshold. Store the boolean result in a variable named hasPowerHitter.
Log: Power hitter on roster: [true/false]
Then find the first player in activeRoster who qualifies as elite (avg at or above eliteAvgThreshold).
Store their full object in a variable named firstElitePlayer. Log: First elite player: [name]
*/
const hasPowerHitter = activeRoster.some(player => {
    return player.homeRuns > powerThreshold;
});
console.log(`Power hitter on roster: ${hasPowerHitter}`);

const firstElitePlayer = activeRoster.find(player => {
    return player.avg >= eliteAvgThreshold;
});
console.log(`First elite player: ${firstElitePlayer.name}`);

/*
Task 5.
Calculate the total home runs hit across the entire activeRoster and store the result in a variable
named totalHomeRuns. This needs to accumulate a single number across the whole array, one player at a time.
Log: Total home runs: [count]
Then calculate the team's combined batting average across activeRoster. To do this accurately, sum all hits
into one variable and sum all atBats into another, both using the same approach as above. Then divide hits by
atBats and round to three decimal places.
Log: Team batting average: .[average]
*/
const totalHomeRuns = activeRoster.reduce((a, cv) => {
    return a + cv.homeRuns;
}, 0);
console.log(`Total home runs: ${totalHomeRuns}`);

let totalHits = 0;
totalHits = activeRoster.reduce((a, cv) => {
    return a + cv.hits;
}, 0);
console.log(`Total hits: ${totalHits}`);

let totalAtBats = 0;
totalAtBats = activeRoster.reduce((a, cv) => {
    return a + cv.atBats;
}, 0);
console.log(`Total at-bats: ${totalAtBats}`);

const teamBattingAvg = Math.round((totalHits / totalAtBats) * 1000) / 1000;
console.log(`Team batting average: ${teamBattingAvg}`);

/*
Build a summary object with three keys: totalPlayers (from Task 1), totalHomeRuns (from Task 5),
and teamAvg (from Task 5). Log it with console.log("Season Summary:", summary).
*/
const summary = {
    totalPlayers: playerCount,
    totalHomeRuns: totalHomeRuns,
    teamAvg: teamBattingAvg
};
console.log("Season Summary:", summary);
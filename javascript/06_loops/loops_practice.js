/*
=======================================================
Learn JavaScript - Codecademy | Lesson 6: Loops
Practice exercise from the course lesson concepts.
Project practice: Whale talk
    Concepts: Loops in JavaScript
=======================================================

Practice loops in JavaScript by building a project that will translate English into “Whale Talk".

There are a few simple rules for translating text to whale language:
    1. There are no consonants. Only vowels excluding “y”.
    2. The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.
*/

/*
Setup variables:

1. Create a variable named input that is equal to any phrase you’d like.
This variable will contain the text you want to translate into “whale talk”.
*/
let input = "turpentine and turtles";

/*
2. Whales only speak with the vowels, “a”, “e”, “i”, “o”, and “u”. Using these lowercase letters, create an array named vowels.
This array will not be updated so be sure to choose the appropriate declaration keyword.
*/
const vowels = ["a", "e", "i", "o", "u"];

// 3. Create a variable named resultArray and set it equal to an empty array. This will serve as a place to store the vowels from the input string
let resultArray = [];

/*
Build the Loops:

4. Create a loop to iterate through each letter of the input variable text.
In a later step, we will compare each letter with our vowels array

5. To check your work, log the iterator numbered position inside the for loop and run your code.
This should count the number of characters in your input string.
Comment out this code when you’re ready to move on.

6. Create a nested for loop inside of the for loop you just wrote. Make the inner loop iterate through the vowels array each time the outer loop runs.
This will enable you to check each letter of input against all the vowels elements during each iteration.

7. To check your work, log the iterator number positions inside the inner for loop and run your code.
You should see 0 through 4 repeatedly because vowels is 5 elements long.
Comment out this code when you’re ready to move on.

Compare & Collect Vowels:

8. Inside the second for loop, write a code block that compares the input letter to every letter in the vowels array.
Note: To check that everything is working properly, log letter matches to the console.

9. Now instead of just logging the letters, add them to the results array.

10. Whales double their e‘s and the u‘s in their language.
Write an if statement that checks if each letter in the input string is equal to 'e'. If so, use the .push() method to add input[i] to the resultArray.
Note: This statement belongs before the inner for loop block inside the outer for loop.
This is because you only want to perform this check once for every letter in the input.

11. Next, you want to double the letter u.
*/
for (let i = 0; i < input.length; i++) {
  // console.log(i);
  if (input[i] === "e") {
    resultArray.push(input[i]);
  } else if (input[i] === "u") {
      resultArray.push(input[i]);
    }
    for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i] === vowels[j]) {
      // console.log(input[i]);
      resultArray.push(input[i]);
    }
  };
};

/*
Output the result:

12. At the bottom of the program, log the resultArray to the console.

13. Currently, resultArray outputs an array of characters. To produce proper whale language, we want to capitalize the array elements and put them together as one string.
Declare a variable resultString that joins our resultArray into a single string and capitalizes all of its letters.

14. Run the program and sing the output out loud — you officially speak whale!
Note: To confirm, if you change the value of input to ‘turpentine and turtles’, the whale version would read: 'UUEEIEEAUUEE'.
*/
console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);

console.log("------------------------------");
console.log("------------------------------");


/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Mission Control Launch Sequence
==================================================================================

Houston's Mission Control needs a program to run a pre-launch checklist, handle a system that
should be skipped this mission, abort immediately if a critical system fails, run a countdown,
and confirm telemetry at least once no matter what.

Note: Don't modify the setup arrays directly. Use the values exactly as given
so the abort and skip behavior trigger correctly.
*/

// Setup:
// Scenario: All systems "GO", mission succeeds!
const missionName = "Artemis Test Flight";
const checklist = ["Fuel", "Oxygen", "Backup Power", "Navigation", "Communications", "Life Support", "Engines"];
const skipChecks = [false, false, true, false, false, false, false];
const systemStatus = ["GO", "GO", "GO", "GO", "GO", "GO", "GO"];
let passedChecks = [];
let missionAborted = false;
const countdownStart = 10;

/*
Task 1: Run the checklist
Loop through checklist by index (you'll need the index here since you're checking three parallel arrays together).
For each system:
    - If skipChecks at that position is true, that system isn't installed this mission.
        Move on to the next item without logging anything for it.
    - If systemStatus at that position is "FAIL", log: ABORT: [system] check failed.
        Set missionAborted to true and stop processing the checklist entirely, no further systems should be checked.
    - Otherwise, push the system name into passedChecks and log: [system]: GO
*/
for (let i = 0; i < checklist.length; i++) {
    if (skipChecks[i] === false) {
        if (systemStatus[i] === "GO") {
            passedChecks.push(checklist[i]);
            console.log(`${checklist[i]}: GO`);
        } else if (systemStatus[i] === "FAIL") {
            console.log(`ABORT: ${checklist[i]} check failed.`);
            missionAborted = true;
            break;
        }
    }
};

/*
Task 2: Report passed systems
After the checklist loop, log: Systems go: [list] joining passedChecks into a comma-separated string.
*/
console.log(`Systems go: ${passedChecks.join(", ")}`);

/*
Task 3: Countdown
If missionAborted is false, run a countdown starting at countdownStart down to 1, logging each number.
When it reaches 0, log Liftoff! instead of 0.
Think about which loop structure fits here. You're not iterating over an array,
you're repeating an action while a numeric condition holds, and decrementing a counter each time.
*/
if (!missionAborted) {
    let countdown = countdownStart;
    while (countdown > 0) {
        console.log(countdown);
        countdown--;
    };
    console.log("Liftoff!");
};

/*
Task 4: Telemetry confirmation
Mission Control always announces "Telemetry check in progress..." at least once before checking whether
more checks are needed, even if zero checks remain. Create a variable telemetryChecksRemaining set to 3.
Build a loop that guarantees its body runs at least one time regardless of the starting condition,
logs the telemetry message, decrements telemetryChecksRemaining, and keeps going only while it's still above 0.
Skip this task entirely if missionAborted is true.
*/
let telemetryChecksRemaining = 3;
if (!missionAborted) {
    do {
        console.log("Telemetry check in progress...");
        telemetryChecksRemaining--;
    } while (telemetryChecksRemaining > 0);
};

/*
Task 5: Final report
Loop over passedChecks in a way that doesn't require tracking an index at all, since you don't need
the position, just each value. Log each one as: ✔ [system] cleared for launch.
*/
for (const item of passedChecks) {
    console.log(`✔ ${item} cleared for launch.`);
};

/*
Bonus:
Run the whole program once as written (Communications fails, mission aborts).
Then change systemStatus for "Communications" to "GO" and run it again so the mission succeeds end to end.
Add a one-line comment above the arrays noting which scenario is currently active.
*/
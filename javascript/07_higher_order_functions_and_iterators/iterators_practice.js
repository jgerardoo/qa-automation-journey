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
After you’ve viewed the storyWords array, comment out the console.log() statement before moving to the next task
*/
// console.log(storyWords);

// 2. For a better visual comparison of the original and edited stories, we want to view the edited storyWords array as a string using the .join() method on storyWords.
// console.log(storyWords.join(" "));

/*
Counting Words:
3. Now it’s time to start editing the story by manipulating the storyWords array. Create a variable named count that stores the number 0. Use a .forEach() method to iterate over the storyWords array. As an argument of the forEach() method, create an empty function to be used as the callback function.
4. For each word in the storyWords array, we want the count variable to increment by one. Log count to see how many words are in the story
*/
let count = 0;
storyWords.forEach(word => {
    count += 1;
});
console.log(count);

/*
Filtering Words:
5. Let’s filter out all instances of the word “literally” to shorten the story and remove the unnecessary word. We will reassign the filtered story to the same storyWords variable by applying the .filter() method.
6. Use the unnecessaryWord variable to filter out the value of unnecessaryWord from the story.
*/
storyWords = storyWords.filter(word => {
    return word != unnecessaryWord;
});

/*
Replacing Words:
7. Let’s take care of any misspelled words in the story. We can reassign storyWords to a new array of spell-checked words using the .map() method. Reassign storyWords to equal the invocation of the .map() method on the storyWords array. Define a conditional statement to check if the argument is equal to the misspelledWord variable. If it is, return the correct spelling of the string, “beautiful”. If not, return word.
*/
storyWords = storyWords.map(word => {
    if (word === "beautifull") {
        return "beautiful";
    } else {
        return word;
    }
});

// 8. There’s a “bad” word in the story! Declare a variable called badWordIndex and apply the .findIndex() method to storyWords to check each word to see if it equals the badWord variable and return the index of the found word. Log badWordIndex to the console.
const badWordIndex = storyWords.findIndex(word => {
    return word === badWord;
});
console.log(badWordIndex);

// 9. Access the element inside the storyWords array that has the index of badWordIndex and set it equal to the more appropriate string, 'really'.
storyWords[badWordIndex] = "really"

// 10. We want to simplify the words in the story to appeal to a broader audience. Define a variable called lengthCheck to check whether every word has less than or equal to 10 characters.
const lengthCheck = storyWords.every(word => {
    return word.length <= 10;
});
console.log(lengthCheck);

// 11. Use an iterator method of your choice to access the word in the storyWords array that is greater than 10 characters. Then, manually replace the word in the original story string with a shorter word.
storyWords = storyWords.map(word => {
    if (word.length > 10) {
        return "stunning";
    } else {
        return word;
    }
});

// Log the final story
console.log(storyWords.join(" "));
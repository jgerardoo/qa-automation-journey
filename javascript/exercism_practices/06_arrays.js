/*
=============================================================================
Exercise: Elyses Enchantments
Source: https://exercism.org/tracks/javascript/exercises/elyses-enchantments
=============================================================================

Instructions:
As a magician-to-be, Elyse needs to practice some basics. She has a stack of cards that she wants to manipulate.
To make things a bit easier she only uses the cards 1 to 10 so her stack of cards can be represented by an array of numbers.
The position of a certain card corresponds to the index in the array.
That means position 0 refers to the first card, position 1 to the second card etc.

Detailed task instructions can be found in the exercise source. The tasks are as follows:
Task 1 - Retrieve a card from a stack
Task 2 - Exchange a card in the stack
Task 3 - Insert a card at the top of the stack
Task 4 - Remove a card from the stack
Task 5 - Remove the top card from the stack
Task 6 - Insert a card at the bottom of the stack
Task 7 - Remove a card from the bottom of the stack
Task 8 - Check the size of the stack
*/

// Array of cards
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(cards);
/**
 * Retrieve card from cards array at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number} the card
 */
function getItem(cards, position) {
    return cards[position];
}
// Test the function with position 0
console.log(getItem(cards, 0));

/**
 * Exchange card with replacementCard at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 * @param {number} replacementCard
 *
 * @returns {number[]} the cards with the change applied
 */
function setItem(cards, position, replacementCard) {
    cards[position] = replacementCard;
    return cards;
}
// Test the function by replacing the card at position 0 with 11
console.log(setItem(cards, 0, 11));

/**
 * Insert newCard at the end of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards with the newCard applied
 */
function insertItemAtTop(cards, newCard) {
    cards.push(newCard);
    return cards;
}
// Test the function by inserting 12 at the end of the cards array
console.log(insertItemAtTop(cards, 12));

/**
 * Remove the card at the 0-based position
 *
 * @param {number[]} cards
 * @param {number} position
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItem(cards, position) {
    cards.splice(position, 1);
    return cards;
}
// Test the function by removing the card at position 0
console.log(removeItem(cards, 0));

/**
 * Remove card from the end of the cards array
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItemFromTop(cards) {
    cards.pop();
    return cards;
}
// Test the function by removing the card from the end of the array
console.log(removeItemFromTop(cards));

/**
 * Insert newCard at beginning of the cards array
 *
 * @param {number[]} cards
 * @param {number} newCard
 *
 * @returns {number[]} the cards including the new card
 */
function insertItemAtBottom(cards, newCard) {
    cards.unshift(newCard);
    return cards;
}
// Test the function by inserting 0 at the beginning of the cards array
console.log(insertItemAtBottom(cards, 0));

/**
 * Remove card from the beginning of the cards
 *
 * @param {number[]} cards
 *
 * @returns {number[]} the cards without the removed card
 */
function removeItemAtBottom(cards) {
    cards.shift();
    return cards;
}
// Test the function by removing the card from the beginning of the cards array
console.log(removeItemAtBottom(cards));

/**
 * Compare the number of cards with the given stackSize
 *
 * @param {number[]} cards
 * @param {number} stackSize
 *
 * @returns {boolean} true if there are exactly stackSize number of cards, false otherwise
 */
function checkSizeOfStack(cards, stackSize) {
    return cards.length === stackSize;
}
// Test the function by checking if the cards array has exactly 10 cards
console.log(checkSizeOfStack(cards, 10));
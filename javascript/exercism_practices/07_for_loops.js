/*
=============================================================================
Exercise: Bird Watcher
Source: https://exercism.org/tracks/javascript/exercises/bird-watcher
=============================================================================

Instructions:
You are an avid bird watcher that keeps track of how many birds have visited your garden.
Usually, you use a tally in a notebook to count the birds but you want to better work with your data.
You already digitalized the bird counts per day for the past weeks that you kept in the notebook.
Now you want to determine the total number of birds that you counted,
calculate the bird count for a specific week and correct a counting mistake

Detailed task instructions can be found in the exercise source. The tasks are as follows:
Task 1 - Determine the total number of birds that you counted so far
Task 2 - Calculate the number of visiting birds in a specific week
Task 3 - Fix a counting mistake
*/

// Birds counted per day:
birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
function totalBirdCount(birdsPerDay) {
    let totalBirds = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        totalBirds += birdsPerDay[i];
    }
    return totalBirds;
}
// Test the function with birdsPerDay
console.log(totalBirdCount(birdsPerDay));

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
function birdsInWeek(birdsPerDay, week) {
    const startDay = (week - 1) * 7;
    const endDay = startDay + 7;
    let birdsPerWeek = 0;
    for (let i = startDay; i < endDay; i++) {
        birdsPerWeek += birdsPerDay[i];
    }
    return birdsPerWeek;
}
// Test the function with week 1
console.log(birdsInWeek(birdsPerDay, 1));

// Test the function with week 2
console.log(birdsInWeek(birdsPerDay, 2));

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i += 2) {
        birdsPerDay[i] += 1;
    }
    return birdsPerDay;
}
// Test the function to correct the count
console.log(fixBirdCountLog(birdsPerDay));
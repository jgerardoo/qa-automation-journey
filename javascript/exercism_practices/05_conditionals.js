/*
==========================================================================
Exercise: Vehicle purchase
Source: https://exercism.org/tracks/javascript/exercises/vehicle-purchase
==========================================================================

Instructions:
In this exercise, you will write some code to help you prepare to buy a vehicle.

You have three tasks, one to determine if you will need to get a license,
one to help you choose between two vehicles and one to estimate the acceptable price for a used vehicle.

Detailed task instructions can be found in the exercise source. The tasks are as follows:
Task 1 - Determine if you will need a drivers license
Task 2 - Choose netween two potential vehicles to buy
Task 3 - Calculate an estimation for the price of a used vehicle
*/

/**
 * Determines whether or not you need a license to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
let kind = "car"
function needsLicense(kind) {
    if (kind === "car" || kind === "truck") {
        return true;
    } else {
        return false;
    }
}
// Test the function with "car"
console.log(needsLicense(kind));
// Test the function with "bike"
kind = "bike"
console.log(needsLicense(kind));
console.log("--------------------");

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
function chooseVehicle(option1, option2) {
    if (option1 < option2){
        return `${option1} is clearly the better choice.`;
    } else {
        return `${option2} is clearly the better choice.`;
    }
}
// Test the function with "Wuling Hongguang" and "Toyota Corolla"
let option1 = "Wuling Hongguang"
let option2 = "Toyota Corolla"
console.log(chooseVehicle(option1, option2));
// Test the function with "VolksWagen Jetta" and "VolksWagen Beetle"
option1 = "VolksWagen Jetta"
option2 = "VolksWagen Beetle"
console.log(chooseVehicle(option1, option2));
console.log("--------------------");

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns {number} expected resell price in the dealership
 */
function calculateResellPrice(originalPrice, age) {
    if (age < 3) {
        return originalPrice * .8;
    } else if (age >= 3 && age <= 10) {
        return originalPrice * .7;
    } else {
        return originalPrice * .5;
    }
}
// Test the function with 10000 and 2
const originalPrice = 10000
let age = 2
console.log(calculateResellPrice(originalPrice, age));
// Test the function with 10000 and 3
age = 3
console.log(calculateResellPrice(originalPrice, age));
// Test the function with 10000 and 5
age = 5
console.log(calculateResellPrice(originalPrice, age));
// Test the function with 10000 and 10
age = 10
console.log(calculateResellPrice(originalPrice, age));
// Test the function with 10000 and 12
age = 12
console.log(calculateResellPrice(originalPrice, age));
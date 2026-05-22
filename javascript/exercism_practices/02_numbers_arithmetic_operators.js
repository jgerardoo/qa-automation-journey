/*
==========================================================================
Exercise: Freelancer Rates
Source: https://exercism.org/tracks/javascript/exercises/freelancer-rates
==========================================================================

Instructions:
In this exercise you will be writing code to help a freelancer communicate with their clients about the prices of certain projects.
You will write a few utility functions to quickly calculate the costs for the clients.

Note:
The ratePerHour variable and the dayRate function are related to money. The units of measurement are money for a unit of time: hours and days respectively.

Task 1 - Calculate the day rate given an hourly rate
A client contacts the freelancer to enquire about their rates. The freelancer explains that they work 8 hours a day.
However, the freelancer knows only their hourly rates for the project. Help them estimate a day rate given an hourly rate.

Task 2 - Calculate the number of workdays given a fixed budget
Another day, a project manager offers the freelancer to work on a project with a fixed budget.
Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days they would work until the budget is exhausted.
The result must be rounded down to the nearest whole number.

Task 3 - Calculate the discounted rate for large projects
Often, the freelancer's clients hire them for projects spanning over multiple months.
In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
Your excellent work-life balance means that you only work 22 days in each calendar month, so every month has 22 billable days.
Help them estimate their cost for such projects, given an hourly rate, the number of billable days the project contains, and a monthly discount rate.
The discount is always passed as a number, where 42% becomes 0.42. The result must be rounded up to the nearest whole number.

Get those rates calculated!
*/

// Get those rates calculated!

/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */
function dayRate(ratePerHour) {
    const totalDayRate = ratePerHour * 8;
    console.log(totalDayRate);
    return totalDayRate;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
function daysInBudget(budget, ratePerHour) {
    const daysInBudget = Math.floor(budget / dayRate(ratePerHour));
    console.log(daysInBudget);
    return daysInBudget;
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
const billableDaysPerMonth = 22
const billableHoursPerDay = 8
const billableHoursPerMonth = billableDaysPerMonth * 8
function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    const monthsToBill = Math.floor(numDays / billableDaysPerMonth);
    const daysToBill = numDays % billableDaysPerMonth;
    const totalMonths = monthsToBill * billableHoursPerMonth * ratePerHour * (1 - discount);
    const totalDays = daysToBill * billableHoursPerDay * ratePerHour;
    const projectTotal = Math.ceil(totalMonths + totalDays);
    console.log(projectTotal);
    return projectTotal;
}


// Test the functions
dayRate(50);                                // Expected output: 400
daysInBudget(1000, 50);                     // Expected output: 2
priceWithMonthlyDiscount(50, 30, 0.2);      // Expected output: 10240

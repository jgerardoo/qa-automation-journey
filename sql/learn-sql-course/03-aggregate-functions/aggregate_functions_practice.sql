/*
================================================================
Learn SQL - Codecademy | Module 3 Practice: Aggregate Functions
Practice exercises based on the course lesson concepts.
Scenarios generated with Claude AI assistance.
SQL written independently using the DVD Rental database,
PostgreSQL, and DBeaver.
================================================================


Exercise 1: Explore the data
Get a feel for the payment table. Select all columns from it
*/
SELECT *
FROM payment;

/*
Exercise 2: COUNT
How many payments are recorded in the payment table?
*/
SELECT COUNT(payment_id) AS "Number of payments"
FROM payment;

/*
Exercise 3: SUM
What is the total revenue collected across all payments?
*/
SELECT SUM(amount) AS "Total revenue"
FROM payment;

/*
Exercise 4: MAX
What is the highest single payment amount ever recorded?
*/
SELECT MAX(amount) AS "Highest payment"
FROM payment;

/*
Exercise 5: MIN
What is the lowest single payment amount ever recorded?
*/
SELECT MIN(amount) AS "Lowest payment"
FROM payment;

/*
Exercise 6: AVG with ROUND
What is the average payment amount, rounded to 2 decimal places?
*/
SELECT ROUND(AVG(amount), 2) AS "Average payment"
FROM payment;

/*
Exercise 7: GROUP BY
What is the total amount paid by each customer? Return the customer_id and their total amount paid.
*/
SELECT customer_id,
	SUM(amount) AS "Total amount paid"
FROM payment
GROUP BY 1;

/*
Exercise 8: GROUP BY with ORDER BY
Repeat the previous query but order the results from highest total to lowest
so you can see the top spenders first.
*/
SELECT customer_id,
	SUM(amount) AS "Total amount paid (High to Low)"
FROM payment
GROUP BY 1
ORDER BY 2 DESC;

/*
Exercise 9: HAVING
Using the same logic as Exercise 7, return only the customers whose total payments exceed $150.
*/
SELECT customer_id,
    SUM(amount) AS "Total amount paid"
FROM payment
GROUP BY 1
HAVING SUM(amount) > 150;

/*
Exercise 10: HAVING with AVG
Using the film table, return each rating category where the average rental rate is above $2.50.
Include the rating and the average rental rate rounded to 2 decimal places
*/
SELECT rating,
	ROUND(AVG(rental_rate), 2) AS "Average rental rate"
FROM film
GROUP BY 1
HAVING AVG(rental_rate) > 2.50;

/*
Exercise 11: Capstone for Aggregate Functions module
Using the film table, group films by their rating and return:
- the rating
- the total number of films in that rating
- the total combined length of all films in that rating in minutes
- the average length rounded to 2 decimal places
Order results by total number of films from highest to lowest.
*/
SELECT rating,
	COUNT(title) AS "Films per rating",
	SUM(length) AS "Length of all films in that rating (minutes)",
	ROUND(AVG(length), 2) AS "Average length of all films in that rating"
FROM film
GROUP BY rating
ORDER BY 2 DESC;





/*
======================================================
Learn SQL - Codecademy | Module 3: Aggregate Functions
Practice exercise from the course lesson concepts.
Project: Trends in Startups
======================================================
*/

-- Take a look at the startups table:
SELECT *
FROM startups;

-- Calculate the total number of companies in the table
SELECT COUNT(name) AS 'Number of Startups'
FROM startups;

-- Cotal value of all companies in this table
SELECT SUM(valuation) AS 'Valuation of all companies'
FROM startups;

-- What is the highest amount raised by a startup?
SELECT name AS 'Startup with highest amount raised', MAX(raised) AS 'Amount raised'
FROM startups;

-- The maximum amount of money raised, during ‘Seed’ stage
SELECT name AS 'Startup with highest raised during Seed', MAX(raised) AS 'Amount raised'
FROM startups
WHERE stage = 'Seed';

-- What year was the oldest company on the list founded?
SELECT name AS 'Oldest company from the list', MIN(founded) AS 'Year of foundation'
FROM startups;

---------- Let's find out the valuations among different sectors ----------
-- Return the average valuation
SELECT COUNT(name) AS 'Number of companies', AVG(valuation) AS 'Average valuation'
FROM startups;

-- Return the average valuation, in each category
SELECT category, AVG(valuation) AS 'Average valuation'
FROM startups
GROUP BY category;

-- Return the average valuation, in each category and round the averages to two decimal places
SELECT category, ROUND(AVG(valuation), 2) AS 'Average valuation with 2 decimals'
FROM startups
GROUP BY category;

-- Return the average valuation, in each category, round the averages to two decimal places and lastly, order the list from highest averages to lowest
SELECT category, ROUND(AVG(valuation), 2) AS 'Average valuation (High to Low)'
FROM startups
GROUP BY category
ORDER BY 2 DESC;

---------- What are the most competitive markets? ----------
-- Return the name of each category with the total number of companies that belong to it
SELECT category, COUNT(name) AS 'Number of companies'
FROM startups
GROUP BY category;

-- Filter the previous query to only include categories that have more than three companies in them
SELECT category AS 'Categories with more than 3 companies', COUNT(name) AS 'Number of companies'
FROM startups
GROUP BY category
HAVING COUNT(name) > 3;

------- Let's see if there's a difference in startups sizes among different locations -------
-- What is the average size of a startup in each location?
SELECT location, AVG(employees) AS 'Avergae employees'
FROM startups
GROUP BY location;

-- What is the average size of a startup in each location, with average sizes above 500?
SELECT location AS 'Locations with more than 500 employees', AVG(employees) AS 'Avergae employees'
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;
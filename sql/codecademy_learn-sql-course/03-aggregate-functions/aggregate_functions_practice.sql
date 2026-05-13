/*
=======================================================
Learn SQL - Codecademy | Module 3: Aggregate Functions
Practice exercise from the course lesson concepts.
Project 1: Trends in Startups
=======================================================
*/

-- Take a look at the startups table
SELECT * FROM startups;

-- Calculate the total number of companies in the table
SELECT COUNT(name) AS 'number_of_startups'
FROM startups;

-- Total value of all companies in this table
SELECT SUM(valuation) AS 'valuation_of_all_companies'
FROM startups;

-- What is the highest amount raised by a startup?
SELECT name AS 'startup_with_highest_amount_raised', MAX(raised) AS 'amount_raised'
FROM startups;

-- The maximum amount of money raised, during ‘Seed’ stage
SELECT name AS 'startup_with_highest_raised_during_Seed', MAX(raised) AS 'amount_raised'
FROM startups
WHERE stage = 'Seed';

-- What year was the oldest company on the list founded?
SELECT name AS 'oldest_company_from_the_list', MIN(founded) AS 'year_of_foundation'
FROM startups;

---------- Let's find out the valuations among different sectors ----------
-- Return the average valuation
SELECT COUNT(name) AS 'number_of_companies', AVG(valuation) AS 'average_valuation'
FROM startups;

-- Return the average valuation, in each category
SELECT category, AVG(valuation) AS 'average_valuation'
FROM startups
GROUP BY category;

-- Return the average valuation, in each category and round the averages to two decimal places
SELECT category, ROUND(AVG(valuation), 2) AS 'average_valuation_with_2_decimals'
FROM startups
GROUP BY category;

-- Return the average valuation, in each category, round the averages to two decimal places and lastly, order the list from highest averages to lowest
SELECT category, ROUND(AVG(valuation), 2) AS 'average_valuation_high_to_low'
FROM startups
GROUP BY category
ORDER BY 2 DESC;

---------- What are the most competitive markets? ----------
-- Return the name of each category with the total number of companies that belong to it
SELECT category, COUNT(name) AS 'number_of_companies'
FROM startups
GROUP BY category;

-- Filter the previous query to only include categories that have more than three companies in them
SELECT category AS 'categories_with_more_than_3_companies', COUNT(name) AS 'number_of_companies'
FROM startups
GROUP BY category
HAVING COUNT(name) > 3;

------- Let's see if there's a difference in startups sizes among different locations -------
-- What is the average size of a startup in each location?
SELECT location, AVG(employees) AS 'average_employees'
FROM startups
GROUP BY location;

-- What is the average size of a startup in each location, with average sizes above 500?
SELECT location AS 'locations_with_more_than_500_employees', AVG(employees) AS 'average_employees'
FROM startups
GROUP BY location
HAVING AVG(employees) > 500;

/*
======================================================
Learn SQL - Codecademy | Module 3: Aggregate Functions
Practice exercise from the course lesson concepts.
Project 2: Hacker news
======================================================

In this project, I will be working with a table named hacker_news that contains stories
from Hacker News since its launch in 2007. It has the following columns:
	- title: the title of the story
	- user: the user who submitted the story
	- score: the score of the story
	- timestamp: the time of the story
	- url: the link of the story
*/

-- What are the top five stories with the highest scores?
 SELECT title, score
 FROM hacker_news
 ORDER BY 2 DESC
 LIMIT 5;

---------- Hacker News Moderating ----------
-- First, find the total score of all the stories
SELECT SUM(score) AS 'total_score_of_all_stories'
FROM hacker_news;

-- Find the individual users who have gotten combined scores of more than 200, and their combined scores
SELECT user, SUM(score) AS 'score'
FROM hacker_news
GROUP BY 1
HAVING SUM(score) > 200;

-- Add these user's scores together and divide by the total to get the percentage
SELECT (517 + 309 + 304 + 282) / 6366.0 AS 'combined_percentage_of_total_scores_in_the_website';

-- How many times has each offending user posted this link "https://www.youtube.com/watch?v=dQw4w9WgXcQ"?
SELECT user, COUNT(user) AS 'number_of_times_posted'
from hacker_news
WHERE url LIKE '%watch?v=dQw4w9WgXcQ%'
GROUP BY 1;

---------- Which sites feed Hacker News? ----------
-- First, we want to categorize each story based on their source (GitHub, Medium, or New York Times)
-- Add a column for the number of stories from each URL
SELECT COUNT(*) AS 'number_of_stories_from_each_source', -- Adding (*) instead of (url) so NULL values get counted as well
  CASE
    WHEN url LIKE '%github.com%' THEN 'GitHub'
    WHEN url LIKE '%medium.com%' THEN 'Medium'
    WHEN url LIKE '%nytimes.com%' THEN 'NY times'
    ELSE 'Other'
  END AS 'Source'
FROM hacker_news
GROUP BY 2;

-------- What's the best time to post a story? --------
-- Take a look at the timestamp column:
SELECT timestamp
FROM hacker_news
LIMIT 10;

-- Understand the strftime() function
-- strftime() allows you to return a formatted date.
SELECT timestamp,
   strftime('%H', timestamp) AS 'just_the_hour'
FROM hacker_news
GROUP BY 1
LIMIT 20;

-- Test the strftime() function writing a query that returns three columns:
  -- The hours of the timestamp
  -- The average score for each hour
  -- The count of stories for each hour
SELECT strftime('%H', timestamp) AS 'hour_the_story_was_posted',
  AVG(score) AS 'average_score',
  COUNT(*) AS 'number_of_stories'
FROM hacker_news
GROUP BY 1;

-- Edit a few things in the previous query:
  -- Round the average scores (ROUND())
  -- Rename the columns to make it more readable (AS)
  -- Add a WHERE clause to filter out the NULL values in timestamp
SELECT strftime('%H', timestamp) AS 'the_hour_the_story_was_posted',
  ROUND(AVG(score), 0) AS 'average_score',
  COUNT(*) AS 'number_of_stories'
FROM hacker_news
WHERE timestamp IS NOT NULL
GROUP BY 1
ORDER BY 2 DESC;






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
SELECT COUNT(payment_id) AS "number_of_payments"
FROM payment;

/*
Exercise 3: SUM
What is the total revenue collected across all payments?
*/
SELECT SUM(amount) AS "total_revenue"
FROM payment;

/*
Exercise 4: MAX
What is the highest single payment amount ever recorded?
*/
SELECT MAX(amount) AS "highest_payment"
FROM payment;

/*
Exercise 5: MIN
What is the lowest single payment amount ever recorded?
*/
SELECT MIN(amount) AS "lowest_payment"
FROM payment;

/*
Exercise 6: AVG with ROUND
What is the average payment amount, rounded to 2 decimal places?
*/
SELECT ROUND(AVG(amount), 2) AS "average_payment"
FROM payment;

/*
Exercise 7: GROUP BY
What is the total amount paid by each customer? Return the customer_id and their total amount paid.
*/
SELECT customer_id,
	SUM(amount) AS "total_amount_paid"
FROM payment
GROUP BY 1;

/*
Exercise 8: GROUP BY with ORDER BY
Repeat the previous query but order the results from highest total to lowest
so you can see the top spenders first.
*/
SELECT customer_id,
	SUM(amount) AS "total_amount_paid_high_to_low"
FROM payment
GROUP BY 1
ORDER BY 2 DESC;

/*
Exercise 9: HAVING
Using the same logic as Exercise 7, return only the customers whose total payments exceed $150.
*/
SELECT customer_id,
    SUM(amount) AS "total_amount_paid"
FROM payment
GROUP BY 1
HAVING SUM(amount) > 150;

/*
Exercise 10: HAVING with AVG
Using the film table, return each rating category where the average rental rate is above $2.50.
Include the rating and the average rental rate rounded to 2 decimal places
*/
SELECT rating,
	ROUND(AVG(rental_rate), 2) AS "average_rental_rate"
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
	COUNT(title) AS "films_per_rating",
	SUM(length) AS "total_length_of_films_in_that_rating_minutes",
	ROUND(AVG(length), 2) AS "average_length_of_films_in_that_rating"
FROM film
GROUP BY rating
ORDER BY 2 DESC;

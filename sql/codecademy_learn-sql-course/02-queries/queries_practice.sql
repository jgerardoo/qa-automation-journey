/*
================================================================
Learn SQL - Codecademy | Module 2: Queries
Practice exercises based on the course lesson concepts.
Scenarios generated with Claude AI assistance.
SQL written independently using the DVD Rental database,
PostgreSQL, and DBeaver.
================================================================


Exercise 1: Explore the data
Get a feel for the film table. Select all columns from it.
*/
SELECT * FROM film;

/*
Exercise 2: Distinct values
What are the distinct rental durations available across all films?
*/
SELECT DISTINCT rental_duration
FROM film;

/*
Exercise 3: Distinct with multiple columns
What distinct rating and rental rate combinations exist in the film table?
*/
SELECT DISTINCT rating, rental_rate
FROM film;

/*
Exercise 4: Filter with WHERE
Return the title and rental rate of all films that cost exactly 0.99 to rent.
*/
SELECT title, rental_rate
FROM film
WHERE rental_rate = 0.99;

/*
Exercise 5: Filter with a comparison operator
Return the title and length of all films longer than 180 minutes.
*/
SELECT title, length
FROM film
WHERE length > 180;

/*
Exercise 6: Filter with AND
Return the title, rating, and rental rate of all films that are rated 'PG' AND cost 4.99 to rent.
*/
SELECT title, rating, rental_rate
FROM film
WHERE rating = 'PG'
    AND rental_rate = 4.99;

/*
Exercise 7: Filter with OR
Return the title and rating of all films that are rated 'G' OR 'PG'.
*/
SELECT title, rating
FROM film
WHERE rating = 'G'
	OR rating = 'PG';

/*
Exercise 8: Pattern matching with LIKE
Return the titles of all films that contain the word 'Love' anywhere in the title.
*/
SELECT title
FROM film
WHERE title LIKE '%Love%';

/*
Exercise 9: NULL check
Some films may have no description. Return the title of any films where description IS NULL.
*/
SELECT title
FROM film
WHERE description IS NULL;

/*
Exercise 10: Sort and limit
Create a Top 5 longest films list. Return the title and length, ordered from longest to shortest.
*/
SELECT title, length
FROM film
ORDER BY length DESC
LIMIT 5;

/*
Exercise 11: CASE statement
Return each film's title and a new column called length_category using this logic:
    length > 180 is 'Epic'
    length > 120 is 'Long'
    length > 90 is 'Standard'
    Everything else is 'Short'
*/
SELECT title,
	CASE
		WHEN length > 180 THEN 'Epic'
		WHEN length > 120 THEN 'Long'
		WHEN length > 90 THEN 'Standard'
		ELSE 'Short'
	END AS "length_category"
FROM film;





/*
=================================================
Learn SQL - Codecademy | Module 2: Queries
Practice exercise from the course lesson concepts.
Project: New York Restaurants
=================================================
*/

-- Getting a feel for the nomnom table
SELECT *
FROM nomnom;

-- What are the distinct neighborhoods?
SELECT DISTINCT neighborhood
from nomnom;

-- What are the distinct cuisine types?
SELECT DISTINCT cuisine
from nomnom;

-- Suppose we would like some Chinese takeout. What are our options?
SELECT name, cuisine
FROM nomnom
WHERE cuisine = 'Chinese';

-- Return all the restaurants with reviews of 4 and above
SELECT name, review
FROM nomnom
WHERE review >= 4;

-- Return all the restaurants that are Italian and $$$
SELECT name, cuisine, price
FROM nomnom
WHERE cuisine = 'Italian'
    AND price = '$$$';

-- Return all the restaurants that contains the word ‘meatball’ in it.
SELECT name
FROM nomnom
WHERE name LIKE '%meatball%';

-- Find all the close by spots in Midtown, Downtown or Chinatown
SELECT name, neighborhood
FROM nomnom
WHERE neighborhood = 'Midtown'
    OR neighborhood = 'Downtown'
    OR neighborhood = 'Chinatown';

-- Find all the health grade pending restaurants (empty values).
SELECT name, health
FROM nomnom
WHERE health IS NULL;

-- Create a Top 10 Restaurants Ranking based on reviews
SELECT name, review
FROM nomnom
ORDER BY review DESC
LIMIT 10;

/*
-- Use a CASE statement to change the rating system to:
        review > 4.5 is Extraordinary
        review > 4 is Excellent
        review > 3 is Good
        review > 2 is Fair
        Everything else is Poor
    Dont forget to give the new column an alias!
*/
SELECT name,
    CASE
        WHEN review > 4.5 THEN 'Extraordinary'
        WHEN review > 4 THEN 'Excellent'
        WHEN review > 3 THEN 'Good'
        WHEN review > 2 THEN 'Fair'
        ELSE 'Poor'
    END AS 'Review'
FROM nomnom;
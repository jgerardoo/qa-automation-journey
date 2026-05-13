/*
======================================================
Learn SQL - Codecademy | Module 3: Aggregate Functions
Exercises and key queries from the course
======================================================
*/

----- COUNT -----
-- Use COUNT to count the number of rows in a table
SELECT COUNT(*) 
FROM fake_apps;

SELECT COUNT(*) 
FROM fake_apps
WHERE price = 0.0;
/*
NOTE: You can also do COUNT() on a name column, COUNT(name) counts the number of rows
where the name column is not NULL. If a row has a value for name, it is included in the count.
If name is NULL, that row is not counted.
*/

----- SUM -----
-- Use SUM to add up all values in a column
SELECT SUM(downloads) 
FROM fake_apps;

SELECT SUM(downloads) 
FROM fake_apps
WHERE price = 0.0;

----- MAX -----
-- Use MAX to find the highest value in a column
SELECT MAX(price) 
FROM fake_apps;

----- MIN -----
-- Use MIN to find the lowest value in a column
SELECT MIN(price) 
FROM fake_apps;

----- AVG -----
-- Use AVG to calculate the average value in a column
SELECT AVG(price) 
FROM fake_apps;

----- ROUND -----
-- Make results easier to read by rounding them to a certain number of decimal places
SELECT name, ROUND(price, 0)
FROM fake_apps;

-- Round the average price off an app
SELECT ROUND(AVG(price), 2)
FROM fake_apps;

----- GROUP BY I -----
-- Use GROUP BY to group rows together based on the values in a column
-- The total number of apps for each price
SELECT price, COUNT(*) AS "# of Apps"
FROM fake_apps
GROUP BY price;

-- Total number of apps that have been downloaded more than 20,000 times, at each price
SELECT price, COUNT(*) AS "# apps downloaded 20000+ times per price"
FROM fake_apps
WHERE downloads > 20000
GROUP BY price;

-- Total number of downloads for each category.
SELECT category, SUM(downloads) AS "Downloads per category"
FROM fake_apps
GROUP BY category;

----- GROUP BY II -----
-- GROUP BY with a calculation done on a column
SELECT ROUND(imdb_rating),
   COUNT(name)
FROM movies
GROUP BY 1              -- groups the results by the first column, which is the rounded IMDb rating
ORDER BY 1;             -- orders the results by the first column, which is the rounded IMDb rating

SELECT category,
    price,
    AVG(downloads)
FROM fake_apps
GROUP BY 1, 2;          -- groups the results by the first and second columns, which are category and price

----- HAVING -----
-- Use HAVING to filter groups based on an aggregate function
SELECT year,
    genre,
    COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;

-- Return average downloads (rounded) and the number of apps at each price point for prices that have more than 10 apps
SELECT price,
    ROUND(AVG(downloads)) AS "AVG downloads",
    COUNT(*)
FROM fake_apps
GROUP BY price
HAVING COUNT(*) > 10;

/* NOTE:
When we want to limit the results of a query based on values of the individual rows, use WHERE.
When we want to limit the results of a query based on an aggregate property, use HAVING. */

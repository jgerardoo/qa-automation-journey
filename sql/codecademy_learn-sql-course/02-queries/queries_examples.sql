/*
===========================================
Learn SQL - Codecademy | Module 2: Queries
Exercises and key queries from the course
===========================================
*/

----- SELECT -----
-- Select individual columns by their names to do the query
SELECT name, genre, year
FROM movies;

----- AS -----
-- Keyword that allows to rename a column or table using an alias
SELECT genre AS "Movie Genre"
FROM movies;

----- DISTINCT -----
-- Keyword to return unique values in the output.
-- It filters out all duplicate values in the specified column(s)
SELECT DISTINCT genre 
FROM movies;

----- WHERE -----
-- Use the where clause to filter rows based on a condition
SELECT *
FROM movies
WHERE imdb_rating > 8;

SELECT * 
FROM movies 
WHERE year > 2014;

----- LIKE -----
-- Use the LIKE operator to filter rows based on a pattern
SELECT *
FROM movies
WHERE name LIKE 'Se_en';   -- _ matches any single character

----- LIKE % -----
-- % matches zero or more characters in a pattern
SELECT * 
FROM movies
WHERE name LIKE 'A%';   -- matches any name that starts with A

SELECT * 
FROM movies
WHERE name LIKE '%a';   -- matches any name that ends with a

SELECT * 
FROM movies 
WHERE name LIKE '%man%';   -- matches any name that contains "man"

----- NULL -----
-- Unknown or missing values are indicated by NULL
SELECT name
FROM movies 
WHERE imdb_rating IS NOT NULL;  -- filters for all movies with an IMDb rating

SELECT name
FROM movies 
WHERE imdb_rating IS NULL;  -- filters for all movies without an IMDb rating

----- BETWEEN -----
-- Filters rows based on a range of values
SELECT *
FROM movies
WHERE year BETWEEN 2000 AND 2010;  -- includes movies from 2000 to 2010, inclusive

SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';   -- includes movies whose names start with letters A through J

----- AND -----
-- Use AND to combine multiple conditions in a WHERE clause
-- both conditions must be true for the row to be included in the result
SELECT * 
FROM movies
WHERE year BETWEEN 1990 AND 1999    -- first condition: movies from the 90s
    AND genre = 'romance';           -- second condition: movies in the romance genre

SELECT *
FROM movies
WHERE year < 1985               -- first condition: selects all movies made prior to 1985
    AND genre = 'horror'        -- second condition: selects all movies in the horror genre

----- OR -----
-- Use OR to combine multiple conditions in a WHERE clause
-- either condition can be true for the row to be included in the result
SELECT *
FROM movies
WHERE year > 2014               -- first condition: movies made after 2014
   OR genre = 'action';         -- second condition: movies in the action genre

SELECT *
FROM movies
WHERE genre = 'romance' OR genre = 'comedy';  -- selects all movies in the romance or comedy genres

----- ORDER BY -----
-- Use ORDER BY to sort the results of a query by one or more columns
SELECT *
FROM movies
ORDER BY name;                  -- sorts the movies alphabetically by name in ascending order (A-Z)

SELECT *
FROM movies
ORDER BY name DESC;             -- sorts the movies alphabetically by name in descending order (Z-A)

SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC;      -- sorts the movies by IMDb rating from highest to lowest

----- LIMIT -----
-- Use LIMIT to restrict the number of rows returned by a query
SELECT *
FROM movies
LIMIT 10;                       -- returns only the first 10 movies in the table

SELECT *
FROM movies
ORDER BY imdb_rating DESC
LIMIT 5;                        -- returns only the top 5 movies by IMDb rating

/*
----- CASE -----
 Use CASE to implement conditional logic in a query
    If the rating is above 8, then it is Fantastic.
    If the rating is above 6, then it is Poorly Received.
    Else, Avoid at All Costs.
*/
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END AS 'Review'
FROM movies;

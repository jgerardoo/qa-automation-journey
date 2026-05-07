-- ============================================================
-- Learn SQL — Codecademy
-- Exercises and key queries from the course
-- ============================================================


-- ------------------------------------------------------------
-- SELECT basics
-- Retrieve all columns from a table
-- ------------------------------------------------------------
SELECT * FROM celebs;


-- Retrieve specific columns only
SELECT name, age FROM celebs;


-- ------------------------------------------------------------
-- CREATE TABLE
-- Define a new table structure
-- ------------------------------------------------------------
CREATE TABLE celebs (
  id    INTEGER,
  name  TEXT,
  age   INTEGER
);


-- ------------------------------------------------------------
-- INSERT
-- Add a new row to a table
-- ------------------------------------------------------------
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 29);


-- ------------------------------------------------------------
-- UPDATE
-- Modify an existing row
-- ------------------------------------------------------------
UPDATE celebs
SET age = 22
WHERE id = 1;


-- ------------------------------------------------------------
-- DELETE
-- Remove a row from a table
-- ------------------------------------------------------------
DELETE FROM celebs
WHERE age IS NULL;


-- ------------------------------------------------------------
-- ALTER TABLE
-- Add a new column to an existing table
-- ------------------------------------------------------------
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;


-- ------------------------------------------------------------
-- WHERE — Filtering rows
-- ------------------------------------------------------------
SELECT * FROM movies WHERE imdb_rating > 8;

SELECT * FROM movies WHERE year BETWEEN 2000 AND 2010;

SELECT * FROM movies WHERE name LIKE 'Se_en';   -- _ matches any single character
SELECT * FROM movies WHERE name LIKE '%man%';   -- % matches zero or more characters


-- ------------------------------------------------------------
-- IS NULL / IS NOT NULL
-- Check for missing data — important for data validation in QA
-- ------------------------------------------------------------
SELECT * FROM movies WHERE imdb_rating IS NOT NULL;


-- ------------------------------------------------------------
-- ORDER BY + LIMIT
-- Sort results and cap the number returned
-- ------------------------------------------------------------
SELECT name, year, imdb_rating
FROM movies
ORDER BY imdb_rating DESC
LIMIT 10;


-- ------------------------------------------------------------
-- CASE — Conditional logic inside a query
-- Useful for categorizing test data in QA reports
-- ------------------------------------------------------------
SELECT name,
  CASE
    WHEN imdb_rating > 8  THEN 'Excellent'
    WHEN imdb_rating > 6  THEN 'Good'
    ELSE 'Below Average'
  END AS rating_category
FROM movies;


-- Add exercises below as you progress through the course

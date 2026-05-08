












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

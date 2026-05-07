-- ============================================================
-- Learn SQL: Aggregate Functions — Codecademy
-- Exercises and key queries from the course
-- ============================================================


-- ------------------------------------------------------------
-- COUNT — How many rows match a condition
-- QA use: verify the right number of records were created
-- ------------------------------------------------------------
SELECT COUNT(*) FROM orders;

SELECT COUNT(*) FROM orders WHERE status = 'completed';


-- ------------------------------------------------------------
-- SUM — Total of a numeric column
-- QA use: validate that totals match expected values
-- ------------------------------------------------------------
SELECT SUM(total) FROM orders WHERE user_id = 42;


-- ------------------------------------------------------------
-- AVG — Average value
-- ------------------------------------------------------------
SELECT AVG(imdb_rating) FROM movies WHERE year = 2020;


-- ------------------------------------------------------------
-- MIN / MAX — Lowest and highest values
-- ------------------------------------------------------------
SELECT MIN(price), MAX(price) FROM products WHERE category = 'electronics';


-- ------------------------------------------------------------
-- GROUP BY — Aggregate per category
-- QA use: count records grouped by status to spot data anomalies
-- ------------------------------------------------------------
SELECT status, COUNT(*) AS total
FROM orders
GROUP BY status;


-- ------------------------------------------------------------
-- HAVING — Filter after grouping (WHERE works before, HAVING after)
-- ------------------------------------------------------------
SELECT user_id, COUNT(*) AS order_count
FROM orders
GROUP BY user_id
HAVING COUNT(*) > 5;


-- ------------------------------------------------------------
-- ROUND — Clean up decimal output
-- ------------------------------------------------------------
SELECT ROUND(AVG(imdb_rating), 2) AS avg_rating FROM movies;


-- Add exercises below as you progress through the course

/*
================================================
Learn SQL - Codecademy | Module 1: Manipulation
Exercises and key queries from the course
================================================
*/

----- SELECT -----
-- Retrieve all columns from a table
SELECT * FROM celebs;

-- Retrieve specific columns only
SELECT name, age FROM celebs;


----- CREATE TABLE -----
-- Define a new table structure
CREATE TABLE celebs (
  id    INTEGER,
  name  TEXT,
  age   INTEGER
);


----- INSERT -----
-- Add a new row to a table using INSERT INTO
INSERT INTO celebs (id, name, age)
VALUES (1, 'Justin Bieber', 29);


----- ALTER -----
-- Add a new column to an existing table
ALTER TABLE celebs
ADD COLUMN twitter_handle TEXT;

/* NOTE: NULL is a special value in SQL that represents missing or unknown data.
The rows that existed before the column was added will have NULL values for column_name.
*/


----- UPDATE -----
-- Modify an existing row
UPDATE celebs 
SET twitter_handle = '@taylorswift13' 
WHERE id = 4;


----- DELETE -----
-- Remove a row (or more) from a table
DELETE FROM celebs 
WHERE twitter_handle IS NULL;

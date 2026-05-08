--------------------------------------------
-- Learn SQL — Codecademy
-- Exercises and key queries from the course
--------------------------------------------

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



--------------------------------------------
-- Learn SQL — Codecademy
-- Practice exercise
--------------------------------------------

-- Create a table named friends with id, name, and birthday columns
CREATE TABLE friends (
  id INTEGER PRIMARY KEY,
  name TEXT NOT NULL,
  birthday DATE NOT NULL
);

-- add "Ororo Munroe" to friends.
INSERT INTO friends (id, name, birthday)
VALUES (1, 'Ororo Munroe', '1940-05-30');

-- add two more records
INSERT INTO friends (id, name, birthday)
VALUES (2, 'Pepe Pecas', '1990-10-12');

INSERT INTO friends (id, name, birthday)
VALUES (3, 'John Smith', '1990-10-13');

-- update "Ororo Munroe" name to "Storm"
UPDATE friends
SET name = 'Storm'
WHERE id = 1;

-- add a new email column
ALTER TABLE friends
ADD COLUMN email TEXT;

-- update email for all records in the table
UPDATE friends
SET email = 'storm@codecademy.com'
WHERE id = 1;

UPDATE friends
SET email = 'pepe@codecademy.com'
WHERE id = 2;

UPDATE friends
SET email = 'john@codecademy.com'
WHERE id = 3;

-- remove record with id 1
DELETE FROM friends
WHERE id = 1;

-- check the results
SELECT * 
FROM friends;
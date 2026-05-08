/*
========================================================
Self practice using Claude AI to generate the exercises
and then writing the SQL code to complete it.
DVD Rental database using DBeaver and PostgreSQL
========================================================

Exercise 1: Create a table
The DVD store wants to track customer feedback.
Create a table called feedback with the following columns:

id as INTEGER PRIMARY KEY
customer_id as INTEGER, not nullable
rating as INTEGER, not nullable
comment as TEXT
*/
CREATE TABLE feedback (
    id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    rating INTEGER NOT NULL,
    comment TEXT
);

/*
Exercise 2: Insert records
Add 3 feedback records to the table.
Use any customer IDs from 1 to 599 (those are the real customer IDs in the database).
Make up ratings between 1 and 5 and write any comment you like.
*/
INSERT INTO feedback (id, customer_id, rating, comment)
VALUES  (1, 11, 4, 'The store has a great selection of movies!'),
        (2, 22, 2, 'Good location but not enough copies of popular titles.'),
        (3, 33, 3, 'The staff is helpful, but the selection is limited.');

/*
Exercise 3: Update a record
One customer called in and said their rating should have been 5, not whatever you gave them.
Update that record using their id.
*/
UPDATE feedback
SET rating = 5
WHERE id = 1;

/*
Exercise 4: Add a column
The store also wants to track the date the feedback was submitted.
Add a column called submitted_at with type DATE.
*/
ALTER TABLE feedback
ADD COLUMN submitted_at DATE;

/*
Exercise 5: Update the new column
Populate the submitted_at column for all 3 records with any dates you choose.
*/
UPDATE feedback
SET submitted_at = '2024-05-08'
WHERE id = 1;

UPDATE feedback
SET submitted_at = '2024-05-07'
WHERE id = 2;

UPDATE feedback
SET submitted_at = '2024-05-06'
WHERE id = 3;

/*
Exercise 6: Delete a record
One customer asked to have their feedback removed. Delete one record by id.
*/
DELETE FROM feedback
WHERE customer_id = 22;

/*
Exercise 7: Verify your work
Run a SELECT to see the current state of the table.
*/
SELECT * FROM feedback;

/*
Exercise 8: Clean up
Drop the table entirely when you're done with it.
*/
DROP TABLE feedback;




/*
=============================
Learn SQL — Codecademy course
Lesson 1: Manipulation
Practice exercise
=============================
*/

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
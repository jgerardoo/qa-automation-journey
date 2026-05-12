/*
================================================================
Learn SQL - Codecademy | Module 4 Practice: Multiple Tables
Practice exercises based on the course lesson concepts.
Scenarios generated with Claude AI assistance.
SQL written independently using the DVD Rental database,
PostgreSQL, and DBeaver.
================================================================


Exercise 1: Explore the relationships
Before joining anything, look at the customer, payment, and rental tables individually.
Run a SELECT * with LIMIT 5 on each one to understand what columns they have
*/
SELECT * FROM customer LIMIT 5;
SELECT * FROM payment LIMIT 5;
SELECT * FROM rental LIMIT 5;

/*
Exercise 2: INNER JOIN
Return the first name, last name, and amount paid for every payment.
You will need to join the customer and payment tables.
*/
SELECT c.first_name, c.last_name, p.amount
FROM customer c
INNER JOIN payment p
	ON c.customer_id = p.customer_id;

/*
Exercise 3: INNER JOIN with filter
Using the same join as Exercise 2, return only payments where the amount is greater than $10.
Include first name, last name, and amount.
*/
SELECT c.first_name, c.last_name, p.amount
FROM customer c
INNER JOIN payment p
	ON c.customer_id = p.customer_id
WHERE amount > 10;

/*
Exercise 4: LEFT JOIN
Some customers may have never made a payment. Return all customers and any payments they have made.
Include first name, last name, and amount. Use a LEFT JOIN so customers with no payments still appear.
*/
SELECT c.first_name, c.last_name, p.amount
FROM customer c
LEFT JOIN payment p
    ON c.customer_id = p.customer_id;

/*
Exercise 5: INNER JOIN across three tables
Return the customer first name, last name, and the title of every film they have rented.
You will need to join customer, rental, inventory, and film.
Take it step by step: start with customer and rental, then add inventory, then film
*/
SELECT c.first_name, c.last_name, f.title
FROM customer c
INNER JOIN rental r ON c.customer_id = r.customer_id
INNER JOIN inventory i ON r.inventory_id = i.inventory_id
INNER JOIN film f ON i.film_id = f.film_id
ORDER BY 1;

/*
Exercise 6: UNION
The store wants a single list of all first and last names from both the customer table and the staff table.
Use UNION to stack them together. Include a column that identifies which table each row came from
*/
SELECT c.first_name, c.last_name, 'customer' AS "source"
FROM customer c
UNION
SELECT s.first_name, s.last_name, 'staff' AS "source"
FROM staff s;

/*
Exercise 7: Aggregate with JOIN
Return each customer's full name and the total amount they have spent.
Join customer and payment, group by customer, and order from highest spender to lowest.
*/
SELECT c.first_name, c.last_name, SUM(p.amount) AS "total_spent"
FROM customer c
INNER JOIN payment p
    ON c.customer_id = p.customer_id 
GROUP BY c.customer_id
ORDER BY 3 DESC;

/*
Exercise 8: Aggregate with JOIN and HAVING
Repeat Exercise 7 but only return customers who have spent more than $150 total
*/
SELECT c.first_name, c.last_name, SUM(p.amount) AS "total_spent"
FROM customer c
INNER JOIN payment p
    ON c.customer_id = p.customer_id
GROUP BY c.customer_id
HAVING SUM(p.amount) > 150
ORDER BY 3 DESC;






/*
======================================================
Learn SQL - Codecademy | Module 4: Multiple Tables
Practice exercise from the course lesson concepts.
Project: Lyft Trip Data
    Database Schema:
        - trips: trips information
        - riders: user data
        - cars: autonomous cars
======================================================
 */

-- Examine the three tables
SELECT * FROM cars;
SELECT * FROM riders;
SELECT * FROM trips;

-- Whats the primary key in each table?
    -- cars: id
    -- riders: id
    -- trips: id

-- Try out a simple cross join between riders and cars
SELECT *
FROM riders
JOIN cars;

-- Create a Trip Log with the trips and its users using a LEFT JOIN
SELECT *
FROM trips
LEFT JOIN riders
    ON trips.rider_id = riders.id;

-- Create a link between the trips and the cars used during those trips using an INNER JOIN
SELECT *
FROM trips
INNER JOIN cars
    ON trips.car_id = cars.id;

-- There are three new users this month. Stack the riders table on top of the new table named riders2.
SELECT *
FROM riders
UNION
SELECT *
FROM riders2;

-------- Bonus: Queries and Aggregates --------
-- What is the average cost of a trip?
SELECT COUNT(id) AS "number_of_trips", ROUND(AVG(cost), 2) AS "trip_avg_cost"
FROM trips;

-- Find all the riders who have used Lyft less than 500 times!
SELECT first, last, username, total_trips
FROM riders
WHERE total_trips < 500
UNION
SELECT first, last, username, total_trips
FROM riders2
WHERE total_trips < 500;

-- Calculate the number of cars that are active.
SELECT COUNT(id) AS "active_car_count", status
FROM cars
WHERE status = "active"
GROUP BY status;

-- Write a query that finds the two cars that have the highest trips_completed
SELECT *
FROM cars
ORDER BY trips_completed DESC
LIMIT 2;
/*
======================================================
Learn SQL - Codecademy | Module 4: Multiple Tables
Exercises and key queries from the course
======================================================



---------- Primary Key and Foreign Key ----------
Primary Key: A unique identifier for each record in a table
    - customer_id in the customers table
Foreign Key: A field in one table that refers to the primary key in another table
    - customer_id in the orders table that references customer_id in the customers table
*/

-- Declare a primary key
CREATE TABLE Departments (
    department_id int PRIMARY KEY,
    department_name varchar(255),
    department_description text
);

-- Declare a foreign key
CREATE TABLE Employees (
    employee_id int NOT NULL,
    employee_name varchar(255),
    department_id int,           -- The foreign key referencing department_id in the Departments table
    
    PRIMARY KEY (employee_id),
    FOREIGN KEY (department_id) REFERENCES Departments(department_id)
);


-- JOIN / INNER JOIN --
-- Is the default JOIN and it will only return results matching the condition specified by ON
-- Combine orders and customers tables
SELECT *
FROM orders
JOIN subscriptions
    ON orders.subscription_id = subscriptions.subscription_id;

-- Example specifying the columns we want to show:
SELECT orders.order_id, customers.customer_name
FROM orders
JOIN customers
    ON orders.customer_id = customers.customer_id;

-- Combine orders and customers tables where description is equal to ‘Fashion Magazine’.
SELECT *
FROM orders
JOIN subscriptions
    ON orders.subscription_id = subscriptions.subscription_id
WHERE subscriptions.description = "Fashion Magazine";


-- LEFT JOIN --
-- Keeps all rows from the first table, regardless of whether there is a matching row in the second table
-- How many users subscribe to the print newspaper, but not the online newspaper
SELECT *
FROM newspaper
LEFT JOIN online
    ON newspaper.id = online.id
WHERE online.id IS NULL;


-- RIGHT JOIN --
-- Keeps all rows from the second table, regardless of whether there is a matching row in the first table
-- How many users subscribe to the online newspaper, but not the print newspaper
SELECT *
FROM newspaper
RIGHT JOIN online
    ON newspaper.id = online.id
WHERE newspaper.id IS NULL;


-- CROSS JOIN --
-- Returns the Cartesian product of the two tables, meaning it combines every row from the first table with every row from the second table
-- Get all combinations of shirt colors and pants colors
SELECT shirts.shirt_color, pants.pants_color
FROM shirts
CROSS JOIN pants;


-- UNION --
-- Combines the results of two SELECT statements into a single result set, eliminating duplicate rows
-- Get a list of all subscribers to the newspaper and online, without duplicates
SELECT *
FROM newspaper
UNION
SELECT *
FROM online;


-- WITH --
-- Common Table Expressions (CTEs) that allow you to define temporary result sets that can be referenced
-- within a SELECT, INSERT, UPDATE, or DELETE statement
WITH previous_query AS(
    SELECT customer_id,
    COUNT(subscription_id) AS 'subscriptions'
FROM orders
GROUP BY customer_id
)
SELECT customers.customer_name, previous_query.subscriptions
FROM previous_query
JOIN customers
    ON previous_query.customer_id = customers.customer_id


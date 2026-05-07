-- ============================================================
-- Learn SQL: Multiple Tables — Codecademy
-- Exercises and key queries from the course
-- ============================================================


-- ------------------------------------------------------------
-- JOIN — Combine rows from two tables using a shared key
-- QA use: verify relationships between records across tables
-- ------------------------------------------------------------

-- INNER JOIN — only rows that match in both tables
SELECT orders.id, customers.name, orders.total
FROM orders
JOIN customers ON orders.customer_id = customers.id;


-- LEFT JOIN — all rows from left table, matched rows from right
-- Useful for finding records with missing relationships
SELECT customers.name, orders.id
FROM customers
LEFT JOIN orders ON customers.id = orders.customer_id
WHERE orders.id IS NULL; -- customers who have never placed an order


-- ------------------------------------------------------------
-- Multiple JOINs — linking three or more tables
-- ------------------------------------------------------------
SELECT customers.name, orders.id, products.name AS product
FROM orders
JOIN customers ON orders.customer_id = customers.id
JOIN products  ON orders.product_id  = products.id;


-- ------------------------------------------------------------
-- WITH (Common Table Expression / CTE)
-- Gives a temporary name to a subquery for readability
-- ------------------------------------------------------------
WITH high_value_orders AS (
  SELECT * FROM orders WHERE total > 500
)
SELECT customers.name, high_value_orders.total
FROM high_value_orders
JOIN customers ON high_value_orders.customer_id = customers.id;


-- ------------------------------------------------------------
-- UNION — Stack results from two queries vertically
-- Both queries must have the same number and type of columns
-- ------------------------------------------------------------
SELECT name FROM customers_us
UNION
SELECT name FROM customers_eu;


-- Add exercises below as you progress through the course

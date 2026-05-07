# SQL Notes

Personal notes written in my own words as I go through the Codecademy SQL courses.  
Updated continuously throughout Phase 1.

---

## Core Concepts

### What is SQL?
SQL (Structured Query Language) is the standard language for interacting with relational databases.
In QA, this means I can query the database directly to verify that test actions produced the correct data — independent of what the UI is showing.

---

## SELECT — Retrieving Data

```sql
SELECT column1, column2 FROM table_name;
SELECT * FROM table_name; -- * means all columns
```

---

## WHERE — Filtering Results

```sql
SELECT * FROM users WHERE status = 'active';
SELECT * FROM orders WHERE total > 100;
```

---

## ORDER BY — Sorting

```sql
SELECT * FROM products ORDER BY price ASC;
SELECT * FROM products ORDER BY price DESC;
```

---

## LIMIT — Restricting Rows Returned

```sql
SELECT * FROM logs LIMIT 10; -- useful for checking recent records
```

---

<!-- Add new concepts here as you learn them -->

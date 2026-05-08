# SQL Notes

Personal notes written in my own words as I go through the Codecademy SQL courses.  
Updated continuously throughout Phase 1.

---

## Core Concepts

### What is SQL?
SQL (Structured Query Language) is the standard language for interacting with relational databases.
In QA, this means I can query the database directly to verify that test actions produced the correct data — independent of what the UI is showing.

### Relational database
A relational database is a database that organizes information into one or more tables.
A table is a collection of data organized into rows and columns. Tables are sometimes referred to as relations.
A column is a set of data values of a particular type.
A row is a single record in a table. The first row in the “table_name” has:
An id of "1"
A name of "Jesse Varela"
An age of "35"

All data stored in a relational database is of a certain data type. Some of the most common data types are:
- integer - whole number between -2147483648 and 2147483647. Postgres also includes alternatives smallint and bigint.
- real - floating-point type that has variable-precision with a maximum range of 6 decimals.
- text - range of characters of unlimited length.
- char - range of characters of fixed length n, an error will be raised for any entries that exceed length n. Entries that are shorter than n will be space-padded.
- varchar - range of characters of variable length with a maximum length n. However, unlike char there is no space-padding to extend entries shorter than n.
- date - date (without any time value), such as 2022-06-21 (ISO 8601 format) and 6/21/2022.

### Constraints
Constraints in SQL are the rules applied to the values of individual columns.
Constraints that add information about how a column can be used are invoked after specifying the data type for a column.

Some constraints that can be set:
- PRIMARY KEY columns can be used to uniquely identify the row.
- UNIQUE columns have a different value for every row.
- NOT NULL columns must have a value.
- DEFAULT columns take this value (passed as an additional argument) if the new row inserted does not specify a value for that column.

Note: There can be only one PRIMARY KEY column per table, but there can be multiple UNIQUE columns in the table.

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

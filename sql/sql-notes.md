# SQL Notes

Notes with relevant information taken as I go through the Codecademy SQL courses.

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

### Statements
A statement is text that the database recognizes as a valid command. Statements always end in a semicolon (;).
```sql
CREATE TABLE table_name (
   column_1 data_type, 
   column_2 data_type, 
   column_3 data_type
);
```

#### Types of Statements
- Data Query Language (DQL): Includes commands for performing queries on data within schema objects, retrieving some schema relation based on the query passed to it.
  - SELECT retrieves data from the database.
- Data Definition Language (DDL): Includes commands used to define the database schema. These commands are used to create and modify the structure of database objects.
  - CREATE creates an object in the database.
  - DROP deletes an object from the database.
  - ALTER changes the definition of an existing object in the database.
- Data Manipulation Language (DML): Includes commands used to modify the data stored in the database.
  - INSERT inserts new data into a database table.
  - UPDATE alters data in a database table.
  - DELETE removes data from a database table.
- Data Control Language (DCL): Includes commands dealing with the controls and properties of the DBMS, such as rights and permissions to database objects.
  - GRANT grants a user permissions on a database object.
  - REVOKE removes a user’s permissions on a database object.

### Agregate Functions
These functions are used to perform calculations on the raw data to answer specific data questions.
Calculations performed on multiple rows of a table are called aggregates.
Some important aggregates:
- COUNT(): count the number of rows
- SUM(): the sum of the values in a column
- MAX() / MIN(): the largest/smallest value
- AVG(): the average of the values in a column
- ROUND(): round the values in the column

---

## Basic examples of SQL code
Return first and last name from a table of users
```sql
SELECT firstName, lastName
FROM users;
```

Delete records from a transaction table with a particular field value
```sql
DELETE FROM transactionTable
WHERE transactionKey = '5';
```

Create a table with three fields
```sql
CREATE TABLE cars (
  manufacturer VARCHAR(40),
  model VARCHAR(40),
  year INT
);
```

### Using a plain string literal to stamp a fixed label on every row in a query
```sql
SELECT first_name, last_name, 'customer' AS "source"
FROM customer
UNION
SELECT first_name, last_name, 'staff' AS "source"
FROM staff;
```

---

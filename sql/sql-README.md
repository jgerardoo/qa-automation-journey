# SQL Practice

Learning SQL to support database validation in automation test suites.  
**Courses:** Codecademy — Learn SQL, Aggregate Functions, Multiple Tables

Practice queries written alongside the Codecademy Learn SQL course,
using the PostgreSQL DVD Rental sample database

---

## Courses progress

| Course | Status | Hours |
|---|---|---|
| Learn SQL | 🔄 In Progress | 5 hrs |
| Learn SQL: Aggregate Functions | ⏳ Upcoming | 1 hr |
| Learn SQL: Multiple Tables | ⏳ Upcoming | 1 hr |

---

## Environment
- CodeAcademy website
- PostgreSQL 16
- DVD Rental sample database (postgresqltutorial.com)
- DBeaver Community (GUI client)

---

## Workflow for personal practice
1. Complete a lesson from the course (in the course website)
2. Complete the lesson practice(s)
3. Use Claude AI to generate more exercises based on the lesson completed
4. Write queries in DBeaver against the DVD Rental database using the exercies provided by Claude AI
5. Save all the working queries (from both the course website and AI generated) into the .sql files in this repo

---

## Folder structure (this might be adjusted as progress is made)
Each folder/file maps to a topic covered in the course. 
```
qa-automation-journey/
└── sql/
    ├── sql-README.md
    ├── cheatsheet.md
    ├── sql-notes.md
    ├── learn-sql-course/
    │   ├── 00_learn_sql.sql
    │   ├── 01-manipulation/
    │   │   └── manipulation.sql
    │   ├── 02-queries/
    │   │   └── queries.sql
    │   ├── 03-aggregate-functions/
    │   │   └── aggregate_functions.sql
    │   └── 04-multiple-tables/
    │       └── multiple_tables.sql
    ├── learn-sql-aggregate-functions-course/
    │   └── 01_aggregate_functions.sql
    └── learn-sql-multiple-tables-course/
        └── 01_multiple_tables.sql
```

---

## QA Relevance

SQL is used in automation testing to:
- Verify that a UI action (form submit, login) created the correct database record
- Validate data integrity independently of the front-end
- Investigate bug reports at the data layer
- Assert backend state when UI assertions are not enough

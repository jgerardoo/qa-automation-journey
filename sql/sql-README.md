# SQL — Phase 1

Learning SQL to support database validation in automation test suites.  
**Courses:** Codecademy — Learn SQL, Aggregate Functions, Multiple Tables

---

## Courses

| Course | Status | Hours |
|---|---|---|
| Learn SQL | 🔄 In Progress | 5 hrs |
| Learn SQL: Aggregate Functions | ⏳ Upcoming | 1 hr |
| Learn SQL: Multiple Tables | ⏳ Upcoming | 1 hr |

---

## Files

| File | Description |
|---|---|
| `notes.md` | Concepts explained in my own words |
| `01_learn_sql.sql` | Exercises from the Learn SQL course |
| `02_aggregate_functions.sql` | Exercises from Aggregate Functions |
| `03_multiple_tables.sql` | Exercises from Multiple Tables |

---

## Folder structure (this might be adjusted as progress is made)
```
qa-automation-journey/
└── sql/
    ├── sql-README.md
    ├── 01-select-and-filter/
    │   ├── basic_select.sql
    │   ├── where_clauses.sql
    │   └── sorting.sql
    ├── 02-aggregations/
    │   ├── group_by.sql
    │   └── having.sql
    ├── 03-joins/
    │   ├── inner_join.sql
    │   ├── left_join.sql
    │   └── multi_table.sql
    ├── 04-subqueries/
    │   └── subqueries.sql
    └── cheatsheet.md
```

---

## QA Relevance

SQL is used in automation testing to:
- Verify that a UI action (form submit, login) created the correct database record
- Validate data integrity independently of the front-end
- Investigate bug reports at the data layer
- Assert backend state when UI assertions are not enough

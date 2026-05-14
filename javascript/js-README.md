# JavaScript — Phase 2

Building JavaScript fundamentals as the primary language for web automation with Playwright.  
This phase uses a hybrid approach across three platforms to balance structured learning, depth on critical topics, and hands-on practice.

---

## Why JavaScript

JavaScript is the language used in the Playwright automation framework, which is the primary target for web automation in this career transition. Rather than learning JS as a general-purpose language, the focus here is on the subset of JS concepts that Playwright depends on directly — particularly async/await, arrow functions, ES6 modules, and array methods.

---

## Learning Approach — Three Layers

This phase intentionally combines three resources, each serving a different purpose.

### Layer 1 — Codecademy: Learn JavaScript
**Purpose:** Structured foundation in an interactive environment  
**Link:** https://www.codecademy.com/learn/introduction-to-javascript  
**Duration:** ~3 weeks | ~15 hours  
**Format:** Browser-based coding environment, no local setup required

Codecademy is used first because the interactive format is already familiar from the Python and SQL phases. It covers the core fundamentals quickly and lets the syntax become familiar before moving to deeper material. The built-in code runner and immediate feedback make it ideal for the first exposure to a new language.

**Modules covered:**
| Module | Topics |
|---|---|
| Introduction | Data types, variables, built-in methods |
| Conditionals | if/else, switch, ternary operator |
| Functions | Function syntax, return keyword, arrow functions |
| Scope | Global vs block scope |
| Arrays | Array creation, methods, iteration |
| Loops | for, while, for...of |
| Objects | Object syntax, methods, this keyword |
| Classes | Class syntax, constructors, inheritance |
| Modules | import/export, ES6 module structure |
| Async/Await | Promises, async functions, error handling |

---

### Layer 2 — javascript.info: Targeted Deep Dives
**Purpose:** Fill the gaps Codecademy leaves on topics critical to Playwright  
**Link:** https://javascript.info  
**Duration:** ~3 weeks (selected chapters only, not the full site)  
**Format:** Text-based reading with embedded exercises

javascript.info is the most thorough free JavaScript reference available. Rather than reading it end to end, only the chapters directly relevant to Playwright test writing are covered. This is used after Codecademy, not before — the concepts are already familiar, so the focus is on depth and nuance.

**Chapters to cover — in this order:**

| Chapter | Link | Why it matters for Playwright |
|---|---|---|
| Arrow functions revisited | https://javascript.info/arrow-functions | Used in every Playwright test callback |
| Destructuring assignment | https://javascript.info/destructuring-assignment | Common in Playwright config and fixtures |
| Promises | https://javascript.info/promise-basics | Foundation of async behavior |
| Async/await | https://javascript.info/async-await | Every Playwright action is async |
| Error handling — try/catch | https://javascript.info/try-catch | How test failures are caught |
| Modules — import/export | https://javascript.info/modules-intro | How every Playwright file is structured |

---

### Layer 3 — Exercism: Hands-On Reinforcement
**Purpose:** Apply concepts immediately in a real coding environment  
**Link:** https://exercism.org/tracks/javascript  
**Duration:** Ongoing throughout Phase 2  
**Format:** Local coding in VS Code, submitted to Exercism for review

Exercism exercises are done after each Codecademy section and each javascript.info chapter — not saved for the end. The goal is to keep knowledge in the hands, not just in the head. Solutions are committed to this repo under the exercises/ folder as evidence of hands-on practice.

---

## Concepts to Master — Priority Order

| Concept | Priority | Used in Playwright |
|---|---|---|
| Variables — let, const | Must learn | Every file |
| Functions and arrow functions | Must learn | Test definitions, callbacks |
| Arrays and array methods — map, filter, find | Must learn | Processing test data |
| Objects | Must learn | Config, fixtures, page data |
| Async / await | Must learn — critical | Every Playwright action |
| try / catch error handling | Must learn | Test failure handling |
| import / export — ES6 modules | Must learn | File structure in every project |
| Destructuring | Learn | Playwright config and fixtures |
| Promises (theory) | Understand conceptually | Foundation under async/await |
| this keyword | Understand at surface level | Occasionally used in classes |
| Closures, prototypes, React | Skip for now | Not needed for Playwright |

---

## Repository Structure (the structure might change as progress is made)

```
javascript/
├── js-README.md                     <- this file
├── js-notes.md                      <- concepts explained in my own words, updated continuously
├── 01_variables_and_data_types.js   <- Codecademy module 1-2 exercises
├── 02_functions_and_scope.js        <- Codecademy module 3-4 exercises
├── 03_arrays_and_loops.js           <- Codecademy module 5-6 exercises
├── 04_objects_and_classes.js        <- Codecademy module 7-8 exercises
├── 05_modules_and_async.js          <- Codecademy module 9-10 + javascript.info deep dive
└── exercises/                       <- Exercism solutions, one file per challenge
```

---

## Progress Tracker

| Resource | Status | Started | Completed |
|---|---|---|---|
| Codecademy — Learn JavaScript | 🔄 In Progress | | |
| javascript.info — Arrow functions | ⏳ Upcoming | | |
| javascript.info — Destructuring | ⏳ Upcoming | | |
| javascript.info — Promises | ⏳ Upcoming | | |
| javascript.info — Async/await | ⏳ Upcoming | | |
| javascript.info — Error handling | ⏳ Upcoming | | |
| javascript.info — Modules | ⏳ Upcoming | | |
| Exercism — JavaScript track | ⏳ Ongoing from week 1 | | |

---

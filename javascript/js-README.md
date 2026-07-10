# JavaScript

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

Codecademy is used first because the interactive format is already familiar from the Python and SQL phases. It covers the core fundamentals quickly and lets the syntax become familiar before moving to deeper material. The built-in code runner and immediate feedback make it ideal for the first exposure to a new language. The course also provides internal projects to practice the concepts learned after each lesson. The solutions for these internal projects are committed to this repo under the exercises/ folder as evidence of hands-on practice.

**Modules covered:**
| Module | Topics |
|---|---|
| Introduction | Data types, variables, built-in methods |
| Conditionals | if/else, switch, ternary operator |
| Functions | Function syntax, return keyword, arrow functions |
| Scope | Global vs block scope |
| Arrays | Array creation, methods, iteration |
| Loops | for, while, for...of |
| Iterators | Higher order functions and iterators |
| Objects | Object syntax, methods, this keyword |

---

### Layer 2 — javascript.info: Targeted Deep Dives
**Purpose:** Fill the gaps Codecademy leaves on topics critical to Playwright  
**Link:** https://javascript.info  
**Duration:** ~3 weeks (selected chapters only, not the full site)  
**Format:** Text-based reading with embedded exercises

javascript.info is the most thorough free JavaScript reference available. Rather than reading it end-to-end, only the chapters directly relevant to Playwright test writing are covered. This is used after Codecademy, not before — the concepts are already familiar, so the focus is on depth and nuance.

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

### Layer 3 — Exercism / Calude AI (Hands-On Reinforcement)
**Purpose:** Apply concepts immediately after each lesson/chapter in a real coding environment  
**Resources:**
- [Excercism](https://exercism.org/tracks/javascript)
- Claude AI - using a prompt with the concepts for each lesson to generate a practice exercise

**Duration:** Ongoing throughout the entire learning process

**Format:** Local coding in VS Code, submitted to Calude AI/Exercism for review

In addition to the internal practice projects from the Codecademy course, Exercism and Claude AI exercises will be done after each Codecademy section and each javascript.info chapter (not saved for the end). The goal is to keep knowledge in the hands, not just in the head. Solutions are committed to this repo under the exercises/ folder as evidence of hands-on practice.

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
├── 01_intro_variables_data_types/   <- Codecademy lesson 1 + exercises
├── 02_conditionals/                 <- Codecademy lesson 2 + exercises
├── 03_functions/                    <- Codecademy lesson 3 + exercises
├── 04_scope/                        <- Codecademy lesson 4 + exercises
├── 05_arrays/                       <- Codecademy lesson 5 + exercises
├── 06_loops/                        <- Codecademy lesson 6 + exercises
├── 07_higher_order_functions_.../   <- Codecademy lesson 7 + exercises
├── 08_objects/                      <- Codecademy lesson 8 + exercises
└── exercism_practices/              <- Exercism solutions, one file per challenge
```

---

## Progress Tracker

| Resource | Status | Started | Completed |
|---|---|---|---|
| Codecademy — Learn JavaScript | ✅ Complete | May 15, 2026 | July 9, 2026 |
| javascript.info — Arrow functions | 🔄 In Progress | | |
| javascript.info — Destructuring | ⏳ Upcoming | | |
| javascript.info — Promises | ⏳ Upcoming | | |
| javascript.info — Async/await | ⏳ Upcoming | | |
| javascript.info — Error handling - try/catch | ⏳ Upcoming | | |
| javascript.info — Modules - import/export | ⏳ Upcoming | | |
| Exercism — JavaScript track | ⏳ Ongoing from week 1 | | |

## References
- [JavaScript documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript's standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [The Math documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [MDN's Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
- [Codecademy JavaScript documentation](https://www.codecademy.com/resources/docs/javascript)
- [JavaScript Errors](https://www.codecademy.com/resources/docs/javascript/errors)

---

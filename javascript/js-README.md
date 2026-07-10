# JavaScript — Phase 3
 
Building JavaScript fundamentals as the primary language for web automation with Playwright.  
This phase uses a hybrid approach across three platforms to balance structured learning, depth on critical topics, and hands-on practice.
 
---
 
## Why JavaScript
 
JavaScript is the language used in the Playwright automation framework, which is the primary target for web automation in this career transition. Rather than learning JS as a general-purpose language, the focus here is on the subset of JS concepts that Playwright depends on directly — particularly async/await, arrow functions, ES6 modules, and array methods.
 
---
 
## Learning Approach — Three Layers
 
This phase intentionally combines three resources, each serving a different purpose.
 
### Layer 1a — Codecademy: Learn JavaScript
**Purpose:** Structured foundation in an interactive environment  
**Link:** https://www.codecademy.com/learn/introduction-to-javascript  
**Duration:** ~8 weeks | ~15 hours  
**Format:** Browser-based coding environment, no local setup required  
**Status:** ✅ Complete — May 15, 2026 to July 9, 2026
 
Codecademy was used first because the interactive format was already familiar from the Python and SQL phases. It covers the core fundamentals quickly and lets the syntax become familiar before moving to deeper material. The built-in code runner and immediate feedback make it ideal for the first exposure to a new language. The course also provides internal projects to practice the concepts learned after each lesson. The solutions for these internal projects are committed to this repo under the exercises/ folder as evidence of hands-on practice.
 
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
 
### Layer 1b — Codecademy: Learn Intermediate JavaScript
**Purpose:** Deep dive into the advanced JS concepts that Playwright depends on most  
**Link:** https://www.codecademy.com/learn/learn-intermediate-javascript  
**Duration:** ~11 hours | 6 lessons | 5 projects  
**Format:** Browser-based coding environment, no local setup required  
**Status:** 🔄 In Progress
 
This course builds directly on Layer 1a and covers the concepts most critical for writing Playwright tests — async/await, modules, promises, and error handling — in Codecademy's interactive environment rather than through reading alone. All 6 lessons and all 5 projects are completed as part of this layer. Project solutions are committed to the repo as evidence of hands-on practice.
 
**Modules covered:**
| Module | Topics | Playwright Relevance |
|---|---|---|
| Classes | Class syntax, inheritance, extending classes | Page Object Model structure |
| Modules | import/export, ES6 module system | How every Playwright file is organized |
| Promises | Promise syntax, chaining, error handling | Foundation of async behavior |
| Async/Await | Async functions, await keyword, error handling | Every Playwright action is async |
| Requests | Fetch API, HTTP methods, handling responses | Context for API testing in Phase 5 |
| Errors and Error Handling | try/catch, error types, throwing errors | How test failures are caught and reported |
 
---
 
### Layer 2 — javascript.info: Two Targeted Chapters Only
**Purpose:** Cover the two topics not addressed by either Codecademy course  
**Link:** https://javascript.info  
**Duration:** ~2 hours total (two chapters only)  
**Format:** Text-based reading with embedded exercises
 
Originally planned as a broader deep-dive across six chapters, this layer was reduced after confirming that Codecademy Intermediate covers Promises, Async/Await, Modules, and Error Handling directly. Only two chapters remain that are not covered by Codecademy and are directly relevant to Playwright.
 
**Chapters to cover:**
| Chapter | Link | Why it matters for Playwright |
|---|---|---|
| Arrow functions revisited | https://javascript.info/arrow-functions | Nuances of arrow functions used in Playwright callbacks not fully covered in Codecademy |
| Destructuring assignment | https://javascript.info/destructuring-assignment | Used in Playwright config and fixtures — not covered in either Codecademy course |
 
---
 
### Layer 3 — Exercism and Claude A: Hands-On Reinforcement
**Purpose:** Apply concepts immediately after each lesson in a real coding environment  
**Resources:**
- [Exercism](https://exercism.org/tracks/javascript)
- Claude AI — prompt with the concepts from each lesson to generate a custom practice exercise
**Duration:** Ongoing throughout the entire phase  
**Format:** Local coding in VS Code, committed to this repo for review
 
In addition to the internal practice projects from both Codecademy courses, Exercism and Claude AI exercises are done after each lesson — not saved for the end. The goal is to keep knowledge in the hands, not just in the head. Solutions are committed to this repo under the exercises/ folder as evidence of hands-on practice.
 
---
 
## Concepts to Master — Priority Order
 
| Concept | Priority | Used in Playwright |
|---|---|---|
| Variables — let, const | ✅ Covered | Every file |
| Functions and arrow functions | ✅ Covered | Test definitions, callbacks |
| Arrays and array methods — map, filter, find | ✅ Covered | Processing test data |
| Objects | ✅ Covered | Config, fixtures, page data |
| Classes | Must learn | Page Object Model |
| Async / await | Must learn — critical | Every Playwright action |
| try / catch error handling | Must learn | Test failure handling |
| import / export — ES6 modules | Must learn | File structure in every project |
| Requests / Fetch API | Learn — context for Phase 5 | Background for API testing |
| Destructuring | Learn | Playwright config and fixtures |
| Promises (theory) | Understand conceptually | Foundation under async/await |
| this keyword | Understand at surface level | Occasionally used in classes |
| Closures, prototypes, React | Skip for now | Not needed for Playwright |
 
---
 
## Repository Structure
 
```
javascript/
├── js-README.md                          <- this file
├── 01_intro_variables_data_types/        <- Codecademy - Learn JavaScript: lesson 1 + exercises
├── 02_conditionals/                      <- Codecademy - Learn JavaScript: lesson 2 + exercises
├── 03_functions/                         <- Codecademy - Learn JavaScript: lesson 3 + exercises
├── 04_scope/                             <- Codecademy - Learn JavaScript: lesson 4 + exercises
├── 05_arrays/                            <- Codecademy - Learn JavaScript: lesson 5 + exercises
├── 06_loops/                             <- Codecademy - Learn JavaScript: lesson 6 + exercises
├── 07_higher_order_functions/            <- Codecademy - Learn JavaScript: lesson 7 + exercises
├── 08_objects/                           <- Codecademy - Learn JavaScript: lesson 8 + exercises
├── 09_classes/                           <- Codecademy - Learn Intermediate JavaScript: lesson 1 + projects
├── 10_modules/                           <- Codecademy - Learn Intermediate JavaScript: lesson 2 + projects
├── 11_promises/                          <- Codecademy - Learn Intermediate JavaScript: lesson 3 + projects
├── 12_async_await/                       <- Codecademy - Learn Intermediate JavaScript: lesson 4 + projects
├── 13_requests/                          <- Codecademy - Learn Intermediate JavaScript: lesson 5 + projects
├── 14_error_handling/                    <- Codecademy - Learn Intermediate JavaScript: lesson 6 + projects
└── exercism_practices/                   <- Exercism solutions
```
 
---
 
## Progress Tracker
 
| Resource | Status | Started | Completed |
|---|---|---|---|
| Codecademy — Learn JavaScript | ✅ Complete | May 15, 2026 | July 9, 2026 |
| Codecademy — Learn Intermediate JavaScript | 🔄 In Progress | July 10, 2026 | |
| javascript.info — Arrow functions revisited | ⏳ Upcoming | | |
| javascript.info — Destructuring assignment | ⏳ Upcoming | | |
| Exercism — JavaScript track | 🔄 Ongoing | May 15, 2026 | |
 
---
 
## References
 
- [JavaScript documentation — MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [JavaScript standard built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
- [The Math object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [MDN Lexical grammar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords)
- [Codecademy JavaScript docs](https://www.codecademy.com/resources/docs/javascript)
- [JavaScript Errors — Codecademy](https://www.codecademy.com/resources/docs/javascript/errors)

---

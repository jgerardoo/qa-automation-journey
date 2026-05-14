# Web Basics
 
Building foundational knowledge of how the web works before writing Playwright automation.  
This phase is intentionally short and focused — the goal is not to become a web developer, but to understand the environment that Playwright operates in well enough to write meaningful, reliable tests.
 
---
 
## Why This Phase Exists
 
Manual mobile QA experience provides a strong instinct for what makes a good test. But web testing introduces a new environment with its own rules — how pages are structured, how browsers render content, how applications communicate with servers. Writing Playwright tests without this foundation means automating things you do not fully understand, which leads to brittle tests and harder debugging.
 
This phase builds the mental model. Everything covered here will be directly referenced in Phase 6 when writing real Playwright tests.
 
---
 
## What This Phase Covers
 
### 1. How the Web Works
Understanding the full cycle of what happens when a user opens a browser and visits a page — DNS resolution, HTTP requests and responses, server communication, and how the browser renders what it receives. This is the backbone of understanding why Playwright does what it does.
 
**Resource:** [MDN — How the Web Works](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works)
 
---
 
### 2. HTTP Fundamentals
Every Playwright interaction — clicking a button, submitting a form, navigating to a URL — triggers HTTP communication under the hood. Understanding methods, status codes, headers, and request/response structure is essential for both UI and API testing.
 
**Key concepts:**
| Concept | Why it matters in QA |
|---|---|
| HTTP methods — GET, POST, PUT, DELETE | Foundation of API testing in Phase 5 |
| Status codes — 200, 201, 400, 401, 404, 500 | How to assert that requests succeeded or failed |
| Request headers and body | What gets sent with a form submission or login |
| Response body | What the server returns — what you validate against |
 
**Resource:** [MDN — HTTP Overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview)
 
---
 
### 3. HTML Structure and the DOM
Playwright finds elements on a page by targeting the HTML structure. Understanding how HTML is organized — tags, attributes, nesting, IDs, classes — is what makes element locators make sense rather than feel like guesswork.
 
The DOM (Document Object Model) is the live version of that structure that the browser builds and Playwright interacts with. Knowing the difference between HTML as written and the DOM as rendered is important for debugging flaky locators.
 
**What to focus on:**
- Common tags: `div`, `button`, `input`, `form`, `a`, `span`, `table`
- Attributes: `id`, `class`, `name`, `type`, `href`, `placeholder`
- How nesting creates parent/child relationships that locators use
- How the DOM can differ from the raw HTML (dynamic content, JavaScript rendering)
**Resource:** [freeCodeCamp — Responsive Web Design, first 2 modules only](https://www.freecodecamp.org/learn/2022/responsive-web-design/)  
**Resource:** [MDN — Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
 
---
 
### 4. Browser DevTools for Testers
DevTools is the most important practical skill in this phase. It is the primary tool for inspecting elements, finding locators, monitoring network traffic, and debugging why a test is failing. Playwright's VS Code extension surfaces much of the same information, so comfort with DevTools translates directly.
 
**Key DevTools panels for QA:**
| Panel | What you use it for |
|---|---|
| Elements | Inspect HTML structure, find and verify locators |
| Console | See JavaScript errors and run quick checks |
| Network | Monitor HTTP requests and responses during a user flow |
| Application | Inspect cookies, local storage, session data |
 
**Resource:** [TAU — Web Element Locator Strategies](https://testautomationu.applitools.com/web-element-locator-strategies/)
 
---
 
### 5. CSS Selectors and XPath Basics
Playwright supports multiple locator strategies. CSS selectors and XPath are the two most common ones used across the industry, and understanding how to read and write them is a prerequisite for the locator work in Phase 6.
 
**What to learn:**
- CSS selectors: by tag, by class (`.classname`), by ID (`#id`), by attribute (`[type="submit"]`), chaining (`div > button`)
- XPath basics: absolute vs relative paths, attribute matching (`//button[@id='login']`)
- Playwright's preferred approach: role-based and text locators — simpler and more resilient than raw CSS or XPath
**Resource:** Covered in the TAU Web Element Locator Strategies course above
 
---
 
## Repository Structure
 
```
web/
├── web-README.md        <- this file
└── web-notes.md         <- concepts explained in my own words, updated as I go through the phase
```
 
This phase is primarily conceptual — there are no exercise files in the same way as SQL or JavaScript. The notes file is the main artifact, and it should be thorough enough to serve as a personal reference during Phase 6.
 
---
 
## Progress Tracker
 
| Topic | Resource | Status | Completed |
|---|---|---|---|
| How the web works | MDN | ⏳ Upcoming | |
| HTTP fundamentals | MDN HTTP Overview | ⏳ Upcoming | |
| HTML and DOM basics | freeCodeCamp + MDN | ⏳ Upcoming | |
| Browser DevTools | TAU — Web Element Locator Strategies | ⏳ Upcoming | |
| CSS selectors and XPath | TAU — Web Element Locator Strategies | ⏳ Upcoming | |
 
---

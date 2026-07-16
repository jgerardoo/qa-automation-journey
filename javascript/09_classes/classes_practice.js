/*
===============================================================
Learn Intermediate JavaScript - Codecademy | Lesson 1: Classes
Practice exercise from the course lesson concepts.
Project practice 1: Build a Library
    Concepts: Classes in JavaScript
===============================================================

You’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help.
Books-‘N-Stuff carries three different types of media: books, CDs, and movies.

Create a parent class named Media with three subclasses:
Book, Movie, and CD. These three subclasses have the following properties and methods:
    - Book
        Properties: _author (string), _title (string), _pages (number), _isCheckedOut (boolean, initially false), and _ratings (array, initially empty).
        Getters: all properties have a getter
        Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
    - Movie
        Properties: _director (string), _title (string), _runTime (number), _isCheckedOut (boolean, initially false), and _ratings (array, initially empty)
        Getters: all properties have a getter
        Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()
    - CD
        Properties: _artist (string), _title (string), _isCheckedOut (boolean, initially false), _ratings (array, initially empty), and _songs (array of strings)
        Getters: all properties have a getter
        Methods: .getAverageRating(), .toggleCheckOutStatus(), and .addRating()

Tasks 1 - 14.
(Omitted the step-by-step tasks because I wanted to create the Classes on my own).
*/
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }
    set isCheckedOut(ch) {
        this._isCheckedOut = ch
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
        return this._isCheckedOut;
    }
    getAverageRating() {
        let sum = 0;
        for (let rating of this._ratings) {
            sum += rating;
        }
        let avgRating = sum / this._ratings.length;
        return Number(avgRating.toFixed(1));
    }
    addRating(num) {
        this._ratings.push(num);
    }
};

class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
};

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
};

class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }
}

/*
Task 15.
Create a Book instance with the following properties:
    - Author: 'Bill Bryson'
    - Title: 'A Short History of Nearly Everything'
    - Pages: 544
    - Save the instance to a constant variable named historyOfEverything.
*/
const historyOfEverything = new Book("Bill Bryson", "A Short History of Nearly Everything", 544);

// Task 16.
// Call .toggleCheckOutStatus() on the historyOfEverything instance
console.log(historyOfEverything.isCheckedOut);      // check value before the change - should be false
historyOfEverything.toggleCheckOutStatus();         // toggle value - should change to true

// Task 17.
// Log the value saved to the _isCheckedOut property in the historyOfEverything instance using the isCheckedOut getter
console.log(historyOfEverything.isCheckedOut);      // should be true

// Task 18.
// Call .addRating() three times on historyOfEverything with inputs of 4, 5, and 5. Then log the ratings to the console.
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything._ratings);

// Task 19. Call .getAverageRating() on historyOfEverything. Log the result to the console.
console.log(historyOfEverything.getAverageRating());

/*
Task 20.
Create a Movie instance with the following properties:
    - Director: 'Jan de Bont'
    - Title: 'Speed'
    - Runtime: 116
    - Save the instance to a constant variable named speed
*/
const speed = new Movie("Jan de Bont", "Speed", 116);

// Task 21.
// Call .toggleCheckOutStatus() on the speed instance
console.log(speed.isCheckedOut);        // check value before the change - should be false
speed.toggleCheckOutStatus();           // toggle value - should change to true

// Task 22.
// Log the value saved to the isCheckedOut property in the speed instance
console.log(speed.isCheckedOut);        // should be true

// Task 23.
// Call .addRating() three times on speed with inputs of 1, 1, and 5. Then log the ratings to the console.
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed._ratings);

// Task 24.
// Call .getAverageRating() on speed. Log the result to the console.
console.log(speed.getAverageRating());
console.log("----------------------------------------");
console.log("----------------------------------------");




/*
===============================================================
Learn Intermediate JavaScript - Codecademy | Lesson 1: Classes
Practice exercise from the course lesson concepts.
Project practice 2: School Catalogue
    Concepts: Classes in JavaScript
===============================================================

The New York City Department of Education wants a digital school catalog to hold
quick reference material for each school in the city.
We need to create classes for primary and high schools.

Because these classes share properties and methods, each will inherit from a parent School class.
Our parent and three child classes have the following properties, getters, setters, and methods:
    - School
        - Properties: _name (string), _level (one of three strings: 'primary', 'middle', or 'high'), and _numberOfStudents (number)
        - Getters: all properties have getters
        - Setters: the _numberOfStudents property has a setter
        - Methods: .quickFacts() and .pickSubstituteTeacher() (this is a static method)
    - Primary
        - Includes everything in the School class, plus one additional property
        - Properties: _pickupPolicy (string)
    - Middle
        - Includes everything in the School class, but nothing additional
    - High
        - Includes everything in the School class, plus one additional property
        - Properties: _sportsTeams (array of strings)

Tasks 1 - 4.
(Omitted the step-by-step tasks because I wanted to create create the constructor and
getters for the four classes above on my own).

Task 5.
Create a numberOfStudents setter. The method should first check if the input (newNumberOfStudents)
is a number. If so, then set the _numberOfStudents property. If not, log:
"Invalid input: numberOfStudents must be set to a Number."

Task 6.
Under your getters, create a method named quickFacts that logs the following string to the console:
"SCHOOL NAME educates NUMBER OF STUDENTS students at the LEVEL school level."
SCHOOL NAME = instance’s _name / NUMBER OF STUDENTS = instance’s _numberOfStudents
LEVEL = instance’s _level value
Use the respective getter methods to access the underlying properties.

Task 7.
Create a static method named pickSubstituteTeacher. This method will receive one parameter substituteTeachers.
The substituteTeachers parameter will take an array of strings.
Inside the method, randomly generate a whole number between 0 and one less than the length of the substituteTeachers array.
Use this number to access and return the substitute teacher at that randomly generated index.

Tasks 8 - 13.
(Omitted the step-by-step tasks because I wanted to create create the classes above on my own).
*/
class School {
    constructor(name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === "number") {
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log("Invalid input: numberOfStudents must be set to a Number.");
        }
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        const randNum = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[randNum];
    }
};

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        super(name, "Primary", numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy;
    }
};

// class Middle extends School {
//     constructor(name) {
//         super(name);
//     }
// };

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, "high", numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams;
    }
};

/*
Instances of PrimarySchool and HighSchool

Task 14.
Create a PrimarySchool instance with the following properties:
    - Name: "Lorraine Hansbury"
    - Number of Students: 514
    - Pickup Policy:
        - "Students must be picked up by a parent, guardian, or a family member over the age of 13."
    - Save the instance to a constant variable named lorraineHansbury.
*/
const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13.");

// Task 15.
// Call .quickFacts() on the lorraineHansbury instance.
lorraineHansbury.quickFacts();

/*
Task 16.
The principal of Lorraine Hansbury needs a substitute teacher for the day.
Call .pickSubstituteTeacher() on School, and pass the following array as an argument:
["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"];
*/
console.log(School.pickSubstituteTeacher(["Jamal Crawford", "Lou Williams", "J. R. Smith", "James Harden", "Jason Terry", "Manu Ginobli"]));

/*
Task 17.
Create a HighSchool instance with the following properties:
    - Name: "Al E. Smith"
    - Number of Students: 415
    - Sports Teams: ["Baseball", "Basketball", "Volleyball", "Track and Field"]
    - Save the instance to a constant variable named alSmith.
*/
const alSmith = new HighSchool("Al E. Smith", 415, ["Baseball", "Basketball", "Volleyball", "Track and Field"]);

// Task 18.
// Using the sportsTeams getter, retrieve the value saved to the _sportsTeams property in alSmith.
console.log(alSmith.sportsTeams);
console.log("----------------------------------------");
console.log("----------------------------------------");




/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: Test case management
==================================================================================

Your QA team needs a lightweight way to track test cases before they get
migrated into a full test management tool. Test cases come in two flavors:
manual and automated, but they share a lot of common behavior.

Create a parent class named TestCase with two subclasses: ManualTestCase
and AutomatedTestCase.

    - TestCase:
        - Properties: _title (string), _priority (one of: "low", "medium", "high"), _status (string,
        initially "not run"), _runHistory (array, initially empty)
        - Getters: all properties have a getter
        - Setter: _priority should have a setter that only allows "low", "medium", or "high", anything
        else should log an invalid input message and leave the value unchanged
        - Methods:
            - one method that records a run: it should accept a result ("pass" or "fail"),
            update _status to that result, and add an entry to _runHistory containing
            both the result and a timestamp (Date.now() is fine for the timestamp)
            - one method that reports the pass rate across all runs so far, as a percentage
            rounded to the nearest whole number (if there are no runs yet,
            it should return 0 instead of dividing by zero)
            - one static method that, given an array of TestCase instances, returns only the
            ones whose current _status is "fail"

    - ManualTestCase:
        - Additional property: _tester (string) — the name of the person who last ran it manually
        - Additional getter for _tester

    - AutomatedTestCase (extends TestCase):
        - Additional property: _scriptPath (string) — file path to the automation script
        - Additional getter for _scriptPath

Tasks:

1. Create a ManualTestCase instance:
    - Title: "Login with valid credentials"
    - Priority: "high"
    - Tester: "Jesse Varela"
   Save it to a constant named loginTest.

2. Record two runs on loginTest: first a "fail", then a "pass".

3. Log loginTest's pass rate to the console. (Should reflect 1 pass out
   of 2 runs.)

4. Try setting loginTest's priority to "urgent". Confirm it logs the
   invalid input message and that the priority getter still returns "high"
   afterward.

5. Create an AutomatedTestCase instance:
    - Title: "Checkout flow smoke test"
    - Priority: "medium"
    - Script path: "playwright/tests/checkout.spec.js"
   Save it to a constant named checkoutTest.

6. Record one run on checkoutTest with a result of "fail".

7. Create an array containing both loginTest and checkoutTest. Call the
   static method to filter for currently failing test cases, and log the
   result. Confirm only checkoutTest appears (since its last status is
   "fail", while loginTest's last recorded run was a "pass").
*/
class TestCase {
    constructor(title, priority) {
        this._title = title;
        this._priority = priority;
        this._status = "not run";
        this._runHistory = [];
    }
    get title() {
        return this._title;
    }
    get priority() {
        return this._priority;
    }
    get status() {
        return this._status;
    }
    get runHistory() {
        return this._runHistory;
    }
    set priority(priority) {
        const validPriority = ["low", "medium", "high"];
        if (validPriority.includes(priority)) {
            this._priority = priority;
        } else {
            console.log("Invalid input: priority must be set to 'low', 'medium' or 'high'.");
        }
    }
    run(result) {
        const validResult = ["pass", "fail"];
        if (validResult.includes(result)) {
            this._status = result;
            this._runHistory.push({
                result: result,
                timestamp: Date.now()
            });
        } else {
            console.log("Invalid input: result must be set to 'pass' or 'fail'.");
        }
    }
    passrate() {
        if (this._runHistory.length === 0) {
            return 0;
        } else {
            const timesRun = this._runHistory.length;
            const timesPass = this._runHistory.filter(entry => entry.result === "pass").length;
            return Math.round((timesPass / timesRun) * 100);
        }
    }
    static failedTestCases(testCases) {
        return testCases.filter(test => test._status === "fail");
    }
};

class ManualTestCase extends TestCase{
    constructor(title, priority, tester) {
        super(title, priority, "not run");
        this._tester = tester;
    }
    get tester() {
        return this._tester;
    }
};

class AutomatedTestCase extends TestCase{
    constructor(title, priority, scriptPath) {
        super(title, priority, "not run");
        this._scriptPath = scriptPath;
    }
    get scriptPath() {
        return this._scriptPath;
    }
};

// Task 1. ManualTestCase instance
const loginTest = new ManualTestCase("Login with valid credentials", "high", "Jesse Varela");
console.log(loginTest);

// Task 2. Record two runs on loginTest
loginTest.run("fail");
loginTest.run("pass");

// Task 3. Log loginTest's pass rate to the console
console.log(loginTest.passrate());

// Task 4. Set loginTest's priority to "urgent"
console.log(loginTest.priority);        // checking current priority, should be "high"
loginTest.priority = "urgent";          // trying to set "urgent" as priority (invalid)
console.log(loginTest.priority);        // priority stays as "high"

// Task 5. Create an AutomatedTestCase instance
const checkoutTest = new AutomatedTestCase("Checkout flow smoke test", "medium", "playwright/tests/checkout.spec.js");
console.log(checkoutTest);

// Task 6. Record one run on checkoutTest with a result of "fail".
checkoutTest.run("fail");
console.log(checkoutTest.passrate());

// Task 7. Array containing both loginTest and checkoutTest
const allTestCases = [loginTest, checkoutTest];
console.log(TestCase.failedTestCases(allTestCases));
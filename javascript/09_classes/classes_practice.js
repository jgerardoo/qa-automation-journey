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
        super(name);
        this._level = "Primary";
        this._numberOfStudents = numberOfStudents;
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
const alSmith = new HighSchool("Al E. Smith", 416, ["Baseball", "Basketball", "Volleyball", "Track and Field"]);

// Task 18.
// Using the sportsTeams getter, retrieve the value saved to the _sportsTeams property in alSmith.
console.log(alSmith.sportsTeams);
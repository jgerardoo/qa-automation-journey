/*
===============================================================
Learn Intermediate JavaScript - Codecademy | Lesson 1: Classes
Practice exercise from the course lesson concepts.
Project practice 1: Build a Library
    Concepts: Classes in JavaScript
===============================================================

You’ve become head librarian at your local Books-‘N-Stuff, which is in dire need of your help.
Books-‘N-Stuff carries three different types of media: books, CDs, and movies.

Tasks 1 - 14 (Omitted the step-by-step tasks because i wanted to create the Classes on my own).
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
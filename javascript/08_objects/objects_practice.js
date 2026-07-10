/*
=======================================================
Learn JavaScript - Codecademy | Lesson 8: Objects
Practice exercise from the course lesson concepts.
Project practice 1: Meal Maker
    Concepts: Objects in JavaScript
=======================================================

A restaurant has hired you to create a function for their website
that allows them to set a meal and price each morning for Today’s Special.
Use your knowledge of getters and setters to make sure anyone who uses the new function
can generate a meal and a price for Today’s Special without any embarrassing errors!


---- Create the menu object

1. Create an empty menu object

2. The menu object will hold the meal and price of Today’s Special as properties, and they shouldn’t be altered directly.
Within the menu object, create a _meal property with a value of an empty string (''). This will eventually hold the name of the meal.

3. Add a _price property with a value of 0. This will eventually hold the price of the meal, and should also not be altered directly.

4. We know properties that begin with (_) should not be directly manipulated.
For testing purposes, manipulate the two properties by assigning _meal a number value and _price a string value.
Then, below the new assignments, console.log() the menu object to see how not type checking these values
could cause confusion for a website visitor! After you are done testing out direct manipulation, comment the lines of code.

---- Add Setter methods that type check the values being assigned to safely reassign the two menu properties.

5. Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter.

6. In the body of the setter method, create an if statement that checks if mealToCheck is a string.
If it is, assign mealToCheck to the object’s _meal property.

7. Use the set keyword to create a price setter with priceToCheck as a parameter.
This method should make sure the value associated with _price is always a number.

8. Below the menu object, set the values of _meal and _price using the newly created setter methods.
Then, console.log() the menu object to check its functionality.

---- Add a Getter Method

9. Below the setters, use the get keyword to create a todaysSpecial() method.

10. In the body of the getter, create an if…else statement to check if _meal and _price are truthy values.
If so: "Today's Special is [meal] for [price]!", else: "Meal or price was not set correctly!".
*/
const menu = {
    _meal: "",
    _price: 0,
    set meal(mealToCheck) {
        if (typeof mealToCheck === "string") {
            this._meal = mealToCheck;
        }
    },
    set price(priceToCheck) {
        if (typeof priceToCheck === "number") {
            this._price = priceToCheck;
        }
    },
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for ${this._price}!`;
        } else {
            return "Meal or price was not set correctly!";
        }
    }
};
// menu._meal = 20;
// menu._price = "twelve";
// console.log(menu);

menu.meal = "pizza";
menu.price = 9;
console.log(menu);

/*
11. Use the getter method to console.log() Today’s Special.
Assuming you used the meal setter to assign a string, and the price setter to assign a number in task 8,
you should see Today’s Special logged to the console.
*/
console.log(menu.todaysSpecial);
console.log("----------------------------------------");
console.log("----------------------------------------");


/*
=======================================================
Learn JavaScript - Codecademy | Lesson 8: Objects
Practice exercise from the course lesson concepts.
Project practice 2: Team Stats
    Concepts: Objects in JavaScript
=======================================================

Practice Objects in JavaScript by creating a data structure to maintain and manipulate sports stats!

We want to create, retrieve, and add information about your favorite sports team.
Basketball, soccer, tennis, or water polo, you pick it.
It’s your job to create data using the JavaScript data structures at your disposal: arrays and objects.


---- Populating Data

1. Let’s make a data structure to store the information about our team.
Declare a const variable called team and set it to an empty object.

2. Our team has players and the games that they have played.
Let’s represent both of these by adding two properties to your team object.
Add a _players property and a _games property and initialize both to empty arrays.

3. Populate the empty _players array with three players.
Each player should be an object containing three properties: firstName, lastName, and age.
Put each player on a new line to prevent the line from getting too long.

4. Populate the empty array with three games. Each game should be an object containing three properties:
opponent, teamPoints, and opponentPoints.

---- Getting data

5. Create a getter method called players to retrieve the _players property.
Inside the getter method, return the _players property

6. Create another getter method called games to retrieve the _games property.
Inside the getter method, return the _games property.

---- Adding data

7. Add an .addPlayer() method to the team object. This method should take in three parameters:
    newFirstName, newLastName, and newAge.
Add the player object to the team object’s _players array.

8. Let’s try out our new .addPlayer() method to add a new player: name Bugs Bunny, age 76.
Log the team object’s _players property to check that our new player was added.

9. Create a method for adding game results called addGame that takes three parameters:
newOpponent, newTeamPoints, and newOpponentPoints.
Inside the .addGame() method, create a game object by setting the three parameters to be the values for the object’s three properties.
Add the game object to the team object’s _games array.

10. Use the .addGame() method to add a record of a new game.
Our team played against the 'Titans' where we scored 100 points and the opponent scored 98 points.
Log the team object’s _games property to check that our new game record was properly added.
*/

const team = {
    _players: [
        { firstName: "Sergio",   lastName: "Canales", age: 35 }, 
        { firstName: "Humberto", lastName: "Suazo",   age: 37 }, 
        { firstName: "Walter",   lastName: "Erviti",  age: 36 }
    ],
    _games: [
        { opponent: "Inter",     teamPoints: 1, opponentPoints: 1 }, 
        { opponent: "Liverpool", teamPoints: 3, opponentPoints: 0 }, 
        { opponent: "Saprisa",   teamPoints: 1, opponentPoints: 1 }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
        const player =
        { firstName: newFirstName, lastName: newLastName, age: newAge };
        this._players.push(player);
    },
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
        const game =
        { opponent: newOpponent, teamPoints: newTeamPoints, opponentPoints: newOpponentPoints };
        this._games.push(game);
    }
};

team.addPlayer("Bugs", "Bunny", 76);
console.table(team._players);
console.log("--------------------");
team.addGame("Titans", 100, 98);
console.table(team._games);
console.log("----------------------------------------");
console.log("----------------------------------------");




/*
==================================================================================
Practice exercise generated with Claude AI assistance.
JavaScript code for the solution written independently using the lesson concepts.
Practice Exercise: NASA JSC Mission Tracker
==================================================================================

Johnson Space Center needs a program to track active missions and their crew members.
The tracker needs to protect its data, validate inputs, and compute mission stats on demand.


Setup:
Start with this empty shell. You'll build it out task by task:
    const missionControl = {
        _missions: [],
        _activeMissionCount: 0,
    };

Task 1: Getters.
Add a getter named missions that returns _missions.
Add a getter named activeMissionCount that returns _activeMissionCount.

Task 2: Add a mission.
Add a method named addMission that takes three parameters: missionName, destination, and crewSize.
Inside the method:
    - Validate that missionName and destination are strings, and crewSize is a number.
        If any check fails, log "Invalid mission data." and return without adding anything.
    - If valid, build a mission object with four properties: missionName, destination, crewSize, and status set to "Active".
        Push it into _missions and increment _activeMissionCount by 1.

Task 3: Update mission status.
Add a method named updateStatus that takes two parameters: missionName and newStatus.
Inside, find the mission in _missions whose missionName matches the parameter.
If found, update its status to newStatus. If newStatus is "Complete", decrement _activeMissionCount by 1.
If no match is found, log Mission not found.

Task 4: Computed getter for total crew.
Add a getter named totalCrewDeployed that iterates over _missions and returns the sum of crewSize
across all missions, regardless of status.

Task 5: Computed getter for mission summary.
Add a getter named missionSummary that iterates over _missions and returns a formatted summary string built by
joining each mission's details. Each mission should contribute one line in this format:
[missionName] | [destination] | Crew: [crewSize] | Status: [status].
Join the lines with a newline character \n.

Bonus task:
Add a method named getMissionsByStatus that takes one parameter statusFilter and returns a new array containing
only missions whose status matches statusFilter. Test it with "Active" and "Complete" and log the results.
*/

const missionControl = {
    _missions: [],
    _activeMissionCount: 0,
    get missions() {
        return this._missions;
    },
    get activeMissionCount() {
        return this._activeMissionCount;
    },
    addMission(missionName, destination, crewSize) {
        if (typeof missionName === "string" && typeof destination === "string" && typeof crewSize === "number") {
            const mission = {
                missionName,
                destination,
                crewSize,
                status: "Active"
            };
            this._missions.push(mission);
            this._activeMissionCount++;
        } else {
            console.log("Invalid mission data.");
        }
    },
    updateStatus(missionName, newStatus) {
        let missionFound = false;
        for (let mission of this._missions) {
            if (mission.missionName === missionName) {
                mission.status = newStatus;
                if (newStatus === "Complete") {
                    this._activeMissionCount--;
                }
                missionFound = true;
                break;
            }
        }
        if (!missionFound) {
            console.log("Mission not found.");
        }
    },
    get totalCrewDeployed() {
        let totalCrew = 0;
        for (let mission of this._missions) {
            totalCrew += mission.crewSize;
        }
        return totalCrew;
    },
    get missionSummary() {
        let summaryOfMissions = [];
        for (let mission of this._missions) {
            let summaryOfMission = `${mission.missionName} | ${mission.destination} | Crew: ${mission.crewSize} | Status: ${mission.status}`;
            summaryOfMissions.push(summaryOfMission);
        }
        return summaryOfMissions.join('\n');
    },
    // Bonus task
    getMissionsByStatus(statusFilter) {
        const missionsByStatus = this._missions.filter(mission => mission.status === statusFilter);
        return missionsByStatus;
    }
};

/*
Task 6: Test it.
Run these calls in order and log results to verify everything works:
*/
missionControl.addMission("Artemis IV", "Moon", 4);
missionControl.addMission("Ares I", "Mars", 6);
missionControl.addMission("Voyager X", "Europa", 3);
missionControl.addMission("BadMission", 99, 2);         // should trigger "Invalid mission data"

missionControl.updateStatus("Ares I", "Complete");
missionControl.updateStatus("Ghost", "Active");         // should trigger not found

console.log(missionControl.activeMissionCount);
console.log(missionControl.totalCrewDeployed);
console.log(missionControl.missionSummary);

// Bonus test (using console.table to see the full object in the debug console)
console.table(missionControl.getMissionsByStatus("Active"));
console.table(missionControl.getMissionsByStatus("Complete"));

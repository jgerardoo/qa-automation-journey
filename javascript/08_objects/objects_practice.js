/*
=======================================================
Learn JavaScript - Codecademy | Lesson 8: Objects
Practice exercise from the course lesson concepts.
Project practice: Meal Maker
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
11. Use the getter method to console.log() Today’s Special. Assuming you used the meal setter to assign a string, and the price setter to assign a number in task 8, you should see Today’s Special logged to the console.
*/
console.log(menu.todaysSpecial);

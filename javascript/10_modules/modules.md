# Modules

Mdules are reusable pieces of code in a file that can be exported and then imported for use in another file.

A modular program is one whose components can be separated, used individually, and recombined to create a complex system.

![Modular program](images/modular_program.png)

In the example above, instead of having the entire program written within my_app.js, its components are broken up into separate modules that each handle a particular task:
- database_logic.js module contain code for storing and retrieving data from a database
- date_formatting.js module contains functions designed to easily convert date values from one format to another.

This modular strategy is sometimes called separation of concerns and is useful to:
- find, fix, and debug code more easily
- reuse and recycle defined logic in different parts of your application
- keep information private and protected from other modules
- prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program

There are multiple ways of implementing modules depending on the runtime environment in which your code is executed:
- The Node runtime environment supports CommonJS modules by default.
- The browser’s runtime environment uses ES6 modules.

## Implementing CommonJS Modules
Every JavaScript file that runs in a Node environment is treated as a distinct module. The functions and data defined in each module can be used by any other module as long as those resources are properly exported and imported.

### module.exports
To create a module, create a new file where the variables and functions can be declared, and to make them available to other files, add them as properties to the built-in module.exports object:
```
/* converters.js */
function celsiusToFahrenheit(celsius) {
  return celsius * (9/5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * (5/9);
};
```
In the first approach, the already-defined function celsiusToFahrenheit is assigned to module.exports.celsiusToFahrenheit
In the second, a new function expression is declared and assigned to module.exports.fahrenheitToCelsius.
Other files can now import this object and use these two functions.

### require()
The require() function accepts a string as an argument that provides the file path to the module you would like to import.
```
/* water-limits.js */
const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);
```
When you use require(), the entire module.exports object is returned and stored in the variable converters. This means that both the .celsiusToFahrenheit() and .fahrenheitToCelsius() methods can be used in this program.

## Implementing Modules using ES6 Syntax

### Implementing modules in a browser’s runtime environment using ES6 modules syntax.
What are modules?

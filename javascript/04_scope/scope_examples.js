// Scope
const city = "New York City"

const logCitySkyline = function() {
  const skyscraper = "Empire State Building";
  return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log(logCitySkyline());

// Global scope
// The variables declared outside of any function or block is in the global scope. These are called global variables.
const sky = 'blue';

const returnSkyColor = () => {
  return sky;
};
console.log(returnSkyColor());

// Block scope
// A variable has block scope because it is only accessible to the lines of code within that block. These are local variables.
const logSkyColor = () => {
  let color = 'blue';
  console.log(color);
};
logSkyColor();
// console.log(color);     // ReferenceError: color is not defined

/*
Scope pollution
It occurs when we have too many variables in the global namespace, or when we reuse variables across different scopes.
It is best practice to avoid defining variables in the global scope whenever possible.
Keeping the global namespace clean is a core principle of modern JavaScript development
*/

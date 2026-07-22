const pi = 3.1416;

// Define and export circleArea() and squareArea() below
function circleArea(radius) {
  return pi * radius * radius;
};
function squareArea(sideLength) {
  return sideLength * sideLength;
};

module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;

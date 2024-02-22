// This method allows you to get the smallest values from a number array.
// It takes in the amount of numbers you want to return from the array and
// returns the smallest numbers in ascending order.

const exampleNumberList = [123, 4354353, 1, 0.2, 555, 1.3, 9400232, 42];

Array.prototype.getSmallestNumbers = function (numbersToReturn) {
  // Argument validation
  if (numbersToReturn > this.length) {
    throw new Error(
      "The provided argument must be lower than the array's length"
    );
  }
  if (typeof numbersToReturn !== 'number') {
    throw new Error('The provided argument is not a number.');
  }
  // Calculation starts here
  const arrayCopy = this.slice();
  const sortedArray = arrayCopy.sort((a, b) => (a < b ? -1 : 1));
  const result = [];
  for (let i = 0; i < numbersToReturn; i++) {
    result.push(sortedArray[i]);
  }
  return result;
};

// Try it! Experiment with different arguments.
console.log(exampleNumberList.getSmallestNumbers(2));
console.log(exampleNumberList); // Original array is unchanged.
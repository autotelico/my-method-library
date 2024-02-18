// This method allows you to get the lowest values from a number array.
// It takes in the amount of numbers you want to return from the array and
// returns the lowest numbers in ascending order.

const exampleNumberList = [123, 4354353, 1, 0.2, 555, 1.3, 9400232, 42];

Array.prototype.getLowestNumbers = function (numbersToReturn) {
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
  const sortedArray = this.sort((a, b) => (a < b ? -1 : 1));
  const result = [];
  for (let i = 0; i < numbersToReturn; i++) {
    result.push(sortedArray[i]);
  }
  return result;
};

// Try it! Experiment with different arguments.
console.log(exampleNumberList.getLowestNumbers(2));

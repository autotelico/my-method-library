// This method allows you to get the largest numbers of a number array.
// It takes in the amount of numbers you want to return
// and returns the largest numbers in descending order.

const exampleNumberList = [1, 4, 5645, 34, 3434, 65654];

Array.prototype.getLargestnumbersToReturn = function (numbersToReturn) {
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
  const sortedArray = this.sort((a, b) => (a < b ? 1 : -1));
  const result = [];
  for (let i = 0; i < numbersToReturn; i++) {
    result.push(sortedArray[i]);
  }
  return result;
};

// Try it! Experiment with different arguments.
console.log(exampleNumberList.getLargestnumbersToReturn(3));

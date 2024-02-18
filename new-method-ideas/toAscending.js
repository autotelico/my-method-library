// REASON:
// JavaScript's sort() method does not behave as in other programming
// languages like Ruby, where it sorts numbers according to their value,
// and it requires a callback function to sort numbers the same way.
// Else, it uses Unicode for the calculation.

// MY PROPOSAL:
// Make it so arrays can sort themselves in ascending/descending order
// without requiring callbacks for that purpose.
// The method will make things more intuitive.

// Below, the method toAscending() sorts the array
// in ascending order:

const exampleArray = [31, 32, 12311, 2, 0.5, 7];

Array.prototype.toAscending = function () {
  // Checks for non-number values
  for (const item of this) {
    if (typeof item !== 'number') {
      throw new Error('The array must only contain number elements.');
    }
  }

  return this.sort((firstValue, secondValue) => {
    return firstValue < secondValue ? -1 : 1;
  });
};

// Method test
console.log(exampleArray.toAscending());

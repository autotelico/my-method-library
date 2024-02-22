// REASON:
// JavaScript's sort() method uses Unicode by default to sort the array
// values. If a callback is passed, it sorts using the callback's instructions.

// While it has its value, the sort() method may surprise developers
// with programming backgrounds in other languages
// like Ruby, where the method sorts numbers according to their numerical
// value, with no need for callbacks.

// MY PROPOSAL:
// The toDescending() method makes it so arrays can
// be sorted in descending order, without requiring 
// callbacks for that purpose.
// The method will make things more intuitive for people with a Ruby or
// other language background.

// Below, the method toDescending() sorts the array
// in descending order:

const exampleArray = [31, 32, 12311, 2, 0.5, 7];

Array.prototype.toDescending = function () {
  // Checks for non-number values
  for (const item of this) {
    if (typeof item !== 'number') {
      throw new Error('The array must only contain number elements.');
    }
  }
  
  const arrayCopy = this.slice();
  return arrayCopy.sort((firstValue, secondValue) => {
    return firstValue > secondValue ? -1 : 1;
  });
};

// Method test
console.log(exampleArray.toDescending());
console.log(exampleArray); // Original array is unchanged.
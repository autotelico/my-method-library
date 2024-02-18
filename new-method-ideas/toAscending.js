// REASON:
// JavaScript's sort() method uses Unicode by default to sort the array
// values. If a callback is passed, it sorts using the callback's instructions.

// While it has its value, the sort() method may surprise developers
// with programming backgrounds in other languages
// like Ruby, where the method sorts numbers according to their numerical
// value, with no need for callbacks.

// MY PROPOSAL:
// The toAscending() method makes it so arrays can
// be sorted in ascending order, without requiring
// callbacks for that purpose.
// The method will make things more intuitive for people with a Ruby or
// other language background.

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

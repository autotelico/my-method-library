// The last() method returns the last value of an array.

const exampleArray = [1, 2, 3, 4, 5, 'cookie'];

Array.prototype.last = function() {
    return this[this.length - 1];
}

// Test
console.log(exampleArray.last());
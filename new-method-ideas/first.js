// The first() method returns the first value of an array.

const exampleArray = ['I am #1', 'I am #2', 'I am #3'];

Array.prototype.first = function() {
    return this[0];
}

console.log(exampleArray.first());
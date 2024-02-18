// The putLast() method is a recreation of the push() method from scratch.

const arr = [1, 2, 3, 4, 5];

Array.prototype.putLast = function(value) {
    this[this.length] = value;
    return this;
}

// Tests method
arr.putLast('cookie')
console.log(arr);
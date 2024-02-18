// The removeAt() method removes an array element at a given index.
// It takes in an index value and returns a new array without the value.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.removeAt = function(index) {
    for (let i = index + 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length = this.length - 1
    return this;
}

// Tests method
arr.removeAt(0)
arr.removeAt(3)
console.log(arr);
// The putFirst() method is a recreation of the unshift() method from scratch.

const arr = [1, 2, 3, 4, 5];

Array.prototype.putFirst = function (value) {
    this.length = this.length + 1;
    for (let i = this.length - 1; i > 0; i--) {
        this[i] = this[i - 1];
    }
    this[0] = value;
    console.log(this);
};

// Tests method
let r = arr.putFirst('I am first');
console.log(arr);
// The removeLast() method removes the last array element.

const arr = [1, 2, 3, 4, 5, 'remove me'];

Array.prototype.removeLast = function () {
  this.length = this.length - 1
  return this;
};

// Tests method
arr.removeLast();
console.log(arr);

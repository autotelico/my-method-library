const arr = [1, 2, 3, 4, 5];

Array.prototype.each = function (cb) {
  for (let i = 0; i < this.length; i++) {
    this[i] = cb(this[i]);
  }
  return this
};

function callback(element) {
  return element * 2;
}


arr.each(callback)
console.log(arr);
// the mapValues() method is a recreation of the map() method from scratch.

const arr = [1, 2, 3, 4, 5];

Array.prototype.mapValues = function(cb) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    console.log(this[i]);
    newArr.push(cb(this[i]));
  }
  return newArr;
};

const callback = (val) => {
  return val + 'cool';
}

let r = arr.mapValues(callback)
console.log(r);
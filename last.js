const arr = [1, 2, 3, 4, 5, 'cookie'];

Array.prototype.last = function() {
    return this[this.length - 1];
}

console.log(arr.last());
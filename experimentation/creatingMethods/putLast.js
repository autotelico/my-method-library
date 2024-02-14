const arr = [1, 2, 3, 4, 5];

Array.prototype.putLast = function(value) {
    this[this.length] = value;
    return this;
}

arr.putLast('cookie')
console.log(arr);
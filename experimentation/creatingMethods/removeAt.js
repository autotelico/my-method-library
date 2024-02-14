const arr = [1, 2, 3, 4, 5, 6, 7, 8];

Array.prototype.removeAt = function(index) {
    // removing at index 2
    for (let i = index + 1; i < this.length; i++) {
        this[i - 1] = this[i];
    }
    this.length = this.length - 1
    return this;
}

let r = arr.removeAt(2)
console.log(arr);
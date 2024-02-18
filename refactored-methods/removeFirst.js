const arr = [1, 2, 3, 4, 5];

Array.prototype.removeFirst = function() {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    this.length = this.length - 1
}

arr.removeFirst()
console.log(arr);
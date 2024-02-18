const numbers = [123, 4354353, 1, 0.2, 555, 1.3, 9400232, 42];

Array.prototype.getLowestNumbers = function(numbersToReturn) {
    if (numbersToReturn > this.length) {
        throw new Error('The provided argument must be lower than the array\'s length');
    }
    const sortedArray = this.sort((a, b) => a < b ? -1 : 1);
    const result = [];
    for (let i = 0; i < numbersToReturn; i++) {
        result.push(sortedArray[i])
    }
    return result;
}

console.log(numbers.getLowestNumbers(2))
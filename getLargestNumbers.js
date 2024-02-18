// This method allows you to get the largest numbers of any array.
//      It takes in the amount of numbers you want to return
//      and returns them in descending order.

const numbersToReturn = [1, 4, 5645, 34, 3434, 65654]

Array.prototype.getLargestnumbersToReturn = function (numbersToReturn) {
    if (numbersToReturn > this.length) {
        throw new Error('The provided argument must be lower than the array\'s length');
    }
    const sortedArray = this.sort((a, b) => a < b ? 1 : -1);
    const result = [];
    for (let i = 0; i < numbersToReturn; i++) {
        result.push(sortedArray[i])
    }
    return result
}

console.log(numbersToReturn.getLargestnumbersToReturn(5));
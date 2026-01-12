function createCounter() {
    let count = 0; // This variable is "private"

    return function() {
        count++; // The inner function accesses 'count'
        return count;
    };
}

const myCounter = createCounter();

console.log(myCounter()); // 1
console.log(myCounter()); // 2
console.log(myCounter()); // 3
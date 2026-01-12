function add(a,b){
    return a + b;
}
let c=add(5,7);
console.log(c); // Output: 12
function myFunction(x, y = 10) {
  return x + y;
}
myFunction(5);
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

y = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(x); // Output: 346
console.log(y); // Output: 871
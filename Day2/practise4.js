let length = 16;
let weight = 7.5;
console.log("Length: " + length);
console.log("Weight: " + weight);
console.log(typeof length);
console.log(typeof weight);

// BigInt
{
let x = 1234567890123456789012345n;
let y = BigInt(1234567890123456789012345)
console.log(typeof x);
console.log(typeof y);
}
// Strings
let color = "Yellow";
let lastName = "Johnson";
console.log(typeof color);
console.log(typeof lastName);
{
// Boolean
let x = true;
let y = false;
console.log(typeof x);
console.log(typeof y);
}
// Undefined
let x;
let y;
console.log(typeof x);
console.log(typeof y);
{
// Null
let x = null;
let y = null;
    console.log(typeof x);
    console.log(typeof y);}


// Symbol
{const x = Symbol();
const y = Symbol();
console.log(typeof x);
console.log(typeof y);  
}
// Object
const person = {firstName:"John", lastName:"Doe"
 

};
   console.log(typeof person); 

// Array Object
const cars = ["Saab", "Volvo", "BMW"];
console.log(typeof cars);
// Date Object
const date = new Date("2022-03-25");
console.log(typeof date);
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green");
console.log("My father is " + myFather.firstName);
console.log("My mother is " + myMother.firstName);
console.log("My sister is " + mySister.firstName);
console.log("I am " + mySelf.firstName);
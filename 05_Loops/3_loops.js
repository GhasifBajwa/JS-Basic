// Array specific loops
// for of loop

let myarray = ["Flower", "Cat", "Dog", "Bird"];
for (let element of myarray) {
  console.log(element);
}

let greet = "Good Morning";
for (let element of greet) {
  console.log(element);
}

// Map
// const myMap = new Map();
// myMap.set(1, "One");
// myMap.set(2, "Two");
// myMap.set(3, "Three");
// for (let element of myMap) {
//     console.log(element);
// }
const myMap = new Map();
myMap.set(1, "One");
myMap.set(2, "Two");
myMap.set(3, "Three");
for (let [key, element] of myMap) {
  console.log(key, element);
}


// in manps for in loop is not apply
// const myMap = new Map();
// myMap.set(1, "One");
// myMap.set(2, "Two");
// myMap.set(3, "Three");
// for (let [key, value] in myMap) {
//   console.log(key, value);
// }
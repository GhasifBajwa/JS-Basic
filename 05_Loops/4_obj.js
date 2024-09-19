// Objects in loops

const myObj = {
  name: "Ghasif",
  age: "19",
};
// for of loop
for (let [key, value] of Object.entries(myObj)) {
  console.log(key, value);
}

// for in loop
for (let key in myObj) {
  console.log(key, myObj[key]);
}

// Array in loops

const myArray = ["Ghasif", "Bajwa", "Ali"];
// for in loop
for (let index in myArray) {
  console.log(index, myArray[index]);
}

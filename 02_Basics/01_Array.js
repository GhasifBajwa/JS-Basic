// Arrays
const names = ["ghasif", "bajwa", "ali"];
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

// Array methods
names.push("asad");
console.log(names);
names.pop();
console.log(names);
names.unshift("ghasif");
console.log(names);
names.shift();
console.log(names);
console.log(names.includes(4));
console.log(names.indexOf("ghasif"));
const newName = names.join(" ");
console.log(typeof newName);

//Slice
console.log("G", names);
const newNames = names.slice(1, 3);
console.log(newNames);
console.log("B", names);

//Splice
const newNames1 = names.slice(1, 3);
console.log(newNames1);
console.log("M", names);

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

const Arrays = new Array(1, 2, 3, 4, 5);
console.log(Arrays);
console.log(Arrays[0]);
console.log(Arrays[1]);
console.log(Arrays[2]);
console.log(Arrays[3]);
console.log(Arrays[4]);

// Note: Slice not manuplate the original array
// Note: Splice manuplate the original array

// Objects
// singleton made by constructor
// Object.create
// singleton not made by literals

const mysym = Symbol("My Symbol");

const jsUser = {
  name: "Ghasif",
  // give string datatype
  // mysym: "ghasif",
  // give symbol datatype
  [mysym]: "ghasif",
  age: 19,
  location: "Bahawalpur",
  email: "ghasif3382@gmail.com",
};
// normal methods
console.log(jsUser.name);
// good or unique method
console.log(jsUser["email"]);

// how to change value in object
jsUser.name = "Bajwa";
// hot to freeze  object
// Object.freeze(jsUser);
// jsUser.name = "Ali";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello");
};
jsUser.greetingTwo = function () {
  console.log(`Hello, ${this.name}`);
};
// give undefined
//console.log(jsUser.greeting);
// give values
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

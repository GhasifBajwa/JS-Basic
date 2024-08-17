// stack, Heap memory

// Stack (primitive)
// Heap (non-primitive)

// stack memory => function
let myName = "ghasif";
let anotherName = myName;
anotherName = "bajwa";
console.log(myName);
console.log(anotherName);

// heap memory => object
let user = {
  name: "ghasif",
  email: "ghasif3382@gmail",
  age: 19,
};
let anotherUser = user;
anotherUser.name = "bajwa";
console.log(user);
console.log(anotherUser);

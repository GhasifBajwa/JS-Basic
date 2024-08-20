// this is used only in object not in function

const user = {
  username: "ghasif",
  price: 999,
  WelcomeMessage: function () {
    console.log(`${this.username} , Welcome to our site`);
    console.log(this);
  },
};
user.WelcomeMessage();
user.username = "bajwa";
user.WelcomeMessage();

// console.log(this); // window on browser and {} on node js
// Window => global object on browser
// {} => global object on node js

// Show undefined because this is used in function not in object
// Example with simple function
// function thisMethod() {
//   let user = "ghasif";
//   console.log(this.user);
// }
// thisMethod();

// Example with arrow function
// const thisMethod = () => {
//   let user = "ghasif";
//   console.log(this.user);
// };
// thisMethod();

// () => {} basic syntax of arrow function
// This is explicitly written
const addtwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addtwo(10, 20));

// More syntax of arrow function
// This is implicitly written
// First syntax
// const add1 = (num1, num2) => num1 + num2;
// console.log(add1(10, 20));
// Second syntax
// const add2 = (num1, num2) => (num1 + num2);
// console.log(add2(10, 20));
// Third syntax
// const add3 = (num1, num2) => ({ username: "ghasif", price: num1 + num2 });
// console.log(add3(10, 20));

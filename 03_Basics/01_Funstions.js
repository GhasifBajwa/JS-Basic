// Funstions

// Basic function
function sayMyName() {
  console.log("G");
  console.log("H");
  console.log("A");
  console.log("S");
  console.log("I");
  console.log("F");
}
sayMyName();

// Function with parameter
// function addTwoNumber(num1, num2) {
//   console.log(num1 + num2);
// }
// passing arguments
// const result = addTwoNumber(10, 20);
// console.log(result);

// Function with return
function addTwoNumber(num1, num2) {
  //   let result = num1 + num2;
  //   return result; // difficult
  return num1 + num2; // easy or good
}
const result = addTwoNumber(10, 20);
console.log("Result: ", result);

function loginUserMessage(username) {
  if (username === undefined) {
    console.log("Please provide a username");
  } else {
    return `${username} logged in successfully`;
  }
}
const loginStatus = loginUserMessage("ghasif");
// const loginStatus = loginUserMessage(); // give undefined
console.log(loginStatus);

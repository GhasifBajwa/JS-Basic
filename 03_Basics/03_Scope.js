// Part1 Scope only

let num1 = 100;
const num2 = 200;

if (true) {
  let num1 = 10;
  const num2 = 20;
  console.log("Inner:", num1);
  console.log("Inner:", num2);
  //   var num3 = 30;
}

console.log(num1);
console.log(num2);
// console.log(num3);

// Part2 Nested Scope

function one() {
  const username = "ghasif";
  function two() {
    const website = "github.com";
    console.log(username);
    console.log(website);
  }
  two();
}
one();

if (true) {
  const username = "ghasif";
  if (username === "ghasif") {
    const website = "github.com";
    console.log(username + website);
  }
  //   console.log(website);
}
// console.log(username);

// Interesting concept

// Simple function
console.log(addone(10)); // no error
function addone(num) {
  return num + 1;
}
// addone(10);

// function with expression
// addtwo(20); // error
const addtwo = function (num) {
  return num + 2;
};
console.log(addtwo(20));

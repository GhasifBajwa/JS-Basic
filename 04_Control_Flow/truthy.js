const userEmail = "ghasif3382@gmail";

if (userEmail) {
  console.log("valid email");
} else {
  console.log("invalid email");
}

// falsy values
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN
// false

// truthy values
// 1
// "0"
// "false"
// " "
// function () {}
// "ghasif"
// {}
// []
// true

const emptyArray = [];
if (emptyArray.length === 0) {
  console.log("array is empty");
}

const emptyObject = {};
if (Object.keys(emptyObject).length === 0) {
  console.log("object is empty");
}

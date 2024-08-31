// if

// if (true) {
// }
// if (false) {
// }
// operaters
// ==>, ==, ===, !=, >, <, >=, <=, &&, ||, !, ?, ??

const isUserLogin = true;
if (isUserLogin) {
  console.log("Login");
}

if (2 === "2") {
  console.log("true");
}

const temperature = 20;
if (temperature > 20) {
  console.log("It is too hot");
} else {
  console.log("It is too cold");
}

const score = 200;
if (score > 100) {
  const power = "strong";
  console.log(`User is ${power}`);
}

const balance = 1000;
if (balance > 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Less than 1200");
}

const userLoggedIn = true;
const debitCard = true;
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if (userLoggedIn && debitCard) {
  console.log("User can buy");
} else {
  console.log("User can't buy");
}

if (LoggedInFromGoogle || LoggedInFromEmail) {
  console.log("User logged in");
}

// Nullish Coalescing Operator
// ??: null or undefined

let values;
values = 5 ?? 10;
console.log(values);

values = null ?? 10;
console.log(values);

values = undefined ?? 10;
console.log(values);

values = null ?? 10 ?? 20;
console.log(values);

// Ternary operator
// condition ? true : false

const isLogin = "ghasif";
const user = isLogin ? "ghasif" : "Guest";
console.log(user);

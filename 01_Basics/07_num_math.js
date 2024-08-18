// About Number
const score = 400;
console.log(score);
const balance = new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));
const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3));
const hundred = 100000;
console.log(hundred.toLocaleString());

// About Math
console.log(Math);
console.log(Math.abs(-100));
// use many Math methods
console.log(Math.round(10.6));
// use less Math methods
console.log(Math.ceil(10.1));
console.log(Math.floor(10.9));
console.log(Math.min(1, 2, 3, 4, 5, 6));
console.log(Math.max(1, 2, 3, 4, 5, 6));
console.log(Math.random());
console.log(Math.random() * 10 + 1);
// math most used formula
const min = 10;
const max = 20;
console.log(Math.round(Math.random() * (max - min + 1) + min));

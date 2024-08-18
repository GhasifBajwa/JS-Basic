// Dates
// The date is the pain point of JavaScript
const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
// most used method locale string
console.log(date.toLocaleString());
console.log(date.toUTCString());
console.log(date.getTime());
console.log(Date.now());
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTimezoneOffset());
console.log(typeof date);

let today = new Date(2023, 0, 1);
console.log(today.toDateString());
console.log(typeof today);

// timestamp
let timestamp = Date.now();
console.log(timestamp);
console.log(typeof timestamp);
console.log(Math.round(Date.now() / 1000));

// More methods
let anotherDate = new Date();
console.log(anotherDate);
console.log(anotherDate.getMonth() + 1);

// more methods of locale string
console.log(
  anotherDate.toLocaleString("default", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

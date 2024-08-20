// Immediately Invoked Function Expressions (IIFE)
// We use IIFE to avoid global scope pollution

// IIFE with simple function
// Or named IIFE
(function IIFE() {
  console.log(`DB Connected`);
})();

// IIFE with arrow function
// Or unnamed IIFE
((name) => {
  console.log(`DB Connected Again ${name}`);
})("ghasif");

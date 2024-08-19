// Functions part 2
// ... is called rest or spread operator

function calcualteCartPrice(...num1) {
  return num1;
}
console.log(calcualteCartPrice(200, 400, 500, 600, 700));

// function with object
const user = {
  username: "ghasif",
  price: 999,
};
function handleObject({ anyobject }) {
  console.log(
    `Username is ${anyobject.username} and  price is ${anyobject.price}`
  );
}
// first method with object
handleObject(user);
// second method with object
// handleObject({
//     username: "ghasif",
//     price: 999,
// });

// function with array
const myArray = [200, 300, 400];
function returnvalue(getArray) {
  return getArray[1];
}
// first method with array
console.log(returnvalue(myArray));
// second method with array
// console.log(returnvalue[(200, 300, 400)]);

// Objects part 2

// const siteUser = new Object(); singleton

// non singleton
const siteUser = {};
siteUser.id = "123abc";
siteUser.name = "Ghasif";
siteUser.email = "ghasif3382@gmail";

console.log(siteUser);
console.log(Object.keys(siteUser));
console.log(Object.values(siteUser));
console.log(Object.entries(siteUser));
console.log(siteUser.hasOwnProperty("email"));

const regularUser = {
  email: "ghasif3382@gmail",
  fullname: {
    userfullname: {
      firstname: "Ghasif",
      lastname: "Bajwa",
    },
  },
};
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);
console.log(regularUser.fullname.userfullname.lastname);

// conbining objects
const obj1 = { 1: "one", 2: "two" };
const obj2 = { 3: "three", 4: "four" };
// const obj3= {obj1, obj2}; //give object in object
// const obj3 = Object.assign({}, obj1, obj2); // give objec but least used method
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  { id: 1, name: "Ghasif", email: "ghasif3382@gmail" },
  { id: 2, name: "Bajwa", email: "bajwa3382@gmail" },
];
console.log(users[1].email);

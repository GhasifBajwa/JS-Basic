// for each loop

const coding = ["HTML", "CSS", "Javascript", "PHP", "Python"];
// coding.forEach(function (element) {
//   console.log(element);
// });
coding.forEach((element) => {
  console.log(element);
});

coding.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    name: "HTML",
    level: "Intermediate",
  },
  {
    name: "CSS",
    level: "Intermediate",
  },
  {
    name: "Javascript",
    level: "Beginner",
  },
  {
    name: "PHP",
    level: "Beginner",
  },
  {
    name: "Python",
    level: "Beginner",
  },
];
myCoding.forEach((item) => {
  console.log(item.name);
  console.log(item.level);
})
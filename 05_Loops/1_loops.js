// For loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is my favorite number");
  }
  console.log(element);
}

for (let i = 0; i <= 10; i++) {
  console.log(`Inner loop is ${i}`);
  for (let j = 0; j <= 10; j++) {
    console.log(`Outer loop is ${j} and Inner loop is ${i}`);
  }
}

for (let i = 1; i <= 10; i++) {
  console.log(`Inner loop is ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(i + " * " + j + " = " + i * j);
  }
}

let myarray = ["Flower", "Cat", "Dog", "Bird"];
for (let i = 0; i < myarray.length; i++) {
  console.log(myarray[i]);
}

// break and continue
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is Detected");
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("5 is Detected");
    continue;
  }
  console.log(i);
}

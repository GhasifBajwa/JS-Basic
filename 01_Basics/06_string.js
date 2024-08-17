const name = "ghasif";
const repoCount = 10;

// old js
// console.log(name + repoCount + "ghasif");

// string interpolation please prefer this way
console.log(`${name} has ${repoCount}`);

// string methods
const myName = "ghasif-bajwa";
const gameName = new String("ghasif");

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());
// split is used to split the string based on the separator
console.log(myName.split("-"));
// trim remove empty or extra spaces
console.log(myName.trim());
console.log(myName.trimStart());
console.log(myName.trimEnd());
console.log(myName.indexOf("f"));
console.log(myName.lastIndexOf("f"));
console.log(myName.includes("f"));
console.log(myName.repeat(3));
console.log(myName.startsWith("g"));
console.log(myName.endsWith("f"));
console.log(myName.concat(" ", "bajwa"));
console.log(myName.repeat(3));
console.log(myName.charAt(0));

// substring ignore negative index
const newString = myName.substring(0, 5);
console.log(newString);
// slice not ignore negative index
const anotherString = myName.slice(-5, 2);
console.log(anotherString);
// replace
const replacedString = myName.replace("f", "b");
console.log(replacedString);

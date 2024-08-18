const marvel_heroes = ["Ironman", "Hulk", "Spiderman", "Captain America"];
const dC_heroes = ["Batman", "Superman", "Flash", "Aquaman"];

// push method miner used
marvel_heroes.push(dC_heroes);
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

// concatenate methods slightly used
const allHeroes = marvel_heroes.concat(dC_heroes);
console.log(allHeroes);

// sepread operator mostly used
const newAllHeroes = [...marvel_heroes, ...dC_heroes];
console.log(newAllHeroes);

// More paracticular example
const another_Array = [1, 2, 3, [4, 5, 6], 7, [8, [9, 10]]];
const real_Another_Arraay = another_Array.flat(Infinity);
console.log(real_Another_Arraay);

// Another example
console.log(Array.isArray("ghasif"));
console.log(Array.from("ghasif"));

// interesting case for interview
console.log(Array.from({ name: "ghasif" }));
// interesting case for interview
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));

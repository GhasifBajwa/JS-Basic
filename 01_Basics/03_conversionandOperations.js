let score = "33";
// let score1 = "33abc";
// let score2 = null;
// let score3 = undefined;
// let score4 = true;
console.log(typeof score);
let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN (Not a Number)
//null => 0
//undefined => NaN (Not a Number)
//true=>1; false=>0

let logIn = 1; //true
let logIn1 = 0; //false
let logIn2 = ""; //false
let logIn3 = "ghasif"; //true
let boolLogIn = Boolean(logIn);
console.log(boolLogIn);

//1=>true; 0=>false;
//"" => false;
//"ghasif" => true;

let someNumer = 33;
let stringNumber = String(someNumer);
console.log(stringNumber);
console.log(typeof stringNumber);

//Operaions

let value = 3;
let negvalue = -value;
console.log(negvalue);
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "hello";
let str2 = "=ghasif";
let str3 = str1 + str2;
console.log(str3);

//bad paracice
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

//good paractice
console.log(((3 + 4) * 5) % 8);

//more paractice + example according to good or bad paractices
console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

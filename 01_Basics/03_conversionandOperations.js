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
let logIn1 = 0;//false
let logIn2 = "";//false
let logIn3 = "ghasif";//true
let boolLogIn = Boolean(logIn);
console.log(boolLogIn);

//1=>true; 0=>false;
//"" => false;
//"ghasif" => true;

let someNumer = 33;
let stringNumber = String(someNumer);
console.log(stringNumber);
console.log(typeof stringNumber);

const accountId = 144553;
let acountEmail = "ghasif3382@gmail.com";
var accountPassword = "12345";
accountCity = "Bahawalpur";
let accountState;// undefined variable

// accountId = 2; //not allowed

acountEmail = "exmplle.com";
accountPassword = "212121";
accountCity = "Multan";

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountPassword, acountEmail, accountCity]);

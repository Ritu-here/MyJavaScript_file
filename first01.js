//let ,const , var 




console.log("Wealth")

const accountId = 11021210
var accountPassword = "12345"
let accountEmail = "ritu89159@gmial.com"
accountCity = "jaipur"
let accountState;

//accountId = 2  //not allowed

/*
 prefer not to use var because if issue in block scope and functional scope
*/
accountEmail = "kritu@gmail.com"
accountPassword = 147852
accountCity ="patna"
console.log(accountId) 

console.table([accountEmail,accountId,accountPassword,accountCity , accountState])
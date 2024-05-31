//comparisons
// console.log(2 > 1);
// console.log(2>= 2);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0 );

// The reason is that an equality check == and comparisons > < >= <= work differently.
//comparison convert null to a number , treating it as 0. That's why (3) null >= 0 is true and (1) nulll>0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// === 
// console.log("2" === 2);


//SUMMARY

// Primitive data type
/* 7 types : String , Number , Boolean , Null , Undefiend , symbol , BigInt

*/

// javascript is a dynamically typed language.

const score = 100;
const scoreValue = 100.3;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId);

const BigNumber = 2345692134326543298765698741236545781n;

// console.lsog();

// Reference Type or Non Primitive data type

/*  Array , Object , Function */

//Array
const heros = ["shaktiman" , "naagraj" , "doga"]


//Object
 let myObj = {
    name: "ritu",
    age: 20,
}

//Function
const myFunction = function(){
    console.log("Hello world");
}
// console.log(typeof BigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log( typeof myFunction);
// console.log(typeof anotherId);


//===========================================================================================================================5

//memory - two types
// stack memory is use for primiitve data type (stack ke under hmesha copy milta hai aur heap ke ander hmesha hi reference milta hai )
// heap memory is ude for Non-primitive data type 

let my_ytName = "codingwithGWPien"
let anotherName = my_ytName;
anotherName = "ChaiaurCode"
console.log(anotherName);
console.log(my_ytName);


let user = {
    name: "Ritu Kumari ",
    upiId: 1234567890, 
    email: "chaiaurcode@gmail.com"
}


let usertwo = user ;
usertwo.email = "ritu@gmail.com"

console.log(user.email);
console.log(usertwo.email);
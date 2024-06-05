//objects

//singleton-


//object literals
//object.create--this is the another method for object creation--this is a constructor method

const mySymbol =Symbol("Key1")
const JsUser = {
    "name":"Hitesh",
    [mySymbol]:"mykey1",
    age: 18,
    Location:"Jaipur",
    Email:"ritu.google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday", "Saturday"]


}

// console.log(JsUser.Email);
// console.log(JsUser["Email"]);
// console.log(JsUser["name"]);
// console.log(JsUser);
JsUser.name = "Kislay"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.name = "Ritu"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello Everyone");
}
console.log(JsUser.greetings);

JsUser.greeting2 = function(){
    console.log(`Hello Everyone,${this.name}`);
}
console.log(JsUser.greeting2);

console.log(JsUser.greetings());
console.log(JsUser.greeting2());
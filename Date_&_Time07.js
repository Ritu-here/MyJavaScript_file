//Dates 
let myDate = new Date()
console.log(myDate.toString());          
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);


// let MyCreatedDate = new Date(2023,0,23);
// let MyCreatedDate = new Date(2023,0,23 , 5 ,2);
let MyCreatedDate = new Date("01-14-2024");
// console.log(MyCreatedDate.toDateString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(MyCreatedDate.getTime());
console.log(Date.now());

let NewDate = new Date()
console.log(NewDate);
console.log(NewDate.getMonth());
console.log(NewDate.getDay());
console.log();

NewDate.toLocaleString('default' , {
    weekday: "long"
})



const score = 400;
// console.log(score);

const balance = new Number(100)
// console.log(balance);


// console.log(balance.toString().length);
// console.log(balance.toFixed(2));


const anotherNumber = 823.8967
// console.log(anotherNumber.toPrecision(4));

const num2 = 1000000
// console.log(num2.toLocaleString('en-IN'));



//++++++++++++++++  Maths ++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3))        //ceil gives always higher value 
// console.log(Math.floor(4.8))           // floor gives always lower value of the number 
// console.log(Math.sqrt(36))          //square root of the given number
// console.log(Math.min(4,6,8,90,3,23,1,44));           //find out the minimum value 
// console.log(Math.max(3,4,5,6,78,99,8,2,1,99,0));           // Find out the maximum value

console.log(Math.random());
console.log((Math.random()*10) + 1) ;

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);

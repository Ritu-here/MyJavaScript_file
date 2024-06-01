//Array part 2
const myArr = [1 , 2, 3,4 ,5 ,6,7,8]

const fruits = ["Apple", "Banana","Coconut","Mango","Litchi"]
const vegetables = ["potato","Tomamto","Brinjal"]

// fruits.push(vegetables)
// console.log(fruits);
// console.log(fruits[5][1]);

 const allfood = fruits.concat(vegetables)
// console.log(allfood);

const allnewthinds = [...fruits,...vegetables]
// console.log(allnewthinds);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray("Hitesh"));

console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"}));                      //interesting


let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3));




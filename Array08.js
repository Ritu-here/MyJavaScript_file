// Array part one 

const Arr = [1,2,3,4,5,6,7,8,9]
// console.log(Arr);
// console.log(Arr[4]);
// console.log(typeof Arr);

const name = ["ritu", "situ", "Nitu" , "pitu"]
// console.log(name[3]);


//Methods in Array


 const myArr = [1,2,3,4,5,6] 
//  console.log(myArr);
//  myArr.push(1)
//  myArr.push(2)
//  console.log(myArr);

 myArr.pop()          //remove one element from the end of an array
//  console.log(myArr);

myArr.unshift(0)           //add a element in the starting of an array
// console.log(myArr);
myArr.shift() //remove a element from the starting of an array 

// console.log(myArr.includes(9));
// console.log(myArr.includes(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);
// console.log(typeof myArr);



//slice and splice 
console.log("A", myArr);

const myn1 = myArr.slice(1,3) 
console.log(myn1);

console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log(myArr);
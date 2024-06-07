const instagram = new Object()              //this id a singleton object
const fb = {}                                //This is Non-singleton object

instagram.id= "123Rs"
instagram.name = "kislay"
instagram.isLoggedIn = false
// console.log(instagram);

const regularUser = {
    email:"some@gmail.com",
    fullName:{
        userfullname:{
            fisrtname:"kislay",
            lastname:"singh"
        }
    }
}
// console.log(regularUser.fullName.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"e",6:"f"}
// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3);

// const obj3 = Object.assign( {} ,obj1,obj2,obj4)
const obj3 ={...obj1, ...obj2}
console.log(obj3);


const users = [
    {
        id:1,
        email: "ritu@gmail.com"
    }
]

console.log(instagram);

console.log(Object.keys(instagram));
console.log(Object.values(instagram));
console.log(Object.entries(instagram));
console.log(instagram.hasOwnProperty('isLogged'));
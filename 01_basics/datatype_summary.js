//Primitive datatype
/* String, Number, Boolean, null, Undefined, Symbol, BigInt */

const score = 100   //number
const scoreValue = 100.9 //number (float)


const isLoggedIn = false    //bool
const outsideTemp = null    //null
let userEmail;  //undefined


const id = Symbol('123')    //symbol
const anotherId = Symbol('123')

console.log(id==anotherId)


const bigNumber = 9349058384038583083n   //BigInt


//Refrence datatype (Non-Priitive)
/* Array, Function, Objects*/

const heros = ["shaktiman","naagraj","doga"]    //array

let myObj = {                       //objects
    name:"shivam",
    age: 22
}


const myFunction = function(){              //function
    console.log("hello world");
}
// console.log(typeof myFunction)
// console.log(typeof id)
// console.log(typeof anotherId)
// console.log(typeof bigNumber)
// console.log(typeof heros)




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory

//stack(primitive), Heap(Non-Primitive)

let myYoutubename = "shivampandey.com"

let anothername = "hiteshchaudhry.com"
anothername = "chaiaurcode"

console.log(anothername)
console.log(myYoutubename)

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1

user2.email = "hitesh@google.com"

console.log(user1.email)
console.log(user2.email)
//singleton

//object literals

const mySym = Symbol('key1')

const jsUser = {
    name: 'shivam',
    age: 18,
    [mySym]: "mykey1",
    "full name": "shivam pandey",
    location: 'delhi',
    email: 'shivam@mail.com',
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser['email'])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])


jsUser.email = "shiv@mail.com"      //if we want to change then use this
// Object.freeze(jsUser)           //if we want to lock object then use this
jsUser.email="shiveffm@lmls"

// console.log(jsUser)


jsUser.greeting = function(){
    console.log('hello js user');
}
jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
const user = {
    username: "shivam",
    price: 500,

    welcomeUser: function(){
        console.log(`${this.username} welcome to the website`)
        console.log(this)
    }
}

// user.welcomeUser();
// user.username = "shiva"
// user.welcomeUser()

// console.log(this)


// function chai(){
//     console.log(this)
// }
// chai()

//or

// const chai = function(){
//     let username = "shivam"
//     console.log(this.username)
// } chai()


//+++++++++++++++++++++++++++++++ intresting example of arrow function ++++++++++++++++++++++++++++++++
const chai = () => {
    let username = "shivam"
    console.log(this)
}
// chai()


// const addTwo = (num1, num2) => {             //basic arrow function
//     return num1 + num2;
// }


//  const addTwo = (num1, num2) => num1 + num2;                        //implicit return arrow function
// const addTwo = (num1, num2) => (num1 + num2);
//console.log(addTwo(5, 6)) //11


 const addTwo = (num1, num2) => ({username: "shivam"});
console.log(addTwo())



// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// myArray.forEach(() => {})
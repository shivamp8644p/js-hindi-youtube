// function sayMyName(){
//     console.log("s");
//     console.log("h");
//     console.log("i");
//     console.log("v");
//     console.log("a");
//     console.log("m");
// }
// sayMyName()


function addTwoNumbers(num1, num2){
// let result = num1+num2
// return result            //or next tarika
return num1+num2
}

const result = addTwoNumbers(8,9)
// console.log("result: ", result);


function loginUserMessage(username){
return `${username} just logged in`
}

// console.log(loginUserMessage("shivam"))




function calculateCartPrice(...num1){
return num1
} 

// console.log(calculateCartPrice(200, 400, 600, 800)) 

const user = {
    username: "shivam",
    price: 500,
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "shivam",
    price: 50,
})

const myNewArray = [145,23,635,44,50,66]

function returnSecondValue(getArray){
return getArray[1]
}
console.log(returnSecondValue(myNewArray))
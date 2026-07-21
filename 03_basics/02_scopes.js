let a = 1;

if(true){
    let a = 5;
const b = 10;                                   //inner scope is in the {}

// console.log(a,"inner scope")
}


// console.log(a,'outer scope')                //outrer scope is outside the {} 
// console.log(b)



function one(){
    const username = "shivam"
    

    function two(){
        const website = "youtube"
        console.log(username)
    }

    // two()
}
// one()


if(true){
    const username = "shiva"
    if(username === "shiva"){
const website = "youtube"
//console.log(username + " " + website)
    }
}


//+++++++++++++++++++++++++ intresting example of scope ++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1;
}
console.log(addone(5)); //6


// console.log(addTwo(5));
// const addTwo = function(num){
//     return num + 2;
// }
// console.log(addTwo(5)); //7
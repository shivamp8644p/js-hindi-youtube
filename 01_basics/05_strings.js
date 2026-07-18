const name= "shivam"
const repocount = 50

// console.log(name+repocount+"value")      //old version

//console.log(`Hello my name is ${name} and my repo count is ${repocount}`)   //new version

const gamename = new String('shivammm-pandey-com')

console.log(gamename[0]);
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(4));
console.log(gamename.indexOf('a'));


const newString = gamename.substring(0,4)
console.log(newString);

const anotherString = gamename.slice(-5,5)
console.log(anotherString);

const newString1 = "  shiva   "
console.log(newString1)
console.log(newString1.trim())

const url = "https://hitesh.com/hiteshchaudhary"
console.log(url.replace('hitesh','shivam'))
console.log(url.includes('shivam'))

console.log(gamename.split('-'))
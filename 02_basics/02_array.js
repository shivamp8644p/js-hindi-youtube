const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// marvel_heros.concat(dc_heros)           //concat
// console.log(marvel_heros)

const allheros = marvel_heros.concat(dc_heros)           //concat
console.log(allheros)


const allnewheros = [...marvel_heros, ...dc_heros]          //spread
console.log(allnewheros)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)


console.log(Array.isArray("shivam"))
console.log(Array.from("shivam"))
console.log(Array.from({name: "shivam"}))


let A = 100
let B = 200
let C = 300
console.log(Array.of(A,B,C))
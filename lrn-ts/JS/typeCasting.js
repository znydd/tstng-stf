// Implicit casting

let x = 4;
let y = '48'
console.log(x + y)// it will be a string as one of the variable is string and we are adding "+"
console.log(typeof (x + y))

// but for "-", "*", "/" it is different and all of them turned into numbers
console.log(y - x)
console.log(typeof (y - x))

console.log(y * x)
console.log(typeof (y * x))

console.log(y / x)
console.log(typeof (y / x))
console.log("\n")

// crazy stuff
let i = "2"
let j = 0
let k = i + j
let l = +i
console.log(typeof k)
console.log(typeof l)
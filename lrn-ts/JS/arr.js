// let arr = [1, 2, 3, 4, 5]
// console.log(arr.length)
// arr.push(99)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(88)
// console.log(arr)
// arr.shift()
// console.log(arr)
// arr.splice(2, 2)
// console.log(arr)
// arr.splice(2, 1, 3)
// console.log(arr)
// arr.concat([99, 11, 33])
// console.log(arr)

//Array Buffer

const buffer = new ArrayBuffer(4); // 16 bytes Array Buffer
console.log(buffer.byteLength)
const uint8View = new Uint8Array(buffer)
uint8View[0] = 255; // Max value for 8-bit unsigned integer
uint8View[1] = 128;
uint8View[2] = 64;
uint8View[3] = 0;
console.log(uint8View)


let x = 1;
let y = (x + 100, x + 1, 9)// return the last one
console.log(y)
// Primitive
let uni = "Bracu"
let full = 'Brac University'
let est = 2002

let msg = `This is ${uni} or ${full}, which was established in ${est}
but we can go multiline`

console.log(msg)
console.log(0.1 + 0.2)
let n;
console.log();

let bigNumber = 12345678901234567890n;
let anotherBig = BigInt("12345678901234567890");
console.log(bigNumber === anotherBig); // true

let result = bigNumber + 2n; // 12345678901234567892n
// let invalid = bigNumber + 2; // Error: Cannot mix BigInt and number

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (symbols are unique)
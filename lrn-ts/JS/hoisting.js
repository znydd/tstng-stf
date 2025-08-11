// var hoisting
console.log(x); // undefined. Hoisted and behaves as if I initialized x with "undefined" with "var x;" before this console.log
var x = 9;
console.log(x); // 9
function var_hoisting() {
    console.log(y); // undefined
    var y = 44;
    console.log(y); // 44
}

var_hoisting()

//let and const hoisting

// console.log(a); // ReferenceError: Cannot access 'a' before initialization. Here it is hoisted but not initialized "undefined"
let a = 10;
console.log(a); // 10

function example() {
    // console.log(b); // ReferenceError: Cannot access 'b' before initialization
    const b = 20;
    console.log(b); // 20
}
example();

// Functions and Classes are also hoisted

console.log(greet()) // here we are calling the greet() function before initializing it before of hoisting

function greet() {
    console.log("Good Morning")
}

// it works as if 
function myFunction() {
    return "Hello, World!";

}
console.log(myFunction()); // "Hello, World!"
//Key Observations:
// Unlike var, function declarations are hoisted with their full implementation, so they can be called anywhere in their scope.
// This applies only to function declarations, not "function expressions" or "arrow functions".

"use strict"

console.log(this);
function x() {
    console.log(this);
}
x();

// In non-strict mode where ever the value of "this" is undefined or null, it becomes the Global Object instead of undefined or null
// for example above inside the function the value of "this" is the Global Object but in strict mode it is undefined

// All below will be in strict mode

// Also the value of "this" depends how we call functions for example:
window.x() // Window Object

const obj = {
    a: 10,
    x: function () {
        console.log(this) // here the value of this is "obj" object
    }
}

obj.x();

const obj2 = {
    a: 99
}
obj.x.call(obj2)
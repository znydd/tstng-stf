// https://www.youtube.com/watch?v=AOPmqw9scfc

// In JS everything is a Object
let creep = "Rohon Saha";
console.log(creep.__proto__);

const greeter = {
    name: "Rohon",
    time: 3,
    greet: function () {
        return `Good Morning ${this.name}. Time: ${this.time}PM`;
    }
}

console.log(greeter.greet())
// also can be created like
const obj = new Object()
obj.name = "faltuOBj"

console.log(obj.name)
// also can be created with constructor function and class syntax
const p1 = {
    fname: "Znyd",
    lname: "Nabil",
    getFullName() {
        return `${this.fname} ${this.lname}`
    }
}

const p2 = {
    __proto__: p1
}
// or 
// const p2 = Object.create(p1)

console.log(p2.fname)

// builtin objects are just inheriting from the global Class with prototype
// when we create something like
let father = "Bachchu"
// means or similar as with wrapper class 
let mother = new String("Nasima")
const companyName = new String()
companyName.__proto__ = String.prototype // Creating objects of String() class means setting the __proto__ property to String.prototyp
// which will inherite all the function of String() class
// somethig like
const companyName = {
    __proto__: String.prototype
}
// __proto__ of object points to prototype of class



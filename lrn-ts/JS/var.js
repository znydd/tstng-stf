// var
var x = 4; // global scope

function fun() {
    console.log(y);// Hoisting (Temporal Dead Zone (TDZ)) 
    var y = 99;
    var z;
    console.log(x);
    console.log(y);

    y = 88;
    console.log(y);

    var y = 33; // re-declare
    console.log(y);

    if (x == 4) {
        console.log(y);
        console.log(x);
        console.log(z);// Hoisting
        z = 202;
    }
    console.log(z);

}
fun()

var x = 100; // re-declare
console.log(x)
// console.log(y) outside function scope of "var y = 99;"
// Final verdict Just dont use var, only useful for legacy codebase

for (var i = 0; i <= 5; i++) {
    console.log(i)
    // setTimeout(() => console.log(i), 1000) // 6,6,6,6,6,6
}
let x = 11;
let p;
// console.log(y)
// console.log(z)
console.log(p)

function fun() {
    console.log(x);
    if (x == 11) {
        let y = 22;
        console.log(y);
        //let y = 1111; can't re-declared
        y = 99999
        console.log(y);
    }
    //console.log(y) error bcz let y = 22; was initialized inside the if scope
    let u = 235;
}
fun()
// console.log(u) Error out of scope
let z = 8888;

// it works without "strict mode" and only in browser js 
function calculatePrice() {
    price = 100; // Implicit global
}
calculatePrice();
console.log(price); // Outputs: 100 (accessible globally)
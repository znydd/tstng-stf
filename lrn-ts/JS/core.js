function* wizard() {
    yield "Step 1: Choose character";
    yield "Step 2: Choose weapon";
    yield "Step 3: Start quest!";
}

// for (const step of wizard()) {
//     console.log(step);
// }
let step = wizard()

console.log(step.next().value)
console.log(step.next().value)
console.log(step.next().value)

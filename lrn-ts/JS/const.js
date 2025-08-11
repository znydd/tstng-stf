// const pi; error must initilized during declaration
const PI = 3.1416;

function gg() {
    const KEY = "Enter"
    const MEM = ["0x1", "0x2", "0x3"];
    console.log(MEM)

    MEM[2] = "0X4"// happens in Objects and Array
    console.log(MEM)
    if (PI == 3.1416) {
        const VAL = 45;
        console.log(VAL)
    }
    // console.log(VAL); if scoped error
}
// console.log(KEY); Socpe Error
gg()

// const file = Bun.file("./data.json")
// const data = await file.json()
// console.log(data)
import data from "../data.json"

console.log(typeof data)
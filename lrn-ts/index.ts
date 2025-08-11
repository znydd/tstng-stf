let username: string = "Nabil";
let age: number = 23;
let isActive: boolean = true;

console.log(`User ${username}, Age ${age}, Active ${isActive}`);

let uni = "Bracu";
let cmd: unknown = "could be anything"
let inp: any = ""

const arr: string[] = ["gg", "bb", "nn"];
// const arr = ["gg", "bb", "nn"] as const; this does not work redeclaration

console.log(arr)
arr[2] = "pp";

console.log(arr)

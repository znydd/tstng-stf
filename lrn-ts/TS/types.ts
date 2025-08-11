// primitives
let isActive: boolean = false;
let age: number = 23;
const PI: number = 3.1416;
const name: string = "Nabil";
let vv: void = undefined; // on void we can only undefined but it only used on function return
let later: undefined; // on if we expect undefined then make type undefined otherwise not. we can't assign anything here.

let userIdo: null | number = null;
let count: string | number = 444;

// Object types the real stuff
// re-usable grouped datatype with interface 
interface llmResp {
    msg: string;
    metadata: number | string;
}
function getResp(resp: llmResp): void {
    // console.log(resp)
}
const respObj = {
    msg: "I am GPT-5",
    metadata: 88
}
getResp(respObj)
// Classes in TS is same as JS just with types
// Instead of using magic constant numbers/values we use enum and group related stuff and always use them to evaluate
// for example window size for new player is 1080 so instead of checking window_size === 1080, 
// we do window_size === NewPlayer.windowSize every time we check we will use NewPlayer.windowSize this insead 1080

//Array
let ppl1: string[] = ['1', '2', '3']
let ppl: any[] = [1, '1', '2', '3']
// Tuple
let userInfo: [string, number, boolean] = ['Nabil', 45, false]
// Normal Object type
let obj: Object = {
    id: 34,
    name: "nabil"
}

// Top types
let unkn: unknown = "test"

// Unknown
let valueUnknown: unknown = "Hello";
//valueUnknown.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof valueUnknown === "string") {
    valueUnknown.toUpperCase(); // OK, type is narrowed to string
}
//Type assertions 
let x: unknown = '8';
let b: number = 8;
let y = x as number;
let z = b as any;
// console.log(y)
// console.log(z)

// as const, we can make array/objects immutable at compile time
const arr = [1, 2, 3, 4] as const;
// arr[1] = 99;
console.log(arr)

// Non-null assertion
let userId: string | null = null;
userId = "123";
console.log(userId!.length); // Output: 3 (asserts userId is not null)

// "Stisfies"
// We can use this to confirm is something satisfies the type/interface
interface theme {
    backGround: "Black" | "White";
    navBar: "Blue";
}

const myTheme = {
    backGround: "White",
    navBar: "Blue"
} satisfies theme

console.log(myTheme)


// Type compatibility
interface Point {
    x: number;
    y: number;
}
interface PointZ {
    x: number;
    y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: PointZ = p1;

console.log(p2.x); // Output: 10
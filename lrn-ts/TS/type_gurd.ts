class Bird {
    fly() {
        console.log('flying...');
    }
    layEggs() {
        console.log('laying eggs...');
    }
}
class Man {
    constructor() {
        console.log("Man")

    }
}

const pet = new Bird();

// instanceof
if (pet instanceof Bird) {
    pet.fly();
    pet.layEggs();
} else {
    console.log('pet is not a bird');
}

// typeof
let value: string | number = '';

if (typeof value === 'string') {
    console.log('value is a string');
} else {
    console.log('value is a number');
}
// Generics
type llmResp<MSG> = {
    msg: MSG
}

let obj = {
    msg: {
        model: "gpt",
        ctx_ln: 55
    }
}
let obj2 = {
    msg: {
        model: "gpt",
        isThere: true
    }
}
let obj3 = {
    msg: [3, 4, 8]

}
const r1: llmResp<{ model: string, ctx_ln: number }> = obj;
const r2: llmResp<{ model: string, isThere: boolean }> = obj2;
const r3: llmResp<number[]> = obj3;
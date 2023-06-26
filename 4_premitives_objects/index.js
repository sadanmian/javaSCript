// nn bb ss u  -- Premitive Data Types
let a = null;
console.log(typeof a);

let b = 1;
console.log(typeof b);

let c = true;
console.log(typeof c);

let d = BigInt("567") + BigInt("3");
console.log(typeof d);

let e = "Sadan"
console.log(typeof e);

let f = Symbol("This is a Symbol")
console.log(typeof f);

let g = undefined;
console.log(typeof g);

console.log(a, b, c, d, e, f, g);

// Objects -- Non Premitive Data Types

const item = {
    "Sadan": true,
    "Abdul": 12,
    "Salva": undefined
}

console.log(item);
console.log(item.Abdul);
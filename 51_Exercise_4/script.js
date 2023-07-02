let a = new Date()
let h = a.getHours()
let m = a.getMinutes()
let s = a.getSeconds()
let d = a.getDate()

console.log("Value of a is ", a);
console.log("Value of h is ", h);
console.log("Value of m is ", m);
console.log("Value of s is ", s);
console.log("Value of d is ", d);

let second = setInterval(() => {
    return s;
}, 1000);

console.log(second);

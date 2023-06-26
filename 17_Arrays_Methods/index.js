let num = [1, 2, 3, 45, 77]
console.log(num, typeof num);

let a = num.toString()
console.log(a, typeof a);

let c = num.join("__")
console.log(c, typeof c);

let r = num.pop()
console.log(num, r);

let rr = num.push(69)
console.log(num, rr, typeof rr);

let s = num.shift()
console.log(num);

let ss = num.unshift(11)
console.log(num, ss, typeof ss);

// Destructuring

// let arr = [3, 5, 8, 9, 12, 22, 59]
// let [a, b, c, ...rest] = arr
// let [a, , , ...rest] = arr
// no need to do this
// let a = arr[0]
// let b = arr[1]

// console.log(a, ...rest);

// let obj = {
//     a: 1, b: 5
// }
// let { a, b } = obj
// console.log(a, b);

// let { a, b } = { a: 1, b: 2 }
// console.log(a, b);

// Spread Syntax, to convert into key-value pairs
// let arr1 = [3, 5, 9]
// let obj1 = { ...arr1 }
// console.log(obj1);

// function sum(x, y, z) {
//     return x + y + z;
// }
// console.log(sum(...arr1));

let obj2 = {
    name: "Sadan",
    company: "jollyRoger",
    address: "xyz"
}
// console.log(obj2);
console.log({ obj2, name: "Mian" });
console.log({ ...obj2, name: "Mian" });
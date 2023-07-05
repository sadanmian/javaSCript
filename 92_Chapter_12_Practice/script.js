
// // 1
// const a = (text) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 2000);
//     })
// }

// //IIFE
// (
//     async () => {
//         let text = await a("Hello")
//         console.log(text);
//         text = await a("World")
//         console.log(text);
//     }
// )()

// // 2
// function average(x, y) {
//     return (x + y) / 2;
// }
// let x = [2, 8]
// console.log(average(...x));

// // 3
// const a = (text, n) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(text);
//         }, 1000 * n);
//     })
// }

// //IIFE
// (
//     async () => {
//         let text = await a("Hello", 2)
//         console.log(text);
//         text = await a("World", 2)
//         console.log(text);
//     }
// )()

// 4
function simpleInterest(p, r, t) {
    return (p * r * t) / 100
}
let x = [1000, 5, 1]
console.log(simpleInterest(...x));
// // 1

let obj = {
    sadan: 98,
    abdul: 70,
    rohan: 7,
    aakash: 80
}

// console.log(Object.keys(obj));
// console.log(Object.keys(obj).length);
// console.log(Object.keys(obj)[1]);
// console.log(obj[Object.keys(obj)[1]]);

// for (let i = 0; i < Object.keys(obj).length; i++) {
//     console.log("The Marks of " + Object.keys(obj)[i] + " is " + obj[Object.keys(obj)[i]]);
// }

// // 2

// for (const key in obj) {
//     console.log("The Marks of " + key + " is " + obj[key]);
// }

// // 3

// let number = 5;

// if (number == 5) {
//     console.log("Your Enter the Corrent Number");
// } else {
//     console.log("Try Again");
// }

const mean = (a, b, c, d, e) => {
    return ((a + b + c + d + e) / 5)
}

console.log(mean(5,5,5,5,5));




let p1 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
    setTimeout(() => {
        // console.log("This Promise is fullfilled");
        resolve(true)
    }, 2000);
})
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
    setTimeout(() => {
        // console.log("This Promise is rejected");
        reject(new Error("This is Error"))
    }, 2000);
})

p1.then((value) => {
    console.log(value);
})
p2.catch((value) => {
    console.log("Some Error in p2");
})
p2.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error);
})

// console.log("Promise is Pending");
// setTimeout(() => {
//     console.log("This Promise is fullfilled");
// }, 5000);
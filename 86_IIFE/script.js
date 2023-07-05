// Immediately Invoked Function Expression

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 2000);
    })
}
// let b = async (value) => {
//     let c = await a()
//     console.log(c);
//     let d = await a()
//     console.log(d);
//     let e = await a()
//     console.log(e);
// }
// b()

// now with IIFE
(async (value) => {
    let c = await a()
    console.log(c);
    let d = await a()
    console.log(d);
    let e = await a()
    console.log(e);
})()
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds");
//         resolve(56)
//     }, 2000);
// })

// p1.then((value) => {
//     console.log(value);
//     let p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Promise 2")
//         }, 2000);
//     })
//     return p2
// }).then((value) => {
//     console.log("We are done");
//     return 2;
// }).then((value) => {
//     console.log("We are pakka done");
// })

// LoadScript Function

const loadScritp = (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = src;
        document.body.appendChild(script)
        script.onload = () => {
            resolve("Script has been loaded!!!")
        }
        script.onerror = () => {
            reject(0)
        }
    })
}

// let p1 = loadScritp("https://localhost:3000/script.js") 
let p1 = loadScritp("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
p1.then((value) => {
    console.log(value);
}).catch((error) => {
    console.log("We are having problem loading script");
})
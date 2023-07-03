// 1
// const loadScript = async (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.onload = () => {
//             resolve(src + " You are done!!!")
//         }
//         document.body.append(script)
//     })
// }
// let x = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
// x.then((value) => {
//     console.log(value);
// })


// 2
// const main1 = async () => {
//     console.log(new Date().getFullYear());
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js")
//     console.log(a + " sadan");
// }
// main1()

// 3
// let p3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("New Error Found!!!")
//         }, 3000);
//     })
// }
// let a = async () => {
//     try {
//         let c = await p3()
//         console.log(c);
//     } catch (error) {
//         console.log(error);
//     }
// }

// a()

// 4
let p4 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(4)
        }, 2000);
    })
}
let p5 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        }, 1000);
    })
}
let p6 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(6)
        }, 3000);
    })
}
const run = async () => {
    console.time("run")
    // let a4 = await p4()
    // let a5 = await p5()
    // let a6 = await p6()
    let a4 = p4()
    let a5 = p5()
    let a6 = p6()
    let a4a5a6 = await Promise.all([a4, a5, a6])
    console.log(a4a5a6);
    console.timeEnd("run")
}
run()

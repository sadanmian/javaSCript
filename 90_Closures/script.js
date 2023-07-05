
// message = "Good Global"
// function hello1() {
//     let message = "Good Morning"
//     {
//         let message = "Good AfterNoon"
//         console.log("Hello1 " + message);
//     }
//     let c = function hello2() {
//         console.log("I am c " + message);
//     }
//     message = "This is good"
//     return c;
// }

// c = hello1()
// c()



function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a);
        const y = () => {
            let a = 2
            console.log(a);
            const z = () => {
                let a = 3
                console.log(a);
            }
        }
        y()
    }
    return x()
}
returnFunc()
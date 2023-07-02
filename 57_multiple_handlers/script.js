let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("This is not Resolved")
        resolve(1)
    }, 2000);
})

p1.then((value) => {
    console.log("This promise is now resolved");
})
p1.then(() => {
    console.log("Hurray")
})
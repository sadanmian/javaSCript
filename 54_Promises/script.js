
let promise = new Promise((resolve, reject) => {
    console.log("This is Promise");
    resolve(56)
})

console.log("Hello");
setTimeout(() => {
    console.log("Hey in 2 seconds");
}, 1000);
console.log("My name is John Wick");
console.log(promise);

// Fetch google.com homepage ==> alter("google.com homepage done")
// Fetch data from the data api
// Fetch pictures from the server
// Print downloading
// Rest of the script


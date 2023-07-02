// Syncronous Programming
// let a = prompt("What is your name?")
// let b = prompt("What is your age?")
// let c = prompt("What is your favorite color?")
// these are examples of syncronous programming

// Asyncronous Programming
// console.log("Start");
// setTimeout(() => {
//     console.log("This is Example of Asyncronous Programming");
// }, 2000);
// console.log("End");

// Callbacks Function
const loadScript = (src, callback) => {
    var script = document.createElement("script")
    script.src = src;
    script.onload = function () {
        console.log("Loaded script with SRC : " + src);
        callback(null, src)
    }
    script.onerror = function () {
        console.log("Error loading with script with SRC : " + src);
        callback(new Error("SRC got some error"))
    }
    document.body.appendChild(script)
}

const hello = (error, src) => {
    if (error) {
        console.log(error);
        return;
    }
    alert("Hello World! " + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bbbbootstrap@5.3.0/dist/js/bootstrap.bundle.min.js", hello)


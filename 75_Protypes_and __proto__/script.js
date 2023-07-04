let a = {
    name: "Sadan",
    language: "JavaScript",
    run: () => {
        alert("Self Run")
    }
}

console.log(a);

let p = {
    run: () => {
        alert("Run")
    }
}
p.__proto__ = {
    name2: "Abdul"
}

a.__proto__ = p
a.run()
console.log(a.name2);
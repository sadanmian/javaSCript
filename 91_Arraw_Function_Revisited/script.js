const sayHello = name => console.log("Hello " + name);
sayHello("Sadan")

const x = {
    name: "Sadan",
    role: "Web Developer",
    exp: 30,
    show: function () {
        // let that = this
        // setTimeout(function () {
        //     console.log(`The name is ${this.name}\nThe Role is ${this.role}`);
        // }, 2000);
        setTimeout(() => {
            console.log(`The name is ${this.name}\nThe Role is ${this.role}`);
        }, 2000);
    }
}
console.log(x.name, x.exp);
x.show()
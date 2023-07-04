class Animal {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    run() {
        console.log(this.name + " is running");
    }
    shout() {
        console.log(this.name + " is shouting");
    }
}

class Monkey extends Animal {
    eat() {
        console.log(this.name + " is Eating Banana");
    }
}

let a = new Animal("Lion", "Pink")
let m = new Monkey("Monkey", "blue")
a.run()
a.shout()
m.run()
m.shout()
m.eat()
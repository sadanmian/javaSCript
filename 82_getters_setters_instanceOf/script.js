class Animal {
    constructor(name) {
        this._name = name
    }
    fly() {
        console.log("Mai udh raha hu");
    }
    get name() {
        return this._name
    }
    set name(newName) {
        this._name = newName
    }
}

let a = new Animal("sher")
a.fly()
console.log(a.name);
a.name = "jack"
console.log(a.name);

let c = 57;

console.log(a instanceof Animal);
console.log(c instanceof Animal);
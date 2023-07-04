class Complex {
    constructor(real, imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real = this.real + num.real
        this.imaginary = this.imaginary + num.imaginary
    }
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(newReal) {
        this._real = newReal
    }
    set imaginary(newImaginary) {
        this._imaginary = newImaginary
    }
}

let a = new Complex(2, 4);
a.real = 10
a.imaginary = 10
console.log(a.real, a.imaginary);
let b = new Complex(6, 2)
a.add(b)
console.log(a.real, a.imaginary);













// 3
// class Human {
//     constructor(name, food) {
//         this.name = name
//         this.food = food
//     }
//     walk() {
//         console.log(`${this.name} is walking`);
//     }
// }

// let h = new Human("sadan", "biryani")
// h.walk()

// class Student extends Human {
//     walk() {
//         console.log(`${this.name} Student is walking`);
//     }
// }

// let s = new Student("abdul","chicken")
// s.walk()

// console.log(s instanceof Human);
// console.log(s instanceof Student);
class RailwayForm {
    constructor(name, number) {
        console.log("Constructor Called " + name + " " + number);
        this.name = name
        this.number = number
    }
    submit() {
        console.log(this.name + " Form Submitted for " + this.number)
    }
    cancel() {
        console.log(this.name + " form is cancelled for " + this.number)
    }
}

let sadan = new RailwayForm("Sadan", 420420)
let abdul = new RailwayForm("Abdul", 420000)

sadan.submit()

abdul.submit()
abdul.cancel()
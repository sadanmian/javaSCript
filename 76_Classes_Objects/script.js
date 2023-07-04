class RailwayForm {
    submit() {
        console.log(this.name + " Form Submitted for " + this.Number)
    }
    cancel() {
        console.log(this.name + " form is cancelled for " + this.Number)
    }
    fill(givenName, trainNumber) {
        this.name = givenName
        this.Number = trainNumber
    }
}

let sadan = new RailwayForm()
let abdul = new RailwayForm()

sadan.fill("Sadan", 420420)
sadan.submit()

abdul.fill("Abdul", 420000)
abdul.submit()
abdul.cancel()
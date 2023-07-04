class Employee {
    constructor(name) {
        console.log(`${name} constructor is here`);
        this.name = name
    }
    login() {
        console.log(`Employee has logged in`);
    }
    logout() {
        console.log(`Employee has logout in`);
    }
    requestLeaves(leaves) {
        console.log(`Empolyee has request ${leaves} leaves`);
    }
}

class Programmer extends Employee {
    constructor(name) {
        super(name)
        console.log("New Programmer Constructor");
    }
    // constructor(...args) {  --> If there is no constructor in the child class, this will created automatically
    //     super(...args)
    // }
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        console.log("One Extra is Granted");
        // console.log(`Empolyee has request ${leaves + 1} leaves (One Extra)`);
    }
}

let e = new Programmer("Sadan")
e.login()
e.logout()
e.requestLeaves(3)

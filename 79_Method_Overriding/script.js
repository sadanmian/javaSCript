class Employee {
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
    requestCoffee(x) {
        console.log(`Employee has requested ${x} coffees`);
    }
    requestLeaves(leaves) {
        super.requestLeaves(4)
        console.log("One Extra is Granted");
        // console.log(`Empolyee has request ${leaves + 1} leaves (One Extra)`);
    }
}

let e = new Programmer()
e.login()
e.logout()
e.requestLeaves(3)

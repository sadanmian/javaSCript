// Password Generator
class Password {
    constructor() {
        console.log("Welcome to Password Generator");
        this.pass = ""
    }
    // generatePassword(len) {
    //     let char = "abcdefghijklmnopqrstuvwxyz"
    //     let num = "1234567890"
    //     let spChar = "!@#$%^&*()"
    //     if (len < 3) {
    //         console.log("Your Password should be 3 character long");
    //     }
    //     else {
    //         let i = 0;
    //         while (i < len) {
    //             this.pass = this.pass + char[Math.floor(Math.random() * char.length)]
    //             this.pass = this.pass + num[Math.floor(Math.random() * num.length)]
    //             this.pass = this.pass + spChar[Math.floor(Math.random() * spChar.length)]
    //             i = i + 3;
    //         }
    //         this.pass = this.pass.substring(0,len)
    //         return this.pass
    //     }
    // }
    generatePassword(len) {
        let char = "!@#$%^&*()abcdefghijklmnopqrstuvwxyz1234567890"
        if (len < 3) {
            console.log("Your Password should be 3 character long");
        }
        else {
            let i = 0;
            while (i < len) {
                this.pass = this.pass + char[Math.floor(Math.random() * char.length)]
                i++;
            }
            return this.pass
        }
    }
}

let p = new Password()
console.log(`Your Password gerated : ${p.generatePassword(7)}`);
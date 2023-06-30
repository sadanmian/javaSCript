let user = prompt('Enter S, W or G')
user = user.toUpperCase()
console.log("The User Input is " + user);
let cpuInput = Math.floor(Math.random() * 3);
// console.log(cpu);
let cpu = ["S", "W", "G"][cpuInput]
console.log("The CPU is " + cpu);

const match = (user, cpu) => {
    if (user === cpu) {
        document.body.style.background = "grey"
        return "Nobody";
    }
    else if (user === "W" && cpu == "S") {
        document.body.style.background = "red"
        return "CPU";
    }
    else if (user === "W" && cpu == "G") {
        document.body.style.background = "green"
        return "USER !!!";
    }
    else if (user === "G" && cpu == "S") {
        document.body.style.background = "green"
        return "USER !!!";
    }
    else if (user === "G" && cpu == "W") {
        document.body.style.background = "red"
        return "CPU";
    }
    else if (user === "S" && cpu == "G") {
        document.body.style.background = "red"
        return "CPU";
    }
    else if (user === "S" && cpu == "W") {
        document.body.style.background = "green"
        return "USER !!!";
    }
}
// console.log(match(user, cpu));
let result = match(user, cpu)
document.write(`CPU: ${cpu} <br> User: ${user} <br> The Winner is : ${result}`)
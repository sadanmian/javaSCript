// 1 // 2 // 3 // 4
let con = true;
while (con != false) {
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)
    if (age < 0) {
        console.error("Negative Age")
    } else {
        if (age > 17) {
            alert("You can Drive")
            document.body.style.background = "red"
        } else {
            alert("You can not drive")
        }
    }
    con = confirm("Do you want to continue");
}


console.log("Sadan");
alert("Your Script Works")
let a = prompt("Enter value of a", "69")
a = Number.parseInt(a)
let write = confirm("You do want to write to the page")
if (write == true) {
    document.write(a)
}
alert("Your Entered 'a' of type " + (typeof a))
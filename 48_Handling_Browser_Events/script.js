
let x = () => {
    alert("Hello1")
}
btn.addEventListener('click', x)

let y = () => {
    alert("Hello2")
}
btn.addEventListener('click', y)

let a = prompt("What is your favorite Number???")
if (a == "2") {
    btn.removeEventListener('click', x)
}
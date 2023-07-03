// // key-value-pairs

// console.log(document.cookie);
// document.cookie = "name=SADANMIANGI0205"
// console.log(document.cookie);

let key = prompt("Enter your key")
let value = prompt(`Enter value of ${key}`)
// document.cookie = `${key}=${value}`
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie);
// encodeURIComponent
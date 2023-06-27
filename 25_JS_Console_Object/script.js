console.log(console)
console.log("This is Sadan Mian");
console.warn("This is a Warning");
console.info("This is Info")
console.error("This is Error")

console.time("forLoop")
for (let i = 0; i <= 10; i++) {
    console.log("This is For Loop");
}
console.timeEnd("forLoop")
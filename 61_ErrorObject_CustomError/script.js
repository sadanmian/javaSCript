// try {
//     console.log(sadan);
//     throw new ReferenceError("Sadan Mian is not a good boy")
// } catch (error) {
//     // console.log(error);
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

try {
    let age = prompt('Enter Your Age')
    age = Number.parseInt(age)
    if (age > 120) {
        throw new ReferenceError("This is not true")
    }
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("The script is still running");

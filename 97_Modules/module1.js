const hello = () => {
    console.log("Hi Sadan");
}
const ahello = (name) => {
    console.log("Hi " + name);
}

module.exports = { hello, ahello };  // Same as below line
// module.exports = { hello: hello, ahello: ahello };
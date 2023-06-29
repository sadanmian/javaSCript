console.log("First Child is ", document.body.firstChild);
console.log("First Element Child is ", document.body.firstElementChild);

const changeBody = () => {
    document.body.firstElementChild.style.background = "red"
}
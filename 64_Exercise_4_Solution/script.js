
setInterval(() => {
    let time = new Date()
    document.getElementById("time").innerHTML = time
}, 1000);

document.getElementById("footer").innerHTML = "Copyright ©" + new Date().getFullYear()

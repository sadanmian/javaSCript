let a = [
    "Initializing Hack tool",
    "Connecting to Facebook",
    "Connecting to server 1",
    "Connection failed. Retrying...",
    "Connecting to server 2",
    "Connected Successfully...",
    "Username sadanmian",
    "Trying Brute Force",
    "200K passwords tries...",
    "Match not found",
    "Another 200K passwords tries...",
    "Match found",
    "Hack Successful!!!"
]

const sleep = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000);
    })
}
const hack = async (message) => {
    await sleep(2)
    // console.log(message);
    text.innerHTML = text.innerHTML + message + "<br>" + "<br>"
}

// iife
(async () => {
    for (let i = 0; i < a.length; i++) {
        await hack(a[i])
    }
})()
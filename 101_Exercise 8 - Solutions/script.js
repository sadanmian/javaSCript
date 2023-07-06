function play() {
    var audio = new Audio("http://www.accesscontrolsales.com/Ingram_Products/mp3/s7-c3tone.mp3")
    audio.play();
}

setInterval(() => {
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString()
}, 1000);

const alarm = (time) => {
    let d = new Date().getTime()
    setTimeout(() => {
        play()
    }, time * 1000);

    setInterval(() => {
        secondLeft = - (new Date().getTime() - (d + time * 1000))
        if (secondLeft > 0) {
            document.getElementById('alarm').innerHTML = "Alarm Ringing in " + Math.floor(secondLeft / 1000) + " seconds"
        }
    },);
}

let s = prompt("After how many seconds do you want to set Alarm")
alarm(Number.parseInt(s))

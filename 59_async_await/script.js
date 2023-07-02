async function sadan() {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")
        }, 1000);
    })

    let rampurWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 degree")
        }, 2000);
    })
    // delhiWeather.then((value) => {
    //     alert(value)
    // })
    // rampurWeather.then((value) => {
    //     alert(value)
    // })
    console.log("Fetching Delhi Weather. Please Wait.....");
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather " + delhiW);
    console.log("Fetching Rampur Weather. Please Wait.....");
    let rampurW = await rampurWeather
    console.log("Fetched Rampur Weather " + rampurW);
    return [delhiW, rampurW]
}
const abdul = async () => {
    console.log("Thi is Abdul Razzaq");
}
const main1 = async () => {
    console.log("Welcome to Weather Control");
    let a = await sadan()
    let b = await abdul()
}
main1()

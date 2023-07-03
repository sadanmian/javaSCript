let p = fetch("https://goweather.herokuapp.com/weather/Syd")
p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json()
}).then((response) => {
    console.log(response);
})
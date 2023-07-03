// 1
let url = "https://kontests.net/api/v1/all"

let response = fetch(url)

response.then((value) => {
    return value.json()
}).then((v) => {
    console.log(v);
    ihtml = ""
    for (item in v) {
        // console.log(v[item]);
        ihtml = ihtml + `
        <div class="card" style="width: 18rem;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xwDvuuUH-kzj-HuZkrNGK8S0eRPYpo9MHg&usqp=CAU" class="card-img-top" alt="...">
                <div class="card-body">
                <p>${Number.parseInt(item) + 1}<p/>
                    <h5 class="card-title">${v[item].name}</h5>
                    <p class="card-text"><a href="${v[item].url}">Visit Here</a></p>
                    <p>Start at: ${v[item].start_time} </p>
                    <p>End at: ${v[item].end_time} </p>
                    <a href="${v[item].url}" class="btn btn-primary">Go to the Contest</a>
                </div>
            </div>
        `
    }
    cardContainer.innerHTML = ihtml
})


// // 2
// let a = prompt("Enter Your Note")
// if (a) {
//     localStorage.setItem("note", a)
// }
// // 3
// let n = localStorage.getItem("note")
// alert("Your note is " + n)

// // 4
// let c = confirm("Do you want to delete your note")
// if (c) {
//     localStorage.removeItem("note")
// }
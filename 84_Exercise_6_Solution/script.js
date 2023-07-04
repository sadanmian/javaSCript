
document.getElementById('submit').addEventListener("click", (e) => {
    e.preventDefault()
    let titlec = document.getElementById('title').value
    let descc = document.getElementById('desc').value
    localStorage.setItem("todo", JSON.stringify([titlec, descc]))
    console.log(e);

    document.getElementById('todo').innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
    document.getElementById('title').value = ""
    document.getElementById('desc').value = ""
})

document.getElementById('deleteBTN').addEventListener('click', (e) => {
    e.preventDefault()
    localStorage.removeItem('todo')
    document.getElementById('todo').innerHTML = ""
})
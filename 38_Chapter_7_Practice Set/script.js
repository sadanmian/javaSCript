
// 1
document.getElementsByTagName('nav')[0].firstElementChild.style.color = "red";

// 2
// no

// 3
document.getElementsByTagName('nav')[0].lastElementChild.style.color = "green"

// 4
Array.from(document.getElementsByTagName('li')).forEach((x) => {
    x.style.background = "cyan"
})
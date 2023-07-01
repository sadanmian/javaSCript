let a = document.getElementsByTagName('div')[0]
// a.innerHTML = a.innerHTML + '<h1>This is Sadan Mian </h1>'
let div = document.createElement('div')
div.innerHTML = '<h1>This is div creation </h1>'
a.appendChild(div)
a.prepend(div)

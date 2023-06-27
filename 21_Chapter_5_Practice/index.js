// 1 
let arr = [1, 2, 3, 4, 5, 6, 10, 20, 30]
arr.push(7)
console.log(arr);

// 2


// 3

let flt = arr.filter((x) => {
    return x % 10 == 0
})

console.log(flt);

// 4
let forth = arr.map((x) => {
    return x * x
})
console.log(forth);

// 5
let arr5 = [1, 2, 3, 4, 5, 6]
let fifth = arr5.reduce((x, y) => {
    return x * y
})
console.log(fifth);

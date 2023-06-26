let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19]
// delete num[0]
console.log(num);

let newArray = num_more.concat(num)
// let newArray = num + num_more
console.log(newArray);

console.log(newArray.sort());  // Alphabatcially sort

let compare = (a, b) => {
    return a - b;
}

newArray.sort(compare)
console.log(newArray);

newArray.reverse()
console.log(newArray);

// Splice Method
num.splice(2, 3, 21, 22)
console.log(num);

// Slice
let nummm = num.slice(4)
console.log(nummm);
let nummm2 = num.slice(1, 5)
console.log(nummm2);
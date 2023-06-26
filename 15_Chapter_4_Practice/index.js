// 1

console.log("har\"".length);

// 2
const sentance = "This is a Sentance in Our JavaScript"
const word = "JavaScript"
console.log(sentance.includes(word));
console.log(`The word "${word}" ${sentance.includes(word) ? "is" : "is not"} in the sentance`);

// 3
console.log(sentance.toLowerCase());

//4 
let str2 = "Please give me Rs 1000"
console.log("The Amount is", Number.parseInt(str2.slice(str2.length - 4)));

// 5

let str3 = "Sadan"
console.log(str3.replace("a", "b"));
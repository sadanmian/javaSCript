let namee = "\"Sadan\""
console.log(namee);
console.log(namee.length);

console.log(namee.toUpperCase());
console.log(namee.toLowerCase());

// Slice
console.log(namee.slice(1, 4));
console.log(namee.slice(4));

// Replace
console.log(namee.replace("\"Sadan\"", "sadan"));

// Contat
let namee2 = "\"Abdul\""
console.log(namee.concat(" is Brother of ", namee2));

// Trim
let namee3 = "           Sadan             "
console.log(namee3.trim());

for (let i = 0; i < namee.length; i++) {
    console.log(namee[i]);
}

// Strings are immutable
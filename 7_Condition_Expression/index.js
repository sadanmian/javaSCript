let a = "10"

// console.log(a);
// console.log(typeof a);

// a = Number.parseInt(a)

// console.log(a);
// console.log(typeof a);

if (a > 10) {
    console.log("Value of a is greater than 10");
} else if (a == 10) {
    console.log("Value of a is 10 in Number");
} else {
    console.log("Value of a is less than 10");
}

// Switch 

let exp = 4;

switch (exp) {
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    case 3:
        console.log("Value is 3");
        break;
    case 4:
        console.log("Value is 4");
        break;
    case 5:
        console.log("Value is 5");
        break;
    case 6:
        console.log("Value is 6");
        break;
    case 7:
        console.log("Value is 7");
        break;
    case 8:
        console.log("Value is 8");
        break;
    case 9:
        console.log("Value is 9");
        break;
    case 0:
        console.log("Value is 0");
        break;
    default:
        console.log("Error");
        break;
}

// ternery 

let ter = 0;
console.log("The Value is", ter > 0 && "Greater than 1");
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log("Result:", result);


const add = (a, b) => {
    return a + b;
} 

//arrow function with parameters
const add = (a, b) => a + b;

console.log(add(10, 20));

//user input from user
let userInput = prompt("Enter a number:");
let number = parseInt(userInput);
console.log("You entered:", number);

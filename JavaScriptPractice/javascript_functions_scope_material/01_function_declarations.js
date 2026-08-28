// Function Declarations

function greet() {
    console.log("Welcome to JavaScript");
}

greet();

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5));
console.log(calculateSquare(10));

// Function declaration hoisting
sayHello();

function sayHello() {
    console.log("Hello from a function declaration");
}

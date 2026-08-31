// Function Declaration Hoisting
// greet();

// function greet() {
//     console.log("Hello from a hoisted function declaration");
// }

// const welcome = function () {
//     console.log("Welcome");
// };
// welcome();

// Calling a const function expression before initialization
// causes a ReferenceError:
//
welcomeBeforeInitialization();

const welcomeBeforeInitialization = function () {
    console.log("Welcome");
};

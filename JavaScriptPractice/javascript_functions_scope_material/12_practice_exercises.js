// Practice Exercises
//
// Try these before looking at the sample answers.
//
// 1. Create a function greet that prints "Hello".
// 2. Create add(a, b) and return the sum.
// 3. Create calculateTotal(price, quantity).
// 4. Create greetUser(name = "Guest").
// 5. Create a global companyName and print it from a function.
// 6. Create a function with a local variable.
// 7. Create nested functions using lexical scope.
// 8. Create createCounter() using a closure.
// 9. Create an employee object with name and greet() using this.name.
// 10. Create createMultiplier(multiplier) returning a function.

// Sample answers

function greet() {
    console.log("Hello");
}
greet();

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));

function calculateTotal(price, quantity) {
    return price * quantity;
}
console.log(calculateTotal(100, 3));

function greetUser(name = "Guest") {
    console.log("Hello " + name);
}
greetUser();
greetUser("Rahul");

const companyName = "ABC Technologies";

function showCompany() {
    console.log(companyName);
}
showCompany();

function demonstrateLocalScope() {
    const message = "Local value";
    console.log(message);
}
demonstrateLocalScope();

function outer() {
    const message = "Hello from outer";

    function inner() {
        console.log(message);
    }

    inner();
}
outer();

function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());

const employee = {
    name: "Priya",

    greet() {
        console.log("Hello " + this.name);
    }
};

employee.greet();

function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(10));

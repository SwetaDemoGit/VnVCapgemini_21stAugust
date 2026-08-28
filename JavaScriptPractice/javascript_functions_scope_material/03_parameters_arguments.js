// Parameters and Arguments

function greet(name) {
    console.log("Hello " + name);
}

greet("Rahul");
greet("Priya");

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 3));

function greetWithDefault(name = "Guest") {
    console.log("Hello " + name);
}

greetWithDefault("Amit");
greetWithDefault();

function addAll(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addAll(10, 20));
console.log(addAll(10, 20, 30, 40));

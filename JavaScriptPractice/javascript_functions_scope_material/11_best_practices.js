// Best Practices

function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(100, 3));

function calculateTax(amount, rate) {
    return amount * rate;
}

console.log(calculateTax(1000, 0.10));

const greet = function (name) {
    return "Hello " + name;
};

console.log(greet("Rahul"));

function calculatePrice(price, quantity) {
    const total = price * quantity;
    return total;
}

console.log(calculatePrice(200, 4));

const employee = {
    name: "Amit",

    greet() {
        console.log("Hello " + this.name);
    }
};

employee.greet();

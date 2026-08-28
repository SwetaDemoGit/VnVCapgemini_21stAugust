// Function Expressions

const greet = function () {
    console.log("Hello!");
};

greet();

const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));

const calculateDiscount = function (price, discount) {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));

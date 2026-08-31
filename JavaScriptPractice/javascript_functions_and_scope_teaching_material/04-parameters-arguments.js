// Parameters and Arguments
function calculateArea(length, width) {
    return length * width;
}

const area = calculateArea(10, 5);
console.log("Area:", area);

function greet(name = "Guest") {
    console.log("Hello " + name);
}
greet();
greet("Priya");

function addNumbers(...numbers) {
    let total = 0;
    for (const number of numbers) {
        total += number;
    }
    return total;
}
console.log("Total:", addNumbers(10, 20, 30));

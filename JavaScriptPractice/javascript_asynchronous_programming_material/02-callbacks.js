function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function finish() {
    console.log("Greeting completed");
}

greet("Rahul", finish);

console.log("\nAsync callback:");

setTimeout(() => {
    console.log("Task completed");
}, 2000);

console.log("Other work continues...");

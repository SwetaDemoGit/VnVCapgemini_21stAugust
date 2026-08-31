console.log("Synchronous - Step 1");
console.log("Synchronous - Step 2");
console.log("Synchronous - Step 3");

console.log("\nAsynchronous:");

console.log("Start");

setTimeout(() => {
    console.log("Inside timeout");
}, 2000);

console.log("End");

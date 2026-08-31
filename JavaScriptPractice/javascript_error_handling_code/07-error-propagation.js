function processOrder() {
    throw new Error("Order processing failed");
}

function placeOrder() {
    processOrder();
}

try {
    placeOrder();
} catch (error) {
    console.log("Error handled:", error.message);
}

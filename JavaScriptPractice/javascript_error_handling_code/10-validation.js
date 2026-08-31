function calculateDiscount(price) {
    if (price < 0) {
        throw new Error("Price cannot be negative");
    }
    return price * 0.10;
}

try {
    const discount = calculateDiscount(-500);
    console.log("Discount:", discount);
} catch (error) {
    console.log("Validation failed:", error.message);
}

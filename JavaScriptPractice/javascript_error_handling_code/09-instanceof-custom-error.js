class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid username");
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation problem:", error.message);
    } else {
        console.log("Unknown error:", error.message);
    }
}

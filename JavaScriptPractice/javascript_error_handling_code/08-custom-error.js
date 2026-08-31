class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function registerUser(username) {
    if (!username) {
        throw new ValidationError("Username is required");
    }
    console.log("User registered");
}

try {
    registerUser("");
} catch (error) {
    console.log("Error Type:", error.name);
    console.log("Message:", error.message);
}

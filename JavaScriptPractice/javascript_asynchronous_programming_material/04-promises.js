const promise = new Promise((resolve, reject) => {
    const success = false; // Change this to true to simulate success

    if (success) {
        resolve("Task completed");
    } else {
        reject("Task failed");
    }
});

promise
    .then((result) => console.log("Success:", result))
    .catch((error) => console.log("Error:", error));

// Functions, Scope and this Together

const employee = {
    name: "Priya",

    greet() {
        const message = "Welcome";

        const display = () => {
            console.log(message);
            console.log(this.name);
        };

        display();
    }
};

employee.greet();

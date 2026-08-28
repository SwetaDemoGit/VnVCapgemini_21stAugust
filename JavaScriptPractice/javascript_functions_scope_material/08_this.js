// The this Keyword

const student = {
    name: "Rahul",

    greet() {
        console.log("Hello " + this.name);
    }
};

student.greet();

const employee = {
    name: "Priya",
    department: "IT",

    displayDetails() {
        console.log(this.name);
        console.log(this.department);
    }
};

employee.displayDetails();

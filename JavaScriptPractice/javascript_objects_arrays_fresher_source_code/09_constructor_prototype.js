// 09 - Constructor Functions and Prototypes

// Constructor functions were commonly used in older JavaScript
// to create multiple objects with shared behavior.

function Employee(name, department) {
    this.name = name;
    this.department = department;
}

// Add a shared method to the prototype.
Employee.prototype.getDetails = function () {
    return this.name + " - " + this.department;
};

const employee1 = new Employee("Rahul", "IT");
const employee2 = new Employee("Priya", "HR");

console.log(employee1.getDetails());
console.log(employee2.getDetails());

// Both objects can use the same prototype method.

// The method is not separately created for every object.
// It is shared through Employee.prototype.

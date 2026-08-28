// 08 - Prototypes

// JavaScript objects can inherit properties and methods
// through the prototype chain.

// Every JavaScript object has an internal prototype relationship
// with another object (or null).

const person = {
    greet: function () {
        console.log("Hello!");
    }
};

const student = Object.create(person);

student.name = "Rahul";

console.log(student.name);

// greet() is not directly defined on student.
// JavaScript finds it through the prototype chain.
student.greet();

// Prototype chain concept:
//
// student
//   |
//   v
// person
//   |
//   v
// Object.prototype
//   |
//   v
// null
//
// If JavaScript cannot find a property on the object itself,
// it looks up the prototype chain.

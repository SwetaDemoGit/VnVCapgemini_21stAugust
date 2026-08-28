# JavaScript Functions and Scope

## 1. Introduction to Functions

A **function** is a reusable block of code designed to perform a specific task.

Instead of writing the same logic repeatedly, we place the logic inside a function and call it whenever needed.

### Example 1

```javascript
function greet() {
    console.log("Hello!");
}

greet();
```

Output:
```text
Hello!
```

### Example 2

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

Output:
```text
30
```

### Why use functions?

Functions help us:
- Reuse code
- Organize programs
- Reduce duplication
- Improve readability
- Make testing and maintenance easier
- Divide large problems into smaller tasks

---

# 2. Function Declarations

A **function declaration** defines a function using the `function` keyword.

### Example 1

```javascript
function greet() {
    console.log("Welcome to JavaScript");
}

greet();
```

### Example 2

```javascript
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(5));
console.log(calculateSquare(10));
```

### Example 3

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);
console.log(result);
```

## Function Declaration Hoisting

Function declarations can generally be called before their position in the source code.

```javascript
sayHello();

function sayHello() {
    console.log("Hello");
}
```

Output:
```text
Hello
```

---

# 3. Function Expressions

A **function expression** is a function assigned to a variable.

### Example 1

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

### Example 2

```javascript
const add = function (a, b) {
    return a + b;
};

console.log(add(10, 20));
```

### Example 3

```javascript
const calculateDiscount = function (price, discount) {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1000, 10));
```

Output:
```text
900
```

## Declaration vs Expression

| Function Declaration | Function Expression |
|---|---|
| `function add() {}` | `const add = function() {}` |
| Function declarations are hoisted | Variable initialization rules apply |
| Named function | Can be anonymous |
| Common for reusable functions | Useful when functions are treated as values |

---

# 4. Parameters and Arguments

A **parameter** is a variable listed in the function definition.

An **argument** is the actual value passed when the function is called.

```javascript
function greet(name) {
    console.log("Hello " + name);
}

greet("Rahul");
```

Here:
- `name` is the parameter
- `"Rahul"` is the argument

### Multiple parameters

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}

console.log(calculateTotal(500, 3));
```

### Default parameters

A parameter can have a default value.

```javascript
function greet(name = "Guest") {
    console.log("Hello " + name);
}

greet("Rahul");
greet();
```

Output:
```text
Hello Rahul
Hello Guest
```

### Rest parameters

The rest parameter collects multiple arguments into an array.

```javascript
function addAll(...numbers) {
    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(addAll(10, 20, 30));
```

---

# 5. Return Values

`return` sends a value from a function back to the code that called it.

```javascript
function multiply(a, b) {
    return a * b;
}

const result = multiply(5, 4);
console.log(result);
```

Output:
```text
20
```

A function can also return based on a condition:

```javascript
function checkAge(age) {
    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));
```

If a function does not explicitly return a value, its return value is `undefined`.

---

# 6. Understanding Scope

**Scope** determines where a variable can be accessed.

The main concepts are:
- Global scope
- Local/function scope
- Block scope
- Lexical scope

---

# 7. Global Scope

A variable declared outside functions and blocks can have global scope.

```javascript
const companyName = "ABC Technologies";

function showCompany() {
    console.log(companyName);
}

showCompany();
console.log(companyName);
```

Both locations can access `companyName`.

Global variables should be used carefully because many parts of an application may be able to access them.

---

# 8. Local / Function Scope

A variable declared inside a function is local to that function.

```javascript
function calculate() {
    const price = 100;
    console.log(price);
}

calculate();
```

`price` is available inside `calculate()`.

It cannot normally be accessed outside the function.

### Example

```javascript
function first() {
    const message = "Hello from first";
    console.log(message);
}

function second() {
    const message = "Hello from second";
    console.log(message);
}

first();
second();
```

Each function has its own local `message`.

---

# 9. Block Scope

`let` and `const` are block scoped.

A block is code surrounded by `{ }`.

```javascript
if (true) {
    const message = "Hello";
    console.log(message);
}
```

`message` is available inside the block but not outside it.

This is one reason modern JavaScript generally prefers `let` and `const` over `var`.

---

# 10. Lexical Scope

**Lexical scope** means that variable availability is determined by where the code is written.

An inner function can access variables from its surrounding outer scope.

```javascript
const company = "ABC";

function outer() {
    const department = "IT";

    function inner() {
        console.log(company);
        console.log(department);
    }

    inner();
}

outer();
```

The `inner()` function can access:
- Its own variables
- Variables from `outer()`
- Variables from the surrounding scope

---

# 11. Scope Chain

When JavaScript looks for a variable, it first checks the current scope.

If the variable is not found, it moves to the outer scope.

Example:

```javascript
const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;

        console.log(c);
        console.log(b);
        console.log(a);
    }

    inner();
}

outer();
```

The lookup is conceptually:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

This is called the **scope chain**.

---

# 12. Closures

A **closure** occurs when a function retains access to variables from its surrounding lexical scope even after the outer function has finished executing.

### Example 1 — Counter

```javascript
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());
```

Output:
```text
1
2
3
```

The returned function remembers `count`.

### Example 2 — Private data

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit(amount) {
            balance += amount;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
```

Output:
```text
1500
```

`balance` is not directly accessible outside the closure.

### Example 3 — Function factory

```javascript
function createMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));
console.log(triple(5));
```

Output:
```text
10
15
```

## Common Uses of Closures

Closures are useful for:
- Private state
- Maintaining state between calls
- Function factories
- Callbacks
- Event handlers
- Encapsulation
- Asynchronous programming

---

# 13. The `this` Keyword

`this` is a special JavaScript keyword.

For regular functions, its value depends on how the function is called.

When a function is called as an object method, `this` commonly refers to the object before the dot.

### Example 1

```javascript
const student = {
    name: "Rahul",

    greet() {
        console.log("Hello " + this.name);
    }
};

student.greet();
```

Output:
```text
Hello Rahul
```

Here `this` refers to `student`.

### Example 2

```javascript
const employee = {
    name: "Priya",
    department: "IT",

    displayDetails() {
        console.log(this.name);
        console.log(this.department);
    }
};

employee.displayDetails();
```

Output:
```text
Priya
IT
```

The key idea is:

> For regular functions, `this` is determined by how the function is called.

---

# 14. Arrow Functions and `this`

Arrow functions do **not** create their own `this`.

They use `this` from the surrounding lexical scope.

Example:

```javascript
const person = {
    name: "Rahul",

    greet: function () {
        const showName = () => {
            console.log(this.name);
        };

        showName();
    }
};

person.greet();
```

Output:
```text
Rahul
```

The arrow function gets `this` from the surrounding `greet()` function.

Therefore, an arrow function should not automatically be treated as equivalent to a regular object method.

---

# 15. Functions, Scope and `this` Together

```javascript
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
```

Here:
- `greet()` is a method.
- `message` is local to `greet()`.
- `display()` can access `message` through lexical scope.
- The arrow function gets `this` from `greet()`.

This example connects functions, lexical scope and `this`.

---

# 16. Best Practices for Functions and Scope

## 16.1 Use Meaningful Function Names

Avoid vague names:

```javascript
function doSomething() {
}
```

Prefer:

```javascript
function calculateTotal() {
}
```

Names should communicate the purpose of the function.

## 16.2 Keep Functions Focused

A function should ideally have one clear responsibility.

Prefer:

```text
validateUser()
calculateSalary()
sendEmail()
generateReport()
```

instead of putting all unrelated responsibilities into one very large function.

## 16.3 Avoid Unnecessary Global Variables

Prefer local variables and return values where possible.

Instead of relying on shared global state:

```javascript
function calculate() {
    const total = 100;
    return total;
}

const result = calculate();
```

This keeps data more contained.

## 16.4 Prefer `const` for Function Expressions

```javascript
const calculateTotal = function (price, quantity) {
    return price * quantity;
};
```

Use `let` only when the function reference actually needs to be reassigned.

## 16.5 Avoid Excessive Nesting

Nested functions are useful for closures and private helper logic, but excessive nesting can make code harder to understand.

## 16.6 Use Closures Deliberately

Closures are useful for persistent state, private data and function factories. Avoid unnecessary complexity.

## 16.7 Understand `this`

Before using `this`, understand how the function is being called.

Regular functions and arrow functions have different `this` behavior.

## 16.8 Prefer Input and Output Over Hidden Shared State

A function such as:

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

is easier to understand because its input and output are clear.

---

# 17. Quick Revision

| Concept | Meaning |
|---|---|
| Function | Reusable block of code |
| Function Declaration | Function defined with `function name()` |
| Function Expression | Function assigned to a variable |
| Parameter | Variable in a function definition |
| Argument | Actual value passed to a function |
| Return | Sends a value back |
| Global Scope | Scope available from the global context |
| Local Scope | Scope belonging to a function |
| Block Scope | Scope created by a block for `let` and `const` |
| Lexical Scope | Scope determined by where code is written |
| Scope Chain | Lookup from inner scope toward outer scope |
| Closure | Function retaining access to its surrounding lexical environment |
| `this` | Context value determined by how a regular function is called |
| Arrow `this` | Uses `this` from the surrounding lexical scope |

---

# 18. Learner Practice Questions

1. What is a function?
2. What is the difference between a function declaration and expression?
3. What is a parameter?
4. What is an argument?
5. What is the purpose of `return`?
6. What is global scope?
7. What is local/function scope?
8. What is block scope?
9. What is lexical scope?
10. What is the scope chain?
11. What is a closure?
12. Give two practical uses of closures.
13. What is `this`?
14. How is `this` different in regular and arrow functions?
15. Why should unnecessary global variables be avoided?
16. Why should functions generally have a focused responsibility?

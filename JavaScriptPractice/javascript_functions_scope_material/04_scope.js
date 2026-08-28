// Global, Local, Block and Lexical Scope

const companyName = "ABC Technologies";

function showCompany() {
    console.log(companyName);
}

showCompany();
console.log(companyName);

function calculate() {
    const price = 100;
    console.log(price);
}

calculate();

if (true) {
    const message = "Hello from the block";
    console.log(message);
}

const country = "India";

function outer() {
    const department = "IT";

    function inner() {
        console.log(country);
        console.log(department);
    }

    inner();
}

outer();

// Scope Chain

const a = 10;

function outer() {
    const b = 20;

    function inner() {
        const c = 30;

        console.log("c:", c);
        console.log("b:", b);
        console.log("a:", a);
    }

    inner();
}

outer();

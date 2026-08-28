// this with Arrow Functions

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

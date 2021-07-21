class Car {
    constructor(data) {
        this.data = data;
    }

    intro() {
        console.log(`This is ${this.data.brand}.`);
    }
}

module.exports = Car;
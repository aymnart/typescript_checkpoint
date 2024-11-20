"use strict";
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("car engine started");
    }
}
const myCar = new Car("Toyota", "supra", 1994);
myCar.start();

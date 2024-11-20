interface vehicule {
  make: string;
  model: string;
  year: number;

  start(): void;
}

class Car implements vehicule {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("car engine started");
  }
}

const myCar = new Car("Toyota", "supra", 1994);

myCar.start();

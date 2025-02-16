// Define the Vehicle interface with the required properties and method.
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void; // This method should log a message to the console.
}

// Implement the Car class that implements the Vehicle interface.
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  // The start method logs "Car engine started" to the console.
  start(): void {
    console.log("Car engine started");
  }
}

// Create an instance of Car with some sample values.
const myCar = new Car("Toyota", "Corolla", 2020);

// Call the start method to verify that it logs the appropriate message.
myCar.start();

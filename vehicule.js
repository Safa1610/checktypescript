// Implement the Car class that implements the Vehicle interface.
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // The start method logs "Car engine started" to the console.
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
// Create an instance of Car with some sample values.
var myCar = new Car("Toyota", "Corolla", 2020);
// Call the start method to verify that it logs the appropriate message.
myCar.start();

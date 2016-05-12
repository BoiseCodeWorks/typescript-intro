var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Engine = (function () {
    function Engine(cylinders, pistons, fuelType) {
        this.cylinders = cylinders;
        this.pistons = pistons;
        this.fuelType = fuelType;
    }
    return Engine;
}());
var Vehicle = (function () {
    function Vehicle(engine, tires) {
        this.drive = function () {
            console.log('Moving Now');
        };
        this.engine = engine;
        this.tires = tires;
    }
    return Vehicle;
}());
var Car = (function (_super) {
    __extends(Car, _super);
    function Car(engine, tires, make, model, year) {
        _super.call(this, engine, tires);
        this.make = make;
        this.year = year;
        this.model = model;
        this.tires = tires;
    }
    return Car;
}(Vehicle));
var v6 = new Engine(6, 6, 'gas');
var corvette = new Car(v6, 4, 'Chevy', 'Corvette', new Date(2012));
corvette.drive();

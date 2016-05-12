class Engine{
    cylinders: number
    pistons: number
    fuelType: string
    
    constructor(cylinders:number, pistons: number, fuelType:string) {
        this.cylinders = cylinders;
        this.pistons = pistons;
        this.fuelType = fuelType;
    } 
}

class Vehicle{
    engine: Engine
    tires: number
    
    drive = function(){
        console.log('Moving Now')
    }
    
    constructor(engine:Engine, tires){
        this.engine = engine
        this.tires = tires
    }
    
}

class Car extends Vehicle {
    make: string;
    model: string;
    year: Date;
    
    constructor(engine:Engine, tires:number, make:string, model:string, year:Date) {
        super(engine, tires);
        this.make = make;
        this.year = year;
        this.model = model;
        this.tires = tires;    
    }        
}
    
var v6 = new Engine(6,6,'gas');

var corvette = new Car(v6, 4,'Chevy', 'Corvette', new Date(2012))

corvette.drive()
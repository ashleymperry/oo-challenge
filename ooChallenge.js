//Part One

//vehicle type
class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return "Beep!";
    }
    
    toString() {
        return `This car is a ${this.year} ${this.make} ${this.model}.`;
    }
}

//Part Two

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

//Part Three

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return "VROOOMMM!";
    }
}

//Part Four

class Garage extends Vehicle {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Vehicles only!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we are at capacity.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

class Rocket {
    constructor(nameParam, capacityParam) {
        this.nameParam = nameParam;
        this.capacityParam = capacityParam;
        this.cargoItems = [];
        this.astronauts = [];
        this.name = nameParam;
        this.totalCapacityKg = capacityParam;
    }
    sumMass(items) {
        let sum = 0;
        items.forEach(element => {
            sum += element.massKg;
        });
        return sum;
    }
    currentMassKg() {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }
    canAdd(item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else {
            return false;
        }
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else {
            return false;
        }
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        else {
            return false;
        }
    }
}
export { Rocket };

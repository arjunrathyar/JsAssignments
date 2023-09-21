import { Cargo } from "./Cargo.js";
import { Astronaut } from "./Astronaut.js";
import { Payload } from "./Payload.js";

class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(public nameParam: string, public capacityParam: number) {
        this.name = nameParam;
        this.totalCapacityKg = capacityParam;
    }

    sumMass(items: Payload[]): number {
        let sum = 0;
        items.forEach(element => {
            sum += element.massKg;
        });
        return sum;
    }


    currentMassKg(): number{
        return this.sumMass(this.cargoItems)+this.sumMass(this.astronauts);
    }


    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }

}

export{Rocket}
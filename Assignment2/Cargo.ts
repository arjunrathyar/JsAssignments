import { Payload } from "./Payload.js";

class Cargo implements Payload{
    
    massKg: number;
    material : string;

    constructor(public materialParam: string, public massParam: number) {
        this.massKg = massParam;     
        this.material = materialParam;
    }

}

export {Cargo}
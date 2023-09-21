import { Payload } from "./Payload.js";

class Astronaut implements Payload{
    
    name : string;
    massKg: number;

    constructor(public nameParam: string, public massParam: number) {
        this.name = nameParam;
        this.massKg = massParam;        
    }

}

export {Astronaut}
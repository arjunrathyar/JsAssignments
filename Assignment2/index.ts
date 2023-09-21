import {Astronaut} from "./Astronaut.js"
import {Cargo} from "./Cargo.js"
import {Rocket} from "./Rocket.js"


let rocket = new Rocket('Rocket1',100000);
let astronaut = new Astronaut('Neil',80);
let cargo = new Cargo('Missile',800000);
let cargo2 = new Cargo('Food',8000);
let cargo3 = new Cargo('Luggage',9800);


console.log(rocket.addAstronaut(astronaut));

console.log(rocket.addCargo(cargo));
console.log(rocket.addCargo(cargo2));
console.log(rocket.addCargo(cargo3));

console.log(rocket.cargoItems);
console.log(rocket.astronauts);
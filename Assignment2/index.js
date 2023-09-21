import { Astronaut } from "./Astronaut.js";
import { Cargo } from "./Cargo.js";
import { Rocket } from "./Rocket.js";
var rocket;
var flag = 0;
let choice = 'y';
while (choice == 'y') {
    var promptChoice = prompt("Enter your Choice: \n1. Add Rocket \n2. Add Cargo \n3. Add Astronaut \n4. Display through Console \n5. Exit");
    switch (promptChoice) { //Menu driven prompt
        case "1":
            if (flag == 0) {
                let rocketName = prompt("Enter Rocket Name: ");
                let rockettCapacity = prompt("Enter Rocket Capacity: ");
                rocket = new Rocket(rocketName, parseInt(rockettCapacity)); //Multiple rockets can be handled using a list for rockets and collecting them based on an id
                flag = 1;
            }
            else {
                alert("Only one rocket can be handled!!");
            }
            break;
        case "2":
            let CargoName = prompt("Enter Cargo Name: ");
            let CargoWeight = prompt("Enter Cargo Weight: ");
            rocket.addCargo(new Cargo(CargoName, parseInt(CargoWeight)));
            break;
        case "3":
            let AstronautName = prompt("Enter Astronaut Name: ");
            let AstronautWeight = prompt("Enter Astronaut Weight: ");
            rocket.addAstronaut(new Astronaut(AstronautName, parseInt(AstronautWeight)));
            break;
        case "4":
            console.log(rocket.cargoItems);
            console.log(rocket.astronauts);
            break;
        case "5":
            choice = 'n';
        default:
            break;
    }
}

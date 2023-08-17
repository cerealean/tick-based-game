import { Unit } from "./unit";

export class TestSoldier extends Unit {
    get name() {
        const randomNumber = Date.now().toString().substring(-4, 4);
        return `Test Soldier ${randomNumber}`;
    }
}
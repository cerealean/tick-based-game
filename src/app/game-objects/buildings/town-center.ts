import { GeneratesCurrency } from "src/app/interfaces/generates-currency";
import { Building } from "./building";

export class TownCenter extends Building implements GeneratesCurrency {
    get name() {
        return 'Town Center';
    }
    public currencyGainPerTick(): number {
        return 0;
    }
}
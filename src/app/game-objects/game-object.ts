import { UUID } from "src/app/system/uuid";

export abstract class GameObject {
    public uuid = new UUID();
    private readonly className = this.constructor.name;
}
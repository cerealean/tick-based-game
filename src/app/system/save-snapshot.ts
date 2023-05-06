import { GameObject } from "../game-objects/game-object";

export class SaveSnapshot {
    public readonly dateTime = new Date();
    constructor(
        public readonly gameObjects: GameObject[]
    ) {}
}
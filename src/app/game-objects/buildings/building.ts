import { GameObject } from "../game-object";

export abstract class Building extends GameObject {
    abstract readonly name: string;
}
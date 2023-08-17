import { GameObject } from "../game-object";

export abstract class Unit extends GameObject {
    abstract readonly name: string;
}
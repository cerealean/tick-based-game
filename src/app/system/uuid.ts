import { v4 as uuidv4, validate as uuidValidate, NIL as NIL_UUID } from 'uuid';

export class UUID {
    private value: string;
    constructor(inputUuid?: string) {
        if(inputUuid && uuidValidate(inputUuid)) {
            this.value = inputUuid;
        } else if (!inputUuid) {
            this.value = uuidv4();
        } else {
            this.value = NIL_UUID
        }
    }

    public toString(): string {
        return this.value;
    }
}
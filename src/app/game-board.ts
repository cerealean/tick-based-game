export class GameBoard {
    private board: Cell[][];

    constructor(xLength: number, yLength: number) {
        this.board = new Array(xLength);
        for(let counterX = 0; counterX < xLength; counterX++) {
            this.board[counterX] = new Array(yLength);
            for(let counterY = 0; counterY < yLength; counterY++) {
                this.board[counterX][counterY] = new Cell(counterX, counterY);
            }
        }
    }
}

class Cell {
    constructor(
        public readonly x: number,
        public readonly y: number
    ) {}

    isAdjacent(cell: Cell) {
        
    }
}

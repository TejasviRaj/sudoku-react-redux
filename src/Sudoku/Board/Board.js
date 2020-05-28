export class Board {
    constructor(difficulty, initialState) {
        this.getBoardStateWithShape = this.getBoardStateWithShape.bind(this);
        this.difficulty = difficulty;
        boardStateWithShape = initialState? this.getBoardStateWithShape(initialState)  : [];
    }

    getBoardStateWithShape(stateWithoutShape) {
        let row = [];
        let rows = [];
        stateWithoutShape.forEach((value,index) => {
            row.push
        })
    }
}
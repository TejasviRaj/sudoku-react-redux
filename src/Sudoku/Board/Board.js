import Cell from '../Cell/Cell';
import Row from '../Row/Row'

export class Board {
    constructor(difficulty, initialState) {
        this.getBoardStateWithShape = this.getBoardStateWithShape.bind(this);
        this.difficulty = difficulty;
        boardStateWithShape = initialState? this.getBoardStateWithShape(initialState)  : [];
    }

    getBoardStateWithShape(stateWithoutShape) {
        let columnsForCurrentRow = [];
        let rows = [];
        stateWithoutShape.forEach((value) => {

            let cell = new Cell(value === '0' ? '': value, rows.length, columnsForCurrentRow.length, cellValue === '0');
            columnsForCurrentRow.push(cell);

            if (i % 9 === 8) {
                rows.push(new Row(columnsForCurrentRow))
                columnsForCurrentRow = []
            }
        });

        return rows;
    }
}
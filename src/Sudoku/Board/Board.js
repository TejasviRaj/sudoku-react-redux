//Author- Tejasvi Raj Pant
//Author- Tejasvi Raj Pant

import Cell from '../Cell/Cell';
import Row from '../Row/Row'

export default class Board {
    constructor(difficulty, initialState) {
        this.getBoardStateWithShape = this.getBoardStateWithShape.bind(this);
        this.difficulty = difficulty;
        this.rows = initialState? this.getBoardStateWithShape(initialState)  : [];
    }

    getBoardStateWithShape(stateWithoutShape) {
        let columnsForCurrentRow = [];
        let rows = [];
        [...stateWithoutShape].forEach((value, index) => {

            let cell = new Cell(value === '0' ? '': value, rows.length, columnsForCurrentRow.length, value === '0');
            columnsForCurrentRow.push(cell);

            if (index % 9 === 8) {
                rows.push(new Row(columnsForCurrentRow))
                columnsForCurrentRow = []
            }
        });

        return rows;
    }
}
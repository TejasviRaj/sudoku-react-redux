//Author- Tejasvi Raj Pant

import checkItemRepeats from './CheckItemRepeats'

export default function checkForConflicts(board) {
    for (let row in board.rows) {
        for (let cell in row.cells) {
            cell.hasConflict = false;
        }
    }

    for (let row of board.rows) {
        let cellsInCurrentRow = []
        for (let cell of row.cells) {
            cellsInCurrentRow.push(cell)
        }
        checkItemRepeats(cellsInCurrentRow)
    }



    for (let i = 0; i < 9; i++) {
        let cellsInCurrentColumn = []
        for (let j = 0; j < 9; j++) {
            cellsInCurrentColumn.push(board.rows[j].cells[i])
        }
        checkItemRepeats(cellsInCurrentColumn)
    }

    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let rowStartIndex = i;
            let rowEndIndex = i + 3;
            let columnStartIndex = j;
            let columnEndIndex = j + 3;
            let cellArray = []
            for (let i = rowStartIndex; i < rowEndIndex; i++) {
                for (let j = columnStartIndex; j < columnEndIndex; j++) {
                    cellArray.push(board.rows[i].cells[j])
                }
            }
            checkItemRepeats(cellArray)
        }
    }
}



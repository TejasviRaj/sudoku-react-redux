//Author- Tejasvi Raj Pant

export default function checkForConflicts(board) {
    for (let row in board.rows) {
        for (let cell in row.cells) {
                cell.hasConflict = false;
            }
        }
    }

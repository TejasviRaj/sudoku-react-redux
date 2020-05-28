import React from 'react'
import './Result.css'

const Result = (props) => {
    return (
        isGameSolved(props.board) ? <p className = "result"> Congratulations!! You solved the game</p>: <p></p>
    );
};

function isGameSolved(board) {
    if(Object.keys(board).length === 0) {
        return false;
    }
    if(board.rows.length <= 0) {
        return false;
    }
    for (let row of board.rows) {
        for (let cell of row.cells) {
            if (cell.hasConflict || cell.cellValue === null ||
                cell.cellValue === '') {
                return false
            }
        }
    }
    return true;
}

export default Result;
import React from 'react'
import './Cell.css'

const Cell = (props) => {
    let rowColumnIndex =  Math.floor(props.cell.rowNumber/3) + '' + Math.floor(props.cell.columnNumber/3);
    let highlightedIndexArray = ["01", "10", "12", "21"];
    let isPlain = highlightedIndexArray.includes(rowColumnIndex);
    return (
        <td class = {isPlain ? 'sudokuCell' : 'sudokuCellHighlighted'}>
        {props.cell.cellValue}

        </td>
        );
}


export default Cell;
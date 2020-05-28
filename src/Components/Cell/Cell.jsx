import React from 'react';
import './Cell.css';
import userInput from '../../redux/Actions/userInputCreator';
import {connect} from 'react-redux'

const Cell = (props) => {
    let rowColumnIndex =  Math.floor(props.cell.rowNumber/3) + '' + Math.floor(props.cell.columnNumber/3);
    let highlightedIndexArray = ["01", "10", "12", "21"];
    let isPlain = highlightedIndexArray.includes(rowColumnIndex);
    return (
        <td className = {isPlain ? 'sudokuCell' : 'sudokuCellHighlighted'}>
        {props.cell.cellValue}

        </td>
        );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserInput: (updatedCell) => dispatch(userInput(updatedCell))
    }
}

export default connect(null, mapDispatchToProps)(Cell);
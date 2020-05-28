import React from 'react';
import './Cell.css';
import userInput from '../../redux/Actions/userInputCreator';
import {connect} from 'react-redux'




const Cell = (props) => {

  

    let rowColumnIndex =  Math.floor(props.cell.rowNumber/3) + '' + Math.floor(props.cell.columnNumber/3);
    let highlightedIndexArray = ["01", "10", "12", "21"];
    let classes = [];
    props.cell.isUserEditable ? classes.push('editable') : classes.push('non-editable');
    props.cell.hasConflict ? classes.push('has-conflict') : classes.push('');
    let isPlain = highlightedIndexArray.includes(rowColumnIndex);
    isPlain? classes.push('sudokuCell') : classes.push('sudokuCellHighlighted');
    let value = props.cell.cellValue;
    return (
        <input type="text" onChange={onInputChange} className = {classes.join(' ')} readOnly={!props.cell.isUserEditable} value = {value} />
        );

    function onInputChange(e) {
            e.preventDefault();
            let {cell, onUserInput} = props;
            let value = e.target.value
            
            if (cell.isUserEditable && (value === '' || /^[1-9]$/.test(value))) {
                cell.cellValue = value
                onUserInput(cell);

            }
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onUserInput: (updatedCell) => dispatch(userInput(updatedCell))
    }
}

export default connect(null, mapDispatchToProps)(Cell);
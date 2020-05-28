//Author- Tejasvi Raj Pant

import Actions from '../Actions/ActionTypes';
import BoardFactory from '../../Sudoku/Board/BoardFactory';
import checkForConflicts from '../../Sudoku/ConflictTests/CheckForConflicts';
import cloneDeep from 'lodash.clonedeep';

const initialState = {
    board: {}
}
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case Actions.SELECT_DIFFICULTY:
            return {
                board: BoardFactory(action.difficulty),
            };
        case Actions.USER_INPUT:
            let newState = cloneDeep(state);
            mainLoop:
            for (let row of newState.board.rows) {
                for (let cell of row.cells) {
                    if (cell.columnNumber === action.updatedCell.columnNumber &&
                        cell.rowNumber === action.updatedCell.rowNumber && cell.isUserEditable) {
                        cell.cellValue = action.updatedCell.cellValue;
                        break mainLoop;
                    }
                }
            }
         
            checkForConflicts(newState.board);

            return newState;
        default:
            return state;
    }
}
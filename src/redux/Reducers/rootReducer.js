import Actions from '../Actions/ActionTypes';
import BoardFactory from '../../Sudoku/Board/BoardFactory';
initialState = {
    board: {}
}
function rootReducer(state = initialState,action) {
    switch (action.type) {
        case Actions.SELECT_DIFFICULTY:
            return {
                board: BoardFactory(action.difficulty),
            };
        case Actions.USER_INPUT:
            for (let row in state.board.rows) {
                
            } 
        default:
            return state;
    }
}
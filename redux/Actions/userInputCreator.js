import Actions from './ActionTypes'

export default function userInput(updatedCell) {
    return {
        type: Actions.USER_INPUT,
        updatedCell: updatedCell
    }
}
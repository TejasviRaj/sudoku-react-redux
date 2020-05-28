import Actions from './ActionTypes'

export default function selectActionCreator(difficulty) {
    return {
        type: Actions.SELECT_DIFFICULTY,
        difficulty: difficulty
    }
}
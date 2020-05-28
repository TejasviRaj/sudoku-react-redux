import difficultyArray from './difficulty'

function BoardFactory(selectedDifficulty) {
    let difficulty = difficultyArray.filter(difficultyObj => difficultyObj.difficulty === selectedDifficulty)[0];
    let initalStateChoices = difficulty.initialStateChoices;
    let initialState = getRandomInitialState(initalStateChoices);
    return new board(selectedDifficulty, difficulty)
}

function getRandomInitialState(initalStateChoices) {
    let upperLimit = initalStateChoices.length -1;
    let lowerLimit = 0;
    return Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
}
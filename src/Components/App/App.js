//Author- Tejasvi Raj Pant
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import React from 'react';
import './App.css';
import Title from '../Title/Title';
import Sudoku from '../Sudoku/Sudoku';
import rootReducer from '../../redux/Reducers/rootReducer';
import selectDifficulty from '../../redux/Actions/selectDifficultyCreator'
import updateCell from '../../redux/Actions/userInputCreator';

function App() {
  let sta = rootReducer({},selectDifficulty("MEDIUM"));
  console.log("Hello");
  console.log(sta);
  setTimeout(() => {
    let cell = {rowNumber: 4, columnNumber: 4, cellValue: 5};
    sta = rootReducer(sta,updateCell(cell));
    console.log(sta);
  },2000);

  return (
    <React.Fragment>
    <Title></Title>
    <Switch>
      <Route exact path = {process.env.PUBLIC_URL + '/'}>
        <Home />
      </Route>
      <Route path = {process.env.PUBLIC_URL + '/:difficulty(EASY|MEDIUM|HARD)'}>
      <Sudoku />

      </Route>
      {/* <Route path = {process.env.PUBLIC_URL + '/MEDIUM'}>
      <Sudoku />

        </Route>
        <Route path = {process.env.PUBLIC_URL + '/HARD'}>
        <Sudoku />

        </Route> */}
    </Switch>
    </React.Fragment>
  );
}

export default App;

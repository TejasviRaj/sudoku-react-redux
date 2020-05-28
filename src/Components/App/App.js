//Author- Tejasvi Raj Pant
import {Switch, Route} from 'react-router-dom';
import Home from '../Home/Home';
import React from 'react';
import './App.css';
import Title from '../Title/Title';
import Sudoku from '../Sudoku/Sudoku';

function App() {
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

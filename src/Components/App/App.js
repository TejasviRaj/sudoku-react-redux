//Author- Tejasvi Raj Pant
import {Switch, Route} from 'react-router-dom'
import Home from '../Home/Home'
import React from 'react';
import './App.css';
import Title from '../Title/Title'

function App() {
  return (
    <React.Fragment>
    <Title></Title>
    <Switch>
      <Route exact path = {process.env.PUBLIC_URL + '/'}>
        <Home />
      </Route>
    </Switch>
    </React.Fragment>
  );
}

export default App;

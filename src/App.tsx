import React from 'react';
import { Switch, Route } from 'react-router';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Route>
      <Route path="/home">
        <div>Home</div>
      </Route>
    </Switch>
  </>
);

export default App;

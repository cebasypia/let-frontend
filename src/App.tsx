import React from 'react';
import { Switch, Route } from 'react-router';
import TweetList from 'components/pages/TweetList';
import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <div>
          <TweetList />
        </div>
      </Route>
      <Route path="/home">
        <div>Home</div>
      </Route>
    </Switch>
  </>
);

export default App;

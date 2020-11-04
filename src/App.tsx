import React from 'react';
import { Switch, Route } from 'react-router';
import TweetList from 'components/pages/TweetList';
import TweetDetail from 'components/pages/TweetDetail';
import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <TweetList />
      </Route>
      <Route path="/tweets/:tweetId">
        <TweetDetail />
      </Route>
      <Route path="/home">
        <div>Home</div>
      </Route>
    </Switch>
  </>
);

export default App;

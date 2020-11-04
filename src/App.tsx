import React from 'react';
import { Switch, Route } from 'react-router';
import TweetList from 'components/pages/TweetList';
import TweetDetail from 'components/pages/TweetDetail';

import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route exact path="/tweets">
        <TweetList />
      </Route>
      <Route path="/tweets/:id">
        <TweetDetail />
      </Route>
    </Switch>
  </>
);

export default App;

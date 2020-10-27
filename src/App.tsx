import React from 'react';
import { Switch, Route } from 'react-router';
import TweetCard from 'components/organisms/TweetCard';
import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <div className="test">
          <TweetCard />
        </div>
      </Route>
      <Route path="/home">
        <div>Home</div>
      </Route>
    </Switch>
  </>
);

export default App;

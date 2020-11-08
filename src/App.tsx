import React from 'react';
import { Switch, Route } from 'react-router';
import Header from 'components/templates/Header';
import Tweets from 'components/Routes/Tweets';

import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/tweets" component={Tweets} />
    </Switch>
  </>
);

export default App;

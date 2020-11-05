import React from 'react';
import { Switch, Route } from 'react-router';
import Tweets from 'components/Routes/Tweets';

import './App.css';

const App: React.FC = () => (
  <>
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/tweets" component={Tweets} />
    </Switch>
  </>
);

export default App;

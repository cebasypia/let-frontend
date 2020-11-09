import React from 'react';
import { Switch, Route } from 'react-router';
import Header from 'components/templates/Header';
import Tweets from 'components/Routes/Tweets';
import SignIn from 'components/pages//SignIn';
import SignOut from 'components/pages//SignOut';

import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/tweets" component={Tweets} />
      <Route path="/signIn">
        <SignIn />
      </Route>
      <Route path="/signOut">
        <SignOut />
      </Route>
    </Switch>
  </>
);

export default App;

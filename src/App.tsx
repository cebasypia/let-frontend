import React from 'react';
import { Switch, Route } from 'react-router';
import ProtectedRoute from 'components/Routes/ProtectedRoute';
import Header from 'components/templates/Header';
import Tweets from 'components/Routes/Tweets';
import Users from 'components/Routes/Users';
import AccountEdit from 'components/pages/AccountEdit';

const App: React.FC = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/">
        <div>Home</div>
      </Route>
      <Route path="/tweets" component={Tweets} />
      <Route path="/users" component={Users} />
      <ProtectedRoute path="/account/edit" component={AccountEdit} />
    </Switch>
  </>
);

export default App;

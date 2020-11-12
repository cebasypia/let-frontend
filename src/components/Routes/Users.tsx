import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import User from 'components/pages/User';

const Users: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/:id`}>
        <User />
      </Route>
    </Switch>
  );
};

export default Users;

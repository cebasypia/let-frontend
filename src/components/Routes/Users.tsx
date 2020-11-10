import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import UserInfo from 'components/pages/UserInfo';

const Users: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <Route path={`${match.url}/:id`}>
        <UserInfo />
      </Route>
    </Switch>
  );
};

export default Users;

import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import ProtectedRoute from 'components/Routes/ProtectedRoute';
import User from 'components/pages/User';
import UserEdit from 'components/pages/UserEdit';

const Users: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <Switch>
      <ProtectedRoute path="/users/edit" component={UserEdit} />
      <Route path={`${match.url}/:id`}>
        <User />
      </Route>
    </Switch>
  );
};

export default Users;

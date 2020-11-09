/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { withAuthenticationRequired } from '@auth0/auth0-react';

type Props = RouteProps & {
  component: React.FC;
};

const ProtectedRoute: React.FC<Props> = ({ component, ...args }) => {
  return (
    <Route component={withAuthenticationRequired(component, {})} {...args} />
  );
};

export default ProtectedRoute;

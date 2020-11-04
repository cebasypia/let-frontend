import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import TweetList from 'components/templates/TweetList';
import TweetDetail from 'components/templates/TweetDetail';

const Tweets: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={match.url}>
          <TweetList />
        </Route>
        <Route path={`${match.url}/:id`}>
          <TweetDetail />
        </Route>
      </Switch>
    </>
  );
};

export default Tweets;

import React from 'react';
import { Switch, Route, RouteComponentProps } from 'react-router';
import TweetSearch from 'components/pages/TweetSearch';
import TweetDetail from 'components/templates/TweetDetail';

const Tweets: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <>
      <Switch>
        <Route exact path={match.url}>
          <TweetSearch />
        </Route>
        <Route path={`${match.url}/:id`}>
          <TweetDetail />
        </Route>
      </Switch>
    </>
  );
};

export default Tweets;

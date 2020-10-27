import { Tweet, isTweets } from 'domains/twitter/models/tweet';
import data from 'data';

const tweets = data;
const getTweets = (): Tweet[] => {
  if (!isTweets(tweets)) {
    return [];
  }

  return tweets;
};

export default getTweets;

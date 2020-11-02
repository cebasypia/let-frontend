import { Tweet, isTweets } from 'domains/twitter/models/tweet';

const getTweets = async (): Promise<Tweet[]> => {
  const response = await fetch(
    'http://localhost:3000/api/v1/tweets?word=japan',
  );
  const tweets = (await response.json()) as Tweet[];

  if (!isTweets(tweets)) {
    return [];
  }

  return tweets;
};

export default getTweets;

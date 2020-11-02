import { Tweet, isTweets } from 'domains/twitter/models/tweet';

const getTweets = async (keyword: string): Promise<Tweet[]> => {
  const url = new URL('http://localhost:3000/api/v1/tweets');
  url.searchParams.set('word', keyword);
  const response = await fetch(url.toString());
  const tweets = (await response.json()) as Tweet[];

  if (!isTweets(tweets)) {
    return [];
  }

  return tweets;
};

export default getTweets;

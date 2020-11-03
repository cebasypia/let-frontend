import { Tweet, isTweet } from 'domains/twitter/models/tweet';

export const getTweetById = async (id: string): Promise<Tweet | undefined> => {
  const url = new URL(`http://localhost:3000/api/v1/tweets/${id}`);
  const response = await fetch(url.toString());
  const tweet = (await response.json()) as Tweet;

  if (!isTweet(tweet)) {
    return undefined;
  }

  return tweet;
};

import { Tweet, isTweet } from 'domains/twitter/models/tweet';

export const getTweetById = async (id: string): Promise<Tweet> => {
  const url = new URL(`http://localhost:3000/api/v1/tweets/${id}`);
  try {
    const response = await fetch(url.toString());
    const tweet = (await response.json()) as Tweet;
    if (!isTweet(tweet)) {
      throw Error('API取得エラー: データ型不一致');
    }

    return tweet;
  } catch (error) {
    throw Error('お探しのTweetは見つかりませんでした');
  }
};

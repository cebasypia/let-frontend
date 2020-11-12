import ky from 'ky';
import { Tweet, isTweet } from 'domains/twitter/models/tweet';

export const getTweetById = async (id: string): Promise<Tweet> => {
  const url = new URL(`${process.env.REACT_APP_BACKEND_DOMAIN}/tweets/${id}`);
  try {
    const response = await ky(url.toString());
    const tweet = (await response.json()) as Tweet;
    if (!isTweet(tweet)) {
      throw Error('API取得エラー: データ型不一致');
    }

    return tweet;
  } catch (error) {
    throw Error('お探しのTweetは見つかりませんでした');
  }
};

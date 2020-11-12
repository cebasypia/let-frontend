import ky from 'ky';
import { Tweet, isTweets } from 'domains/twitter/models/tweet';

export const getTimeline = async (screenName: string): Promise<Tweet[]> => {
  const url = new URL(
    `${process.env.REACT_APP_BACKEND_DOMAIN}/tweets/timeline/${screenName}`,
  );

  try {
    const response = await ky(url.toString());
    const tweets = (await response.json()) as Tweet[];
    if (!isTweets(tweets)) {
      throw Error('API取得エラー: データ型不一致');
    }

    return tweets;
  } catch (error) {
    throw Error('Timeline not found');
  }
};

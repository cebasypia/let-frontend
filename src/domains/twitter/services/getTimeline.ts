import ky from 'ky';
import { Tweet, isTweets } from 'domains/twitter/models/tweet';

type GetTimeline = (screenName: string, maxId?: string) => Promise<Tweet[]>;

export const getTimeline: GetTimeline = async (screenName, maxId = '') => {
  const url = new URL(
    `${process.env.REACT_APP_BACKEND_DOMAIN}/tweets/timeline/${screenName}`,
  );
  url.searchParams.set('max_id', maxId);

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

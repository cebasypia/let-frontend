import { Tweet, isTweets } from 'domains/twitter/models/tweet';

export const getTimeline = async (screenName: string): Promise<Tweet[]> => {
  const url = new URL(
    `http://localhost:3000/api/v1/tweets/timeline/${screenName}`,
  );

  try {
    const response = await fetch(url.toString());
    const tweets = (await response.json()) as Tweet[];
    if (!isTweets(tweets)) {
      throw Error('API取得エラー: データ型不一致');
    }

    return tweets;
  } catch (error) {
    throw Error('Timeline not found');
  }
};
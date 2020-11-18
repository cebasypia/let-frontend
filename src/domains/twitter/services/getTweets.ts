import ky from 'ky';
import { Tweet, isTweets } from 'domains/twitter/models/tweet';

type GetTweets = (keyword: string, maxId?: string) => Promise<Tweet[]>;

const getTweets: GetTweets = async (keyword, maxId = '0') => {
  const url = new URL(`${process.env.REACT_APP_BACKEND_DOMAIN}/tweets`);
  url.searchParams.set('word', keyword);
  url.searchParams.set('max_id', maxId);
  const response = await ky(url.toString());
  const tweets = (await response.json()) as Tweet[];

  if (!isTweets(tweets)) {
    throw Error('API取得エラー: データ型不一致');
  }

  return tweets;
};

export default getTweets;

import { useEffect, useState } from 'react';

import { Tweet, getTweets } from 'domains/twitter';

type GetNextTweets = (maxId: string) => Promise<void>;

type ReturnValue = {
  tweets: Tweet[];
  isLoading: boolean;
  getNextTweets: GetNextTweets;
};

const useGetTweets = (keyword: string): ReturnValue => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      if (!keyword) return;

      setIsLoading(true);

      try {
        const tweetsData = await getTweets(keyword);
        setTweets(tweetsData);
      } catch (err) {
        setTweets([]);
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [keyword]);

  const getNextTweets: GetNextTweets = async (maxId) => {
    if (!keyword) return;

    setIsLoading(true);

    try {
      const tweetsData = await getTweets(keyword, maxId);
      setTweets((t) => t.concat(tweetsData));
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { tweets, isLoading, getNextTweets };
};

export default useGetTweets;

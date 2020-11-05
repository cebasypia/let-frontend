import { useEffect, useState } from 'react';

import { Tweet, getTweets } from 'domains/twitter';

type ReturnValue = {
  tweets: Tweet[];
  isLoading: boolean;
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
        // throw new Error(`${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [keyword]);

  return { tweets, isLoading };
};

export default useGetTweets;

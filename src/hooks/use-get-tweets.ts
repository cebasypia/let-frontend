import { useEffect, useState } from 'react';

import { Tweet, getTweets } from 'domains/twitter';

type ReturnValue = {
  tweets: Tweet[];
  isLoading: boolean;
};

const useGetTweets = (): ReturnValue => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const tweetsData = await getTweets();
        setTweets(tweetsData);
      } catch (err) {
        throw new Error(`error ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, []);

  return { tweets, isLoading };
};

export default useGetTweets;

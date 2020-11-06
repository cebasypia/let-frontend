import { useEffect, useState } from 'react';

import { Tweet, getTimeline } from 'domains/twitter';

type ReturnValue = {
  tweets: Tweet[];
  isLoading: boolean;
};

export const useGetTimeline = (screenName: string): ReturnValue => {
  const [tweets, setTweets] = useState<Tweet[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const tweetsData = await getTimeline(screenName);
        setTweets(tweetsData);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [screenName]);

  return { tweets, isLoading };
};

import { useEffect, useState } from 'react';

import { Tweet, getTimeline } from 'domains/twitter';

type GetNextTimeline = (maxId: string) => Promise<void>;

type ReturnValue = {
  tweets: Tweet[];
  isLoading: boolean;
  getNextTimeline: GetNextTimeline;
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

  const getNextTimeline: GetNextTimeline = async (maxId) => {
    setIsLoading(true);

    try {
      const tweetsData = await getTimeline(screenName, maxId);
      setTweets((t) => t.concat(tweetsData));
    } catch (err) {
      throw new Error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { tweets, isLoading, getNextTimeline };
};

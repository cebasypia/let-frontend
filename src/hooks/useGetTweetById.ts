import { useEffect, useState } from 'react';

import { Tweet, getTweetById } from 'domains/twitter';

type ReturnValue = {
  tweet?: Tweet;
  isLoading: boolean;
};

export const useGetTweetById = (id: string): ReturnValue => {
  const [tweet, setTweet] = useState<Tweet>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const tweetData = await getTweetById(id);
        setTweet(tweetData);
      } catch (err) {
        // throw new Error(`${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [id]);

  return { tweet, isLoading };
};

import { useEffect, useState } from 'react';

import { User, getTwitterUser } from 'domains/twitter';

type ReturnValue = {
  user?: User;
  isLoading: boolean;
};

export const useGetTwitterUser = (screenName: string): ReturnValue => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const userData = await getTwitterUser(screenName);
        setUser(userData);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [screenName]);

  return { user, isLoading };
};

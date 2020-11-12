import { useEffect, useState } from 'react';
import { User, getUser } from 'domains/let';

type ReturnValue = {
  user?: User;
  isLoading: boolean;
};

export const useGetUser = (id: string): ReturnValue => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const load = async (): Promise<void> => {
      setIsLoading(true);

      try {
        const userData = await getUser(id);
        setUser(userData);
      } catch (err) {
        throw new Error(err);
      } finally {
        setIsLoading(false);
      }
    };

    void load();
  }, [id]);

  return { user, isLoading };
};

import { User, isUser } from './user';

export type Tweet = {
  id: string;
  text: string;
  createdAt: string;
  uri: string;
  user: User;
};

const isTweet = (arg: unknown): arg is Tweet => {
  const t = arg as Tweet;

  return (
    typeof t?.id === 'string' &&
    typeof t?.text === 'string' &&
    typeof t?.createdAt === 'string' &&
    isUser(t.user)
  );
};

const isTweets = (args: unknown[]): args is Tweet[] =>
  !args.some((arg) => !isTweet(arg));

export { isTweet, isTweets };

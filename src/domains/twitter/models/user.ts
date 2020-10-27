export type User = {
  id: string;
  name: string;
  screenName: string;
  description: string;
  followersCount: number;
  friendsCount: number;
  profileImageUrl: string;
  uri: string;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    typeof u?.id === 'string' &&
    typeof u?.name === 'string' &&
    typeof u?.screenName === 'string' &&
    typeof u?.description === 'string' &&
    typeof u?.followersCount === 'number' &&
    typeof u?.friendsCount === 'number' &&
    typeof u?.profileImageUrl === 'string' &&
    typeof u?.uri === 'string'
  );
};

export { isUser };

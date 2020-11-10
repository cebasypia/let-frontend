export type User = {
  id: string;
  sub: string;
  name: string;
  introduction: string;
  // description: string;
  // followersCount: number;
  // friendsCount: number;
  // profileImageUrl: string;
  // profileBannerUrl: string;
  // uri: string;

  /* eslint-disable-next-line */
  created_at: string;
};

const isUser = (arg: unknown): arg is User => {
  const u = arg as User;

  return (
    typeof u?.id === 'number' &&
    typeof u?.sub === 'string' &&
    typeof u?.name === 'string' &&
    // typeof u?.screenName === 'string' &&
    typeof u?.introduction === 'string' &&
    // typeof u?.description === 'string' &&
    // typeof u?.followersCount === 'number' &&
    // typeof u?.friendsCount === 'number' &&
    // typeof u?.profileImageUrl === 'string'
    // typeof u?.profileBannerUrl === 'string' &&
    // typeof u?.uri === 'string'
    typeof u?.created_at === 'string'
  );
};

export { isUser };

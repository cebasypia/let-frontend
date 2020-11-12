import { User, isUser } from 'domains/twitter/models/user';

export const getTwitterUser = async (screenName: string): Promise<User> => {
  const url = new URL(
    `${process.env.REACT_APP_BACKEND_DOMAIN}/tweets/users/${screenName}`,
  );
  try {
    const response = await fetch(url.toString());
    const user = (await response.json()) as User;
    if (!isUser(user)) {
      throw Error('API取得エラー: データ型不一致');
    }

    return user;
  } catch (error) {
    throw Error('お探しのユーザーは見つかりませんでした');
  }
};

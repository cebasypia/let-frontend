import { User, isUser } from 'domains/let';

export const getUser = async (id: string): Promise<User> => {
  const url = new URL(`${process.env.REACT_APP_BACKEND_DOMAIN}/users/${id}`);

  try {
    const response = await fetch(url.toString());
    const user = (await response.json()) as User;
    if (!isUser(user)) {
      throw Error(`API取得エラー: データ型不一致`);
    }

    return user;
  } catch (error) {
    throw Error(error);
  }
};

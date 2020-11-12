import { User, isUser } from 'domains/let';
import ky from 'ky';

type UserData = {
  user: { name: string };
};

export const patchUser = async (
  user: UserData,
  accessToken: string,
): Promise<User> => {
  const url = new URL(`${process.env.REACT_APP_BACKEND_DOMAIN}/users`);

  try {
    const response = await ky.patch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      json: user,
    });
    const updatedUser = (await response.json()) as User;
    if (!isUser(updatedUser)) {
      throw Error(`API取得エラー: データ型不一致`);
    }

    return updatedUser;
  } catch (error) {
    throw Error(error);
  }
};

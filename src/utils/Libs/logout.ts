import { toast } from 'react-toastify';
import { mutate } from 'swr';
import { removeToken } from 'utils/Libs/removeToken';

export const logout = () => {
  removeToken();
  mutate(() => true, undefined, { revalidate: false });
  removeToken();
  toast.success('로그아웃되었습니다.');
};

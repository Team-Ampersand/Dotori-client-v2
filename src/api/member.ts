import { GetServerSidePropsContext } from 'next';
import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { MemberController } from 'utils/Libs/requestUrls';
import { setToken } from 'utils/Libs/setToken';

export const signin = async (id: string, password: string) => {
  try {
    const { data } = await apiClient.post(MemberController.auth, {
      email: id,
      password: password,
    });
    setToken(data.accessToken, data.refreshToken, null);
    return toast.success('로그인이 되었습니다.');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 404') {
      toast.warning('해당 유저가 없어요.');
    } else if (e.message === 'Request failed with status code 400') {
      toast.warning('비밀번호가 올바르지 않아요.');
    }
    return false;
  }
};

export const tokenReissue = async (
  refreshToken: string,
  ctx: GetServerSidePropsContext | null
) => {
  let newAuthorization: string;
  try {
    const { data } = await apiClient.patch(
      MemberController.auth,
      {},
      {
        headers: {
          refreshToken,
        },
      }
    );
    newAuthorization = data.accessToken;
    refreshToken = data.refreshToken;
    setToken(newAuthorization, refreshToken, ctx);
    return { newAuthorization };
  } catch (e: any) {}
};

import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
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

export const Login = () => {
  const router = useRouter();
  const gauthCode = router.query.code?.toString();
  const fetch = async (gauthCode: { code: string }) => {
    try {
      const { data: tokens } = await apiClient.post(
        MemberController.auth,
        gauthCode
      );
      setToken(tokens.accessToken, tokens.refreshToken, null);
      router.push('/home');
      toast.success('로그인이 되었습니다.');
    } catch (e: any) {
      if (e.message === 'Request failed with status code 404') {
        toast.warning('해당 유저가 없어요.');
      } else if (e.message === 'Request failed with status code 500') {
        toast.warning('로그인을 할 수 없어요.');
      }
    }
  };
  useEffect(() => {
    if (!gauthCode) return;
    fetch({ code: gauthCode });
  }, [gauthCode]);
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

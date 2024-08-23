import { GetServerSidePropsContext } from 'next';
import { toast } from 'react-toastify';
import { apiClient } from 'utils/Libs/apiClient';
import { removeToken } from 'utils/Libs/removeToken';
import { MemberController } from 'utils/Libs/requestUrls';
import { setToken } from 'utils/Libs/setToken';

export const signin = async (id: string, password: string) => {
  try {
    const { data } = await apiClient.post(MemberController.auth, {
      email: id,
      password: password,
    });
    setToken(
      data.accessToken,
      data.accessExp,
      data.refreshToken,
      data.refreshExp,
      null
    );
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

export const signup = async (
  email: string,
  password: string,
  name: string,
  stuNum: number,
  gender: string
) => {
  try {
    await apiClient.post(MemberController.signup, {
      memberName: name,
      stuNum: String(stuNum),
      password,
      email,
      gender,
    });
    return toast.success('회원가입이 되었습니다');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 409') {
      toast.warning('이미 가입된 유저에요.');
    }
    return false;
  }
};

export const emailCheck = async (email: string) => {
  try {
    await apiClient.post(MemberController.emailCheck, {
      email,
    });
    return true;
  } catch (e: any) {
    if (e.message === 'Request failed with status code 404')
      toast.warning('유저를 찾을 수 없어요.');
    if (e.message === 'Request failed with status code 409')
      toast.warning('이미 가입된 유저입니다.');
    return false;
  }
};

export const emailPasswordCheck = async (email: string) => {
  try {
    await apiClient.post(MemberController.emailPasswordCheck, {
      email,
    });
    return true;
  } catch (e: any) {
    if (e.message === 'Request failed with status code 404')
      toast.warning('유저를 찾을 수 없어요.');
    return false;
  }
};

export const authCheck = async (emailCode: number) => {
  try {
    await apiClient.post(MemberController.authcheck, {
      key: String(emailCode),
    });
    return toast.success('인증되었어요.');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 202') {
      toast.warning('인증번호시간이 만료됬어요.');
    } else if (e.message === 'Request failed with status code 404') {
      toast.warning('인증번호가 달라요.');
    }
    return false;
  }
};

export const passwordChange = async (
  currentPassword: string,
  newPassword: string
) => {
  try {
    await apiClient.patch(MemberController.changePasswd, {
      currentPassword,
      newPassword,
    });
    return toast.success('비밀번호가 변경되었습니다');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 400') {
      toast.warning('비밀번호가 일치하지않아요.');
    }
    return false;
  }
};

export const authPasswordChange = async (
  newPassword: string,
  email?: string
) => {
  try {
    await apiClient.patch(MemberController.authChangePasswd, {
      newPassword,
      email,
    });
    return toast.success('비밀번호가 변경되었습니다');
  } catch (e: any) {
    if (e.message === 'Request failed with status code 404') {
      toast.warning('유저를 찾을 수 없어요.');
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
          'Refresh-Token': refreshToken,
        },
      }
    );
    newAuthorization = data.accessToken;
    refreshToken = data.refreshToken;
    setToken(
      data.accessToken,
      data.accessExp,
      data.refreshToken,
      data.refreshExp,
      ctx
    );
    return { newAuthorization };
  } catch (e: any) {
    removeToken();
    if (typeof window !== 'undefined') {
      window.location.href = '/signin';
    }
  }
};

export const postProfileImage = async (image: Blob | string) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await apiClient.post(
      MemberController.profileImage,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return { data };
  } catch (e: any) {}
};

export const patchProfileImage = async (image: Blob | string) => {
  try {
    const formData = new FormData();
    formData.append('image', image);
    const { data } = await apiClient.patch(
      MemberController.profileImage,
      formData,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );
    return { data };
  } catch (e: any) {}
};

export const deleteProfileImage = async () => {
  try {
    const { data } = await apiClient.delete(MemberController.profileImage);
    return { data };
  } catch (e: any) {}
};

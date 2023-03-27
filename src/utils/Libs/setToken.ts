import { GetServerSidePropsContext } from 'next';
import { setCookie } from 'nookies';

export const setToken = (
  Authorization: string,
  RefreshToken: string,
  ctx: GetServerSidePropsContext | null
): void => {
  setCookie(ctx, 'Authorization', `Bearer ${Authorization}`, {
    maxAge: 10800,
    path: '/',
  }); // 3시간
  setCookie(ctx, 'RefreshToken', `Bearer ${RefreshToken}`, {
    maxAge: 15768000,
    path: '/',
  }); // 6개월
};

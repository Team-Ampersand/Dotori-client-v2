import { GetServerSidePropsContext } from 'next';
import { setCookie } from 'nookies';

export const setToken = (
  Authorization: string,
  AuthorizationExp: string,
  RefreshToken: string,
  RefreshTokenExp: string,
  ctx: GetServerSidePropsContext | null
): void => {
  const authExpires = new Date(AuthorizationExp);
  const refreshExpires = new Date(RefreshTokenExp);

  setCookie(ctx, 'Authorization', `Bearer ${Authorization}`, {
    expires: authExpires,
    path: '/',
  });

  setCookie(ctx, 'RefreshToken', `Bearer ${RefreshToken}`, {
    expires: refreshExpires,
    path: '/',
  });
};

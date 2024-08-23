import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';
import { tokenReissue } from 'api/member';

export const getToken = async (ctx: GetServerSidePropsContext | null) => {
  if (ctx) {
    let Authorization = ctx.req.cookies['Authorization'] || '';
    let RefreshToken = ctx.req.cookies['RefreshToken'] || '';

    if (!RefreshToken) return {};
    if (!Authorization) {
      try {
        const response = await tokenReissue(RefreshToken, ctx);
        if (response && response.newAuthorization) {
          Authorization = response.newAuthorization;
        }
      } catch (error) {
        return {};
      }
    }

    return { Authorization, RefreshToken };
  } else {
    const { Authorization, RefreshToken } = parseCookies();
    return { Authorization, RefreshToken };
  }
};

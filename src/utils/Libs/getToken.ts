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
        const response: any = await tokenReissue(RefreshToken, ctx);
        Authorization = response?.newAuthorization || '';
      } catch {
        return {};
      }
    }

    return { Authorization, RefreshToken };
  } else {
    const { Authorization, RefreshToken } = parseCookies();
    return { Authorization, RefreshToken };
  }
};

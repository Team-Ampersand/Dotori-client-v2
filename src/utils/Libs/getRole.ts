import { parseCookies } from 'nookies';
import jwt from 'jwt-decode';
import { RoleType } from 'types';
import { GetServerSidePropsContext } from 'next';
import { RoleData } from 'assets/data/RoleData';

export function getUserToken(ctx?: GetServerSidePropsContext) {
  let token = ctx
    ? ctx.req.cookies['Authorization']
    : parseCookies().Authorization;
  if (!token) return '';
  const user: RoleType = jwt(token.replace('Bearer', ''));
  return user.authority;
}

export const getRole = (ctx?: GetServerSidePropsContext) => {
  const user = getUserToken(ctx);
  if (!user) return '';
  return RoleData.TOKEN[user];
};

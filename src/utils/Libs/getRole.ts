import { parseCookies } from 'nookies';
import jwt from 'jwt-decode';
import { RoleType } from 'types';
import { GetServerSidePropsContext } from 'next';

export const getRole = (ctx?: GetServerSidePropsContext) => {
  let token = ctx
    ? ctx.req.cookies['Authorization']
    : parseCookies().Authorization;
  if (!token) return '';
  const user: RoleType = jwt(token.replace('Bearer', ''));
  if (user.roles[0] === 'ROLE_MEMBER') return 'member';
  else if (user.roles[0] === 'ROLE_ADMIN') return 'admin';
  else if (user.roles[0] === 'ROLE_DEVELOPER') return 'developer';
  else if (user.roles[0] === 'ROLE_COUNCILLOR') return 'councillor';
  else return '';
};

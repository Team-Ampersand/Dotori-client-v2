import encodeBuffer from 'mocks/utils/encodeBuffer';
import jwtSignature from 'mocks/utils/jwtSignature';
import { RestRequest } from 'msw';

interface Props {
  type: 'accessToken' | 'refreshToken';
  email?: string;
  ctx?: RestRequest;
}

const mockJwt = ({ type, email, ctx }: Props) => {
  const token = type === 'accessToken' ? 'authorization' : 'refreshToken';
  if (!!ctx) return ctx.cookies[token];

  const header = encodeBuffer({
    alg: 'HS256',
  });

  const role = () => {
    if (type === 'refreshToken') return undefined;
    switch (email?.slice(5, 6)) {
      case '0':
        return ['ROLE_ADMIN'];
      case '1':
        return ['ROLE_DEVELOPER'];
      case '2':
        return ['ROLE_COUNCILLOR'];
      default:
        return ['ROLE_MEMBER'];
    }
  };

  const payload = encodeBuffer({
    roles: role(),
    userEmail: email,
    tokenType: type,
    iat: new Date().getTime(),
    exp: new Date().getTime() + (type === 'accessToken' ? 10800 : 15768000),
  });

  const signature = jwtSignature(header, payload);
  return `${header}.${payload}.${signature}`;
};

export default mockJwt;

import encodeBuffer from 'mocks/utils/encodeBuffer';
import { getUserToken } from 'utils/Libs/getRole';
import jwtSignature from 'mocks/utils/jwtSignature';

const useJwt = (email: string | null, type: 'accessToken' | 'refreshToken') => {
  const header = encodeBuffer({
    alg: 'HS256',
  });

  const role = () => {
    if (type === 'refreshToken') return undefined;
    if (!email) return [getUserToken()];
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

export default useJwt;

import { RestRequest } from 'msw';

interface MockJwtProps {
  type: 'accessToken' | 'refreshToken';
  email?: string;
  ctx?: RestRequest;
}

export default MockJwtProps;

import { RestHandler, RestRequest, rest } from 'msw';
import mockApi from '../mockApi';
import { MemberController } from 'utils/Libs/requestUrls';
import useJwt from 'hooks/useJwt';

const postRefreshToken: RestHandler<RestRequest> = rest.patch(
  mockApi(MemberController.auth),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: useJwt(null, 'accessToken'),
        refreshToken: useJwt(null, 'refreshToken'),
        expiresAt: 'yyyy-MM-ddTHH:mm:ss',
      })
    );
  }
);

export default postRefreshToken;

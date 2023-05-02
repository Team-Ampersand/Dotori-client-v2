import { RestHandler, RestRequest, rest } from 'msw';
import mockApi from '../../utils/mockApi';
import { MemberController } from 'utils/Libs/requestUrls';
import useJwt from 'mocks/utils/mockJwt';

const postRefreshToken: RestHandler<RestRequest> = rest.patch(
  mockApi(MemberController.auth),
  (_req, res, ctx) => {
    const accessToken = useJwt(null, 'accessToken');
    const refreshToken = useJwt(null, 'refreshToken');
    return res(
      ctx.status(200),
      ctx.json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        expiresAt: 'yyyy-MM-ddTHH:mm:ss',
      })
    );
  }
);

export default postRefreshToken;

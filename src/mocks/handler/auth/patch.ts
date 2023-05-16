import { RestHandler, RestRequest, rest } from 'msw';
import mockApi from '../../utils/mockApi';
import { MemberController } from 'utils/Libs/requestUrls';
import mockJwt from 'mocks/utils/mockJwt';

const postRefreshToken: RestHandler<RestRequest> = rest.patch(
  mockApi(MemberController.auth),
  (req, res, ctx) => {
    const accessToken = mockJwt({ type: 'accessToken', ctx: req });
    const refreshToken = mockJwt({ type: 'refreshToken', ctx: req });
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

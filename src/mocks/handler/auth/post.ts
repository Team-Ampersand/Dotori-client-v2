import useJwt from 'mocks/utils/mockJwt';
import { RestHandler, RestRequest, rest } from 'msw';
import { MemberController } from 'utils/Libs/requestUrls';
import mockApi from '../../utils/mockApi';

const postLogin: RestHandler<RestRequest> = rest.post(
  mockApi(MemberController.auth),
  async (req, res, ctx) => {
    const { email }: { email: string } = await req.json();
    const accessToken = useJwt({ type: 'accessToken', email: email });
    const refreshToken = useJwt({ type: 'refreshToken', email: email });

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

export default postLogin;

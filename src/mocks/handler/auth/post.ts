import useJwt from 'hooks/useJwt';
import { RestHandler, RestRequest, rest } from 'msw';
import { MemberController } from 'utils/Libs/requestUrls';
import mockApi from '../mockApi';

const postLogin: RestHandler<RestRequest> = rest.post(
  mockApi(MemberController.auth),
  async (req, res, ctx) => {
    const { email }: { email: string } = await req.json();

    return res(
      ctx.status(200),
      ctx.json({
        accessToken: useJwt(email, 'accessToken'),
        refreshToken: useJwt(email, 'refreshToken'),
        expiresAt: 'yyyy-MM-ddTHH:mm:ss',
      })
    );
  }
);

export default postLogin;

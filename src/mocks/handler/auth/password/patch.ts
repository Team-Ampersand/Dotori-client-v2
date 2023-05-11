import mockApi from 'mocks/utils/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { MemberController } from 'utils/Libs/requestUrls';

const postSignUp: RestHandler<RestRequest> = rest.post(
  mockApi(MemberController.authChangePasswd),
  (_req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export default postSignUp;

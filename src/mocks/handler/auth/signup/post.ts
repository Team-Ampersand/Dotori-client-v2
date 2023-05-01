import mockApi from 'mocks/handler/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';

const postSignUp: RestHandler<RestRequest> = rest.post(
  mockApi('/auth/signup'),
  (_req, res, ctx) => {
    return res(ctx.status(200));
  }
);

export default postSignUp;

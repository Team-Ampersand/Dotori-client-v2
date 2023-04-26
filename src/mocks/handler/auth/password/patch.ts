import mockApi from 'mocks/handler/mockApi';
import { rest } from 'msw';

const postSignUp = rest.post(mockApi('/auth/signup'), (_req, res, ctx) => {
  return res(ctx.status(200));
});

export default postSignUp;

import { rest } from 'msw';
import mockApi from './mockApi';

export const handlers = [
  rest.get(mockApi(''), (_req, res, ctx) => {
    return res(
      ctx.json({
        ok: true,
        message: 'sccuess',
      })
    );
  }),
];

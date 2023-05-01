import mockApi from 'mocks/handler/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { penaltyController } from 'utils/Libs/requestUrls';

const stuNum: string = '3106';

const getRuleList: RestHandler<RestRequest> = rest.get(
  mockApi(penaltyController.studentRule(getRole(), stuNum)),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        rules: [
          {
            id: 1,
            rule: 'FIREARMS',
            createdDate: '2023-01-01',
          },
          {
            id: 2,
            rule: 'WEAPON',
            createdDate: '2023-01-01',
          },
        ],
      })
    );
  }
);

export default getRuleList;

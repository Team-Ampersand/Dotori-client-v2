import mockApi from 'mocks/handler/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { penaltyController } from 'utils/Libs/requestUrls';

const getPenaltyList: RestHandler<RestRequest> = rest.get(
  mockApi(penaltyController.strRule(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        students: [
          {
            id: 1,
            memberName: '김시훈',
            stuNum: '3106',
            selfStudyStatus: false,
            rule: [],
          },
          {
            id: 2,
            memberName: '김시훈',
            stuNum: '3106',
            selfStudyStatus: false,
            rule: [],
          },
        ],
      })
    );
  }
);

export default getPenaltyList;

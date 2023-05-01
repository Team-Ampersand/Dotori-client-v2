import mockApi from 'mocks/utils/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { SelfstudyController } from 'utils/Libs/requestUrls';

const getSelfStudySearch: RestHandler<RestRequest> = rest.get(
  mockApi(SelfstudyController.selfStudyRank(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        list: [
          {
            rank: 1,
            id: 1,
            stuNum: '0001',
            memberName: '유저1',
            gender: 'MAN',
            selfStudyCheck: true,
          },
          {
            rank: 2,
            id: 2,
            stuNum: '0002',
            memberName: '유저2',
            gender: 'WOMAN',
            selfStudyCheck: true,
          },
          {
            rank: 3,
            id: 3,
            stuNum: '0003',
            memberName: '유저3',
            gender: 'MAN',
            selfStudyCheck: false,
          },
        ],
      })
    );
  }
);

export default getSelfStudySearch;

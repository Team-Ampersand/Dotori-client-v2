import { RestHandler, RestRequest, rest } from 'msw';
import { StuInfoController } from 'utils/Libs/requestUrls';
import mockApi from '../mockApi';

const getStuInfoList: RestHandler<RestRequest> = rest.get(
  mockApi(StuInfoController.stuInfo),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          gender: 'MAN',
          memberName: '전승원4',
          stuNum: '2102',
          role: 'ROLE_DEVELOPER',
          selfStudyStatus: 'CAN',
        },
        {
          id: 2,
          gender: 'MAN',
          memberName: '김준',
          stuNum: '2105',
          role: 'ROLE_ADMIN',
          selfStudyStatus: 'CANT',
        },
        {
          id: 3,
          gender: 'WOMAN',
          memberName: '전승원1',
          stuNum: '2217',
          role: 'ROLE_MEMBER',
          selfStudyStatus: 'IMPOSSIBLE',
        },
        {
          id: 4,
          gender: 'WOMAN',
          memberName: '김준',
          stuNum: '2108',
          role: 'ROLE_COUNCILLOR',
          selfStudyStatus: 'APPLIED',
        },
      ])
    );
  }
);

export default getStuInfoList;

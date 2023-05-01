import mockApi from 'mocks/handler/mockApi';
import { rest } from 'msw';
import { StuInfoController } from 'utils/Libs/requestUrls';

const getSearchStuInfo = rest.get(
  mockApi(StuInfoController.searchStuInfo),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          email: 's21038@gsm.hs.kr',
          gender: 'MAN',
          memberName: '전승원4',
          stuNum: '2102',
          role: 'ROLE_DEVELOPER',
          selfStudyStatus: 'CAN',
        },
        {
          id: 2,
          email: 's21037@gsm.hs.kr',
          gender: 'MAN',
          memberName: '김준',
          stuNum: '2105',
          role: 'ROLE_ADMIN',
          selfStudyStatus: 'CANT',
        },
        {
          id: 3,
          email: 's21036@gsm.hs.kr',
          gender: 'WOMAN',
          memberName: '전승원1',
          stuNum: '2217',
          role: 'ROLE_MEMBER',
          selfStudyStatus: 'IMPOSSIBLE',
        },
        {
          id: 4,
          email: 's21035@gsm.hs.kr',
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

export default getSearchStuInfo;

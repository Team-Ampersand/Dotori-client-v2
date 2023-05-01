import { RestHandler, RestRequest, rest } from 'msw';
import { MemberController } from 'utils/Libs/requestUrls';
import mockApi from '../mockApi';

const getUserInfo: RestHandler<RestRequest> = rest.get(
  mockApi(MemberController.myProfile),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        stuNum: 1234,
        name: '개발섭유저',
        gender: 'MAN',
      })
    );
  }
);

export default getUserInfo;

import mockApi from 'mocks/handler/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { SelfstudyController } from 'utils/Libs/requestUrls';

const getSelfStudyInfo: RestHandler<RestRequest> = rest.get(
  mockApi(SelfstudyController.selfStudyInfo(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 38,
        limit: 50,
        selfStudyStatus: 'CAN',
      })
    );
  }
);

export default getSelfStudyInfo;

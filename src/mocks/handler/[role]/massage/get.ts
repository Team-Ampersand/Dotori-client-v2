import mockApi from 'mocks/utils/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { MassageController } from 'utils/Libs/requestUrls';

const getMassageInfo: RestHandler<RestRequest> = rest.get(
  mockApi(MassageController.massage(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        count: 2,
        limit: 5,
        selfStudyStatus: 'CAN',
      })
    );
  }
);

export default getMassageInfo;

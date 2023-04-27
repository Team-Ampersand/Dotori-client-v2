import mockApi from 'mocks/handler/mockApi';
import { rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { MassageController } from 'utils/Libs/requestUrls';

const getMassageInfo = rest.get(
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

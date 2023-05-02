import mockApi from 'mocks/utils/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';

const getBoard: RestHandler<RestRequest> = rest.get(
  mockApi(NoticeController.getNotice(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        boardList: [
          {
            id: 1,
            title: '제목',
            content: '내용',
            role: 'ROLE_ADMIN',
            createdDate: '2023-03-09T05:35:43.520161',
          },
          {
            id: 2,
            title: '제목2',
            content: '내용2',
            role: 'ROLE_DEVELOPER',
            createdDate: '2023-03-10T05:35:43.520161',
          },
          {
            id: 3,
            title: '제목3',
            content: '내용3',
            role: 'ROLE_COUNCILLOR',
            createdDate: '2023-03-10T05:35:43.520161',
          },
        ],
      })
    );
  }
);

export default getBoard;

import mockApi from 'mocks/handler/mockApi';
import { RestHandler, RestRequest, rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';

const boardId = window?.location.pathname.slice(-1);

const getBoardDetail: RestHandler<RestRequest> = rest.get(
  mockApi(NoticeController.getNoticeDetail(getRole(), boardId ?? '1')),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: Number(boardId ?? '1'),
        title: 'title',
        content: 'content',
        role: ['ROLE_ADMIN'],
        boardImage: [
          {
            id: 1,
            url: 'https://dotori-s3.s3.ap-northeast-2.amazonaws.com/img/f4546853-67d8-48d6-8ce1-904b37373d175EC5FAED-BED9-4E8C-892A-F4AA643515B0.jpeg',
          },
        ],
        createdDate: '2023-03-13T23:03:30.599004',
        modifiedDate: null,
      })
    );
  }
);

export default getBoardDetail;

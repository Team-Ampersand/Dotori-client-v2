import mockApi from 'mocks/handler/mockApi';
import { rest } from 'msw';
import { getRole } from 'utils/Libs/getRole';
import { SongController } from 'utils/Libs/requestUrls';

const getSongList = rest.get(
  mockApi(SongController.music(getRole())),
  (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        content: [
          {
            id: 1,
            url: 'https://www.youtube.com/watch?v=MVAwDDwVj-s&list=RDMVAwDDwVj-s&start_radio=1hello',
            username: '김시훈',
            email: 's21024@gsm.hs.kr',
            createdTime: '2023-03-09T05:35:43.520161',
            stuNum: '3106',
          },
          {
            id: 2,
            url: 'https://www.youtube.com/watch?v=MVAwDDwVj-s&list=RDMVAwDDwVj-s&start_radio=1hello',
            username: '김시훈',
            email: 's21024@gsm.hs.kr',
            createdTime: '2023-03-09T05:35:43.520161',
            stuNum: '3106',
          },
        ],
      })
    );
  }
);

export default getSongList;

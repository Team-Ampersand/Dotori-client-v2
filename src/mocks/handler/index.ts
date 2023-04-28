import getBoardDetail from './[role]/board/[board_id]/get';
import getBoard from './[role]/board/get';
import getMassageInfo from './[role]/massage/get';
import getSelfStudyInfo from './[role]/self-study/info/get';
import postRefreshToken from './auth/patch';
import postLogin from './auth/post';
import getUserInfo from './home/get';

export const handlers = [
  postLogin,
  postRefreshToken,
  getUserInfo,
  getBoard,
  getSelfStudyInfo,
  getMassageInfo,
  getBoardDetail,
];

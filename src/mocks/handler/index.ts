import getBoardDetail from './[role]/board/[board_id]/get';
import getBoard from './[role]/board/get';
import getMassageInfo from './[role]/massage/get';
import getSongList from './[role]/music/get';
import getSelfStudyInfo from './[role]/self-study/info/get';
import getSelfStudySearch from './[role]/self-study/rank/get';
import getSelfStudyRank from './[role]/self-study/rank/get';
import postRefreshToken from './auth/patch';
import postLogin from './auth/post';
import getUserInfo from './home/get';
import getStuInfoList from './student-info/get';
import getSearchStuInfo from './student-info/search/get';

export const handlers = [
  postLogin,
  postRefreshToken,
  getUserInfo,
  getBoard,
  getSelfStudyInfo,
  getMassageInfo,
  getBoardDetail,
  getSelfStudyRank,
  getSelfStudySearch,
  getSongList,
  getStuInfoList,
  getSearchStuInfo,
];

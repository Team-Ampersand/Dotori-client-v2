import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeModal from 'components/Song/molecules/NoticeModal';
import SongList from 'components/Song/organisms/SongList';
import SongRightLayer from 'components/Song/organisms/SongRightLayer';
import * as S from 'components/Song/template/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { getRole } from 'utils/Libs/getRole';

const Song = () => {
  UseThemeEffect();
  const role = getRole();
  return (
    <MainTemplates>
      <SideBar role={role} />
      <S.SongTemplate>
        <CommonHeader />
        <S.SongLayer>
          <SongList />
          <SongRightLayer />
        </S.SongLayer>
      </S.SongTemplate>
      <NoticeModal />
    </MainTemplates>
  );
};

export default Song;

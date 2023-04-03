import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeModal from 'components/Song/molecules/NoticeModal';
import SongList from 'components/Song/organisms/SongList';
import SongRightLayer from 'components/Song/organisms/SongRightLayer';
import * as S from 'components/Song/template/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { SongListType } from 'types/components/SongPage';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SongController } from 'utils/Libs/requestUrls';

const Song: NextPage<{
  fallback: Record<string, SongListType>;
  role: string;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <MainTemplates>
      <SideBar />
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);

  if (!Authorization) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  try {
    const { data: songData } = await apiClient.get(SongController.music(role), {
      headers: { Authorization },
    });
    return {
      props: {
        fallback: { [SongController.music(role)]: songData },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default Song;

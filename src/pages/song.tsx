import { getMusic } from 'api/music';
import SEOHead from 'components/Common/atoms/SEOHead';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeModal from 'components/Song/molecules/NoticeModal';
import SongList from 'components/Song/organisms/SongList';
import SongModal from 'components/Song/organisms/SongModal';
import SongRightLayer from 'components/Song/organisms/SongRightLayer';
import * as S from 'components/Song/template/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { SWRConfig } from 'swr';
import { SongListType } from 'types/components/SongPage';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SongController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';

const SongPage: NextPage<{
  fallback: Record<string, SongListType>;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title="| 기상음악페이지" />
      <SWRConfig value={fallback}>
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
          <SongModal />
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);
  const date = `${getDate(new Date())[0]}-${getDate(new Date())[1]}-${
    getDate(new Date())[2]
  }`;

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
      params: {
        date: date,
      },
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

export default SongPage;

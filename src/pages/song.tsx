import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';
import SEOHead from 'components/Common/atoms/SEOHead';
import { CommonPageWrapper } from 'components/Common/atoms/Wrappers/CommonPageWrapper/style';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeModal from 'components/Song/molecules/NoticeModal';
import SongList from 'components/Song/organisms/SongList';
import SongModal from 'components/Song/organisms/SongModal';
import SongRightLayer from 'components/Song/organisms/SongRightLayer';
import { SongLayer } from 'components/Song/template/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { NextPage } from 'next';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import { SongListType } from 'types/components/SongPage';

const SongPage: NextPage<{
  fallback: Record<string, SongListType>;
}> = ({ fallback }) => {
  UseThemeEffect();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isModal, setModal] = useState<boolean>(false);
  return (
    <>
      <SEOHead title="| 기상음악페이지" />
      <SWRConfig value={fallback}>
        <MainTemplates>
          <SideBar />
          <CommonPageWrapper>
            <CommonHeader />
            <ResponsiveHeader />
            <SongLayer>
              <SongList selectedDate={selectedDate} />
              <SongRightLayer
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                setModal={setModal}
              />
            </SongLayer>
          </CommonPageWrapper>
          <SongModal
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
          <NoticeModal isModal={isModal} setModal={setModal} />
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export default SongPage;

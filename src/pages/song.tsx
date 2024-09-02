import { NextPage } from 'next';
import { useState } from 'react';
import { SWRConfig } from 'swr';
import UseThemeEffect from 'hooks/useThemeEffect';
import { CommonPageWrapper } from 'components/Common/atoms/Wrappers/CommonPageWrapper/style';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { SongLayer } from 'components/Song/template/style';
import SEOHead from 'components/Common/atoms/SEOHead';
import ResponsiveHeader from 'components/Common/atoms/ResponsiveHeader';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import SongList from 'components/Song/organisms/SongList';
import SongModal from 'components/Song/organisms/SongModal';
import SongRightLayer from 'components/Song/organisms/SongRightLayer';
import NoticeModal from 'components/Song/molecules/NoticeModal';
import { SongListType } from 'types/components/SongPage';

const SongPage: NextPage<{
  fallback: Record<string, SongListType>;
}> = ({ fallback }) => {
  UseThemeEffect();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isNoticeModal, setNoticeModal] = useState<boolean>(false);
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
                setNoticeModal={setNoticeModal}
              />
            </SongLayer>
          </CommonPageWrapper>
          <SongModal
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            setNoticeModal={setNoticeModal}
          />
          <NoticeModal isNoticeModal={isNoticeModal} setNoticeModal={setNoticeModal} />
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export default SongPage;

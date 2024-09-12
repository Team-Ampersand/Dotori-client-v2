import { NextPage } from 'next';
import { SWRConfig } from 'swr';
import SideBar from 'components/Common/organisms/Sidebar';
import SEOHead from 'components/Common/atoms/SEOHead';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import { SelfStudyTable } from 'components/SelfStudy/organisms';
import { CommonPageWrapper } from 'components/Common/atoms/Wrappers/CommonPageWrapper/style';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { selfstudyListType } from 'types';

const SelfStudyPage: NextPage<{
  fallback: Record<string, selfstudyListType>;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 자습신청페이지'} />
      <SWRConfig value={fallback}>
        <MainTemplates>
          <SideBar />
          <CommonPageWrapper>
            <CommonHeader />
            <SelfStudyTable />
          </CommonPageWrapper>
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export default SelfStudyPage;

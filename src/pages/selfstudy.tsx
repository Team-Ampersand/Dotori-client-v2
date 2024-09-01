import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { SelfStudyTable } from 'components/SelfStudy/organisms';
import { CommonPageWrapper } from 'components/Common/atoms/Wrappers/CommonPageWrapper/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import { GetServerSideProps, NextPage } from 'next';
import { getRole } from 'utils/Libs/getRole';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { selfstudyListType } from 'types';
import SEOHead from 'components/Common/atoms/SEOHead';

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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const role = getRole(ctx);

  try {
    const { data: selfStudyData } = await apiClient.get(
      SelfstudyController.selfStudyRank(role),
    );

    return {
      props: {
        fallback: { [SelfstudyController.selfStudyRank(role)]: selfStudyData },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default SelfStudyPage;

import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { MassageTable } from 'components/Massage/organisms';
import { MassageTemplates } from 'components/Massage/templates/MassageTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { MassageController } from 'utils/Libs/requestUrls';
import { massageRankProps } from 'types';
import SEOHead from 'components/Common/atoms/SEOHead';

const MassagePage: NextPage<{
  fallback: Record<string, massageRankProps>;
}> = ({ fallback }) => {
  UseThemeEffect();
  return (
    <>
      <SEOHead title={'| 안마의자페이지'} />
      <SWRConfig value={fallback}>
        <MainTemplates>
          <SideBar />
          <MassageTemplates>
            <CommonHeader />
            <MassageTable />
          </MassageTemplates>
        </MainTemplates>
      </SWRConfig>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);

  try {
    const { data: massageData } = await apiClient.get(
      MassageController.massageRank(role),
      { headers: { Authorization } }
    );
    return {
      props: {
        fallback: { [MassageController.massageRank(role)]: massageData },
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default MassagePage;

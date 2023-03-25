import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { SelfStudyTable } from 'components/SelfStudy/organisms';
import { SelfstudyTemplates } from 'components/SelfStudy/templates/SelfstudyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import { GetServerSideProps, NextPage } from 'next';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import { SelfstudyController } from 'utils/Libs/requestUrls';
import { selfstudyListType } from 'types';

const SelfStudyPage: NextPage<{
  fallback: Record<string, selfstudyListType>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();
  return (
    <SWRConfig value={fallback}>
      <MainTemplates>
        <SideBar role={role} />
        <SelfstudyTemplates>
          <CommonHeader />
          <SelfStudyTable />
        </SelfstudyTemplates>
      </MainTemplates>
    </SWRConfig>
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
    const { data: selfStudyData } = await apiClient.get(
      SelfstudyController.selfStudyRank(role),
      { headers: { Authorization: Authorization } }
    );

    return {
      props: {
        fallback: { [SelfstudyController.selfStudyRank(role)]: selfStudyData },
        role,
      },
    };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};

export default SelfStudyPage;

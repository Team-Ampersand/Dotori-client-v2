import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import { PenaltyTable } from 'components/Penalty/organisms';
import { PenaltyTemplates } from 'components/Penalty/templates/PenaltyTemplates/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import { GetServerSideProps, NextPage } from 'next';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SWRConfig } from 'swr';
import { apiClient } from 'utils/Libs/apiClient';
import { penaltyController } from 'utils/Libs/requestUrls';
import { PenaltyStuListType } from 'types';

const PenaltyPage: NextPage<{
  fallback: Record<string, PenaltyStuListType>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();
  return (
    <SWRConfig value={fallback}>
      <MainTemplates>
        <SideBar role={role} />
        <PenaltyTemplates>
          <CommonHeader />
          <PenaltyTable />
        </PenaltyTemplates>
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
  } else if (role !== 'admin') {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    };
  }

  try {
    const { data: penaltyListData } = await apiClient.get(
      penaltyController.strRule(role),
      {
        headers: { Authorization },
        params: { memberName: '', stuNum: '' },
      }
    );

    return {
      props: {
        fallback: { [penaltyController.strRule(role)]: penaltyListData },
        role,
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default PenaltyPage;

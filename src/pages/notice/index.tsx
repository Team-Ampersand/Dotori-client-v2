import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeEmpty from 'components/Notice/organisms/NoticeEmpty';
import NoticeHeader from 'components/Notice/organisms/NoticeHeader';
import NoticeList from 'components/Notice/organisms/NoticeList';
import {
  NoticeTemplate,
  NoticeWrapper,
} from 'components/Notice/templates/NoticeTemplate/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { SWRConfig } from 'swr';
import { noticePageProps } from 'types';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SelfstudyController } from 'utils/Libs/requestUrls';

const Notice: NextPage<{
  fallback: Record<string, noticePageProps>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();
  return (
    <SWRConfig value={fallback}>
      <MainTemplates>
        <SideBar role={role} />
        <NoticeTemplate>
          <NoticeHeader />
          <NoticeWrapper>
            <NoticeList />
            <NoticeEmpty />
          </NoticeWrapper>
        </NoticeTemplate>
      </MainTemplates>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);

  const { data: selfStudyData } = await apiClient.get(
    SelfstudyController.selfStudyInfo(role),
    { headers: { Authorization } }
  );

  if (!Authorization) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  return {
    props: {
      fallback: {
        [SelfstudyController.selfStudyInfo(role)]: selfStudyData,
      },
      role,
    },
  };
};

export default Notice;

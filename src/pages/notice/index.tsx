import SEOHead from 'components/Common/atoms/SEOHead';
import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeEmpty from 'components/Notice/organisms/NoticeEmpty';
import NoticeList from 'components/Notice/organisms/NoticeList';
import NoticeWrite from 'components/Notice/organisms/NoticeWrite';
import {
  NoticeTemplate,
  NoticeWrapper,
} from 'components/Notice/templates/NoticeTemplate/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { useRecoilValue } from 'recoil';
import { isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import { SWRConfig } from 'swr';
import { noticePageProps } from 'types';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { SelfstudyController } from 'utils/Libs/requestUrls';

const Notice: NextPage<{
  role: string;
}> = ({ role }) => {
  UseThemeEffect();
  const isWrite = useRecoilValue(isNoticeWrite);
  return (
    <>
      <SEOHead title="공지사항페이지" />
      <MainTemplates>
        <SideBar role={role} />
        <NoticeTemplate>
          <CommonHeader />
          <NoticeWrapper>
            <NoticeList />
            {isWrite ? <NoticeWrite /> : <NoticeEmpty />}
          </NoticeWrapper>
        </NoticeTemplate>
      </MainTemplates>
    </>
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

  return {
    props: {
      role,
    },
  };
};

export default Notice;

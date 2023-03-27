import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeContent from 'components/Notice/organisms/NoticeContent';
import NoticeHeader from 'components/Notice/organisms/NoticeHeader';
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
import { noticeDetailType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';

const Notice: NextPage<{
  fallback: Record<string, noticePageProps> | Record<string, noticeDetailType>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();

  const isWrite = useRecoilValue(isNoticeWrite);

  return (
    <SWRConfig value={fallback}>
      <MainTemplates>
        <SideBar role={role} />
        <NoticeTemplate>
          <NoticeHeader />
          <NoticeWrapper>
            <NoticeList />
            {isWrite ? <NoticeWrite /> : <NoticeContent />}
          </NoticeWrapper>
        </NoticeTemplate>
      </MainTemplates>
    </SWRConfig>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = await getRole(ctx);

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
      fallback: {},
      role,
    },
  };
};

export default Notice;

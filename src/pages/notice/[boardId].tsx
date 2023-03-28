import CommonHeader from 'components/Common/organisms/CommonHeader';
import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeContent from 'components/Notice/organisms/NoticeContent';
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
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';

const Notice: NextPage<{
  role: string;
}> = ({ role }) => {
  UseThemeEffect();

  const isWrite = useRecoilValue(isNoticeWrite);

  return (
    <MainTemplates>
      <SideBar role={role} />
      <NoticeTemplate>
        <CommonHeader />
        <NoticeWrapper>
          <NoticeList />
          {isWrite ? <NoticeWrite /> : <NoticeContent />}
        </NoticeWrapper>
      </NoticeTemplate>
    </MainTemplates>
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
      role,
    },
  };
};

export default Notice;

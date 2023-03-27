import SideBar from 'components/Common/organisms/Sidebar';
import { MainTemplates } from 'components/Common/templates/MainTemplates/style';
import NoticeContent from 'components/Notice/organisms/NoticeContent';
import NoticeEdit from 'components/Notice/organisms/NoticeEdit';
import NoticeHeader from 'components/Notice/organisms/NoticeHeader';
import NoticeList from 'components/Notice/organisms/NoticeList';
import NoticeWrite from 'components/Notice/organisms/NoticeWrite';
import {
  NoticeTemplate,
  NoticeWrapper,
} from 'components/Notice/templates/NoticeTemplate/style';
import UseThemeEffect from 'hooks/useThemeEffect';
import { GetServerSideProps, NextPage } from 'next';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { isNoticeWrite, noticeContent } from 'recoilAtoms/recoilAtomContainer';
import { SWRConfig } from 'swr';
import { noticePageProps } from 'types';
import { noticeDetailType } from 'types/components/NoticePage';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { NoticeController } from 'utils/Libs/requestUrls';

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
  const boardId = ctx.params?.boardId ?? '';

  const { data: noticeData } = await apiClient.get(
    NoticeController.getNotice(role),
    { headers: { Authorization } }
  );

  const { data: noticeDetailData } = await apiClient.get(
    NoticeController.getNoticeDetail(role, boardId[0]),
    { headers: { Authorization } }
  );

  // const { data: deleteNotice } = await apiClient.delete(
  //   NoticeController.getNoticeDetail(role, boardId[0]),
  //   { headers: { Authorization } }
  // );

  if (!Authorization) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  if (noticeDetailData) {
  }

  return {
    props: {
      fallback: {
        [NoticeController.getNotice(role)]: noticeData,
        // [NoticeController.getNoticeDetail(role, boardId[0])]: noticeDetailData,
        // [NoticeController.getNoticeDetail(role, boardId[0])]: deleteNotice,
      },
      role,
    },
  };
};

export default Notice;

import SEOHead from 'components/Common/atoms/SEOHead';
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
import { SWRConfig } from 'swr';
import { noticeDetailType, noticeListType } from 'types/components/NoticePage';
import { apiClient } from 'utils/Libs/apiClient';
import { getRole } from 'utils/Libs/getRole';
import { getToken } from 'utils/Libs/getToken';
import { NoticeController } from 'utils/Libs/requestUrls';

const Notice: NextPage<{
  fallback: Record<string, noticeListType> & Record<string, noticeDetailType>;
  role: string;
}> = ({ fallback, role }) => {
  UseThemeEffect();
  const isWrite = useRecoilValue(isNoticeWrite);
  return (
    <>
      <SEOHead title="공지사항페이지" />
      <SWRConfig value={fallback}>
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
      </SWRConfig>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { Authorization } = await getToken(ctx);
  const role = getRole(ctx);
  const boardId = ctx.params?.boardId ?? '';

  try {
    const { data: noticeData } = await apiClient.get(
      NoticeController.getNotice(role),
      { headers: { Authorization } }
    );

    const { data: noticeDetailData } = await apiClient.get(
      NoticeController.getNoticeDetail(role, boardId),
      { headers: { Authorization } }
    );

    return {
      props: {
        fallback: {
          [NoticeController.getNotice(role)]: noticeData,
          [NoticeController.getNoticeDetail(role, boardId)]: noticeDetailData,
        },
        role,
      },
    };
  } catch (e) {
    return { props: {} };
  }
};

export default Notice;

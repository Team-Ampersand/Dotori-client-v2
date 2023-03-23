import ContentHeader from 'components/Notice/molecules/ContentHeader';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { noticePageProps } from 'types';
import { noticeDetailType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const NoticeContent = () => {
  const router = useRouter();
  const role = getRole();
  const boardId = router.query.boardId ?? '';
  const { data } = useSWR<noticeDetailType>(
    NoticeController.getNoticeDetail(role, boardId[0])
  );

  return (
    <S.Layer>
      <ContentHeader data={data} />
      <S.ContentWrapper>
        <p>{data?.content}</p>
      </S.ContentWrapper>
    </S.Layer>
  );
};

export default NoticeContent;

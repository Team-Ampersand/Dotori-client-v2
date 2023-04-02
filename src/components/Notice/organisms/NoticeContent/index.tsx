import ContentHeader from 'components/Notice/molecules/ContentHeader';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useSWR from 'swr';
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
      {data && (
        <>
          <ContentHeader data={data} boardId={boardId[0]} />
          <S.ContentWrapper>
            {data.content.split('\n').map((line, key) => (
              <p key={key}>
                {line}
                <br />
              </p>
            ))}
            <S.BottomWrapper>
              {data.boardImage.map((item) => (
                <div key={item.id}>
                  <Image
                    src={item.url}
                    alt="image"
                    width={200}
                    height={200}
                    layout="fill"
                    objectFit={'cover'}
                  />
                </div>
              ))}
            </S.BottomWrapper>
          </S.ContentWrapper>
        </>
      )}
    </S.Layer>
  );
};

export default NoticeContent;

import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import * as S from './style';
import { noticePageProps } from 'types';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';

const NoticeBoard = () => {
  const role = getRole();
  const { data } = useSWR<noticePageProps[]>([`/${role}/getNotice`]);

  return (
    <S.NoticeBoardWrapper>
      <p>공지사항</p>
      <S.NoticeList>
        {data ? (
          data.map((i, idx) => (
            <>
              <NoticeItem
                writer={'도토리'}
                date={i.createdDate.slice(1, 10)}
                title={i.title}
                desc={i.content}
                isCurrenPage={false}
                id={idx}
              />
              {data[idx]?.createdDate.slice(1, 10) !==
                data[idx - 1]?.createdDate.slice(1, 10) && (
                <S.DateLine>
                  <hr />
                  {`${i?.createdDate.slice(5, 7)}월 ${i?.createdDate.slice(
                    8,
                    10
                  )}일`}
                  <hr />
                </S.DateLine>
              )}
            </>
          ))
        ) : (
          <S.EmptyNoticeItem>
            <span>공지사항이없습니다</span>
          </S.EmptyNoticeItem>
        )}
      </S.NoticeList>
      <S.NoticeBottom />
    </S.NoticeBoardWrapper>
  );
};

export default NoticeBoard;

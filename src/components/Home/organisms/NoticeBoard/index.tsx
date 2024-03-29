import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import * as S from './style';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { NoticeController } from 'utils/Libs/requestUrls';
import { noticeListType } from 'types/Home';

const NoticeBoard = () => {
  const role = getRole();
  const { data } = useSWR<noticeListType>(NoticeController.getNotice(role));
  const boardList = data?.boardList;

  return (
    <S.NoticeBoardWrapper>
      <p>공지사항</p>
      <S.NoticeList>
        {boardList ? (
          boardList.map((i, idx) => (
            <S.NoticeBox key={idx}>
              {boardList[idx]?.createdDate.slice(0, 7) <
                boardList[idx - 1]?.createdDate.slice(0, 7) && (
                <S.DateLine>
                  <hr />
                  {`${i?.createdDate.slice(0, 4)}년 ${i?.createdDate.slice(
                    5,
                    7
                  )}월`}
                  <hr />
                </S.DateLine>
              )}
              <NoticeItem
                writer={i.role}
                date={i.createdDate.slice(0, 10)}
                title={i.title}
                desc={i.content}
                isCurrenPage={false}
                id={i.id}
              />
            </S.NoticeBox>
          ))
        ) : (
          <S.EmptyNoticeItem />
        )}
      </S.NoticeList>

      <S.NoticeBottom />
    </S.NoticeBoardWrapper>
  );
};

export default NoticeBoard;

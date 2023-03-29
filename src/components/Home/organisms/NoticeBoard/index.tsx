import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import * as S from './style';
import { getRole } from 'utils/Libs/getRole';
import useSWR from 'swr';
import { NoticeController } from 'utils/Libs/requestUrls';
import { noticeListType } from 'types/Home';
import { RoleData } from 'assets/data/RoleData';

const NoticeBoard = () => {
  const role = getRole();
  const { data } = useSWR<noticeListType>(NoticeController.getNotice(role));
  const content = data?.content;

  return (
    <S.NoticeBoardWrapper>
      <p>공지사항</p>
      <S.NoticeList>
        {content ? (
          content.map((i, idx) => (
            <>
              <NoticeItem
                writer={i.roles[0]}
                date={i.createdDate.slice(0, 10)}
                title={i.title}
                desc={i.content}
                isCurrenPage={false}
                id={idx}
              />
              {content[idx]?.createdDate.slice(0, 10) >
                content[idx + 1]?.createdDate.slice(0, 10) && (
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
          <S.EmptyNoticeItem />
        )}
      </S.NoticeList>
      <S.NoticeBottom />
    </S.NoticeBoardWrapper>
  );
};

export default NoticeBoard;

import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { isNoticeFetch, isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { noticeListType } from 'types/components/NoticePage';
import { dateRegex } from 'utils/dateRegex';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const NoticeList = () => {
  const role = getRole();
  const { data, mutate } = useSWR<noticeListType>(
    NoticeController.getNotice(role)
  );
  const content = data?.content;
  const [noticeFetch, setNoticeFetch] = useRecoilState(isNoticeFetch);
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);

  const requestWriter = (role: string) => {
    switch (role) {
      case '사감선생님':
        return '사감선생님';
      case '기숙사자치위원회':
        return '기숙사자치위원회';
      default:
        return '도토리';
    }
  };

  useEffect(() => {
    if (!noticeFetch) return;
    mutate();
    setNoticeFetch(false);
  }, [noticeFetch]);
  return (
    <S.Layer>
      <ListHeader />
      <S.NoticeContainer>
        {content &&
          content.map((item, key) => (
            <>
              <div
                key={item.id}
                onClick={() => {
                  setNoticeWrite(false);
                }}
              >
                <NoticeItem
                  writer={requestWriter(item.roles)}
                  date={dateRegex(item.createdDate)}
                  title={item.title}
                  desc={item.content}
                  isCurrenPage={false}
                  id={item.id}
                />
              </div>
              {content[key]?.createdDate.slice(1, 10) !==
                content[key + 1]?.createdDate.slice(1, 10) && (
                <S.DateLine>
                  <hr />
                  {`${item?.createdDate.slice(
                    5,
                    7
                  )}월 ${item?.createdDate.slice(8, 10)}일`}
                  <hr />
                </S.DateLine>
              )}
            </>
          ))}
      </S.NoticeContainer>
    </S.Layer>
  );
};

export default NoticeList;

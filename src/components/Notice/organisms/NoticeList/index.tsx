import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isNoticeDelete,
  isNoticeFetch,
  isNoticeWrite,
  noticeChoice,
} from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { userRole } from 'types/common/userRole';
import { noticeListType } from 'types/components/NoticePage';
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
  const noticeDelete = useRecoilValue(isNoticeDelete);
  const [selectedNotice, setSelectedNotice] = useRecoilState(noticeChoice);
  const router = useRouter();

  const requestWriter = (role: Omit<userRole, 'ROLE_MEMBER'>) => {
    switch (role) {
      case 'ROLE_ADMIN':
        return '사감선생님';
      case 'ROLE_COUNCILLOR':
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

  const onChoice = (id: number) => {
    if (!noticeDelete) router.push(`/notice/${id}`);
    if (selectedNotice.find((item) => item === id)) {
      setSelectedNotice([...selectedNotice.filter((item) => item !== id)]);
      return;
    }
    setSelectedNotice([...selectedNotice, id]);
  };

  return (
    <S.Layer>
      <ListHeader role={role} choice={selectedNotice} />
      <S.NoticeContainer>
        {content &&
          content.map((item, key) => (
            <>
              <div
                key={item.id}
                onClick={() => {
                  setNoticeWrite(false);
                  if (noticeDelete) {
                  }
                }}
              >
                <NoticeItem
                  writer={requestWriter(item.roles)}
                  date={item.createdDate.slice(0, 10)}
                  title={item.title}
                  desc={item.content}
                  isCurrenPage={
                    noticeDelete && !!selectedNotice.find((i) => i === item.id)
                  }
                  id={item.id}
                  onClick={() => onChoice(item.id)}
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

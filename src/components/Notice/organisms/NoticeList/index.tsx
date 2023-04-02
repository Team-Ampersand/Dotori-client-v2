import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import { useRouter } from 'next/router';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isNoticeDelete, noticeChoice } from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { noticeListType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const NoticeList = () => {
  const role = getRole();
  const { data, mutate } = useSWR<noticeListType>(
    NoticeController.getNotice(role)
  );
  const boardList = data?.boardList;
  const noticeDelete = useRecoilValue(isNoticeDelete);
  const [selectedNotice, setSelectedNotice] = useRecoilState(noticeChoice);
  const router = useRouter();

  const onChoice = (id: number) => {
    if (!noticeDelete) router.push(`/notice/${id}`);
    if (selectedNotice.find((item) => item === id)) {
      setSelectedNotice([...selectedNotice.filter((item) => item !== id)]);
      return;
    }
    setSelectedNotice([...selectedNotice, id]);
    return;
  };

  return (
    <S.Layer>
      <ListHeader role={role} choice={selectedNotice} />
      <S.NoticeContainer>
        {boardList &&
          boardList.map((item, key) => (
            <>
              <div
                key={item.id}
                onClick={() => {
                  onChoice(item.id);
                }}
              >
                <NoticeItem
                  writer={item.role}
                  date={item.createdDate.slice(0, 10)}
                  title={item.title}
                  desc={item.content}
                  isCurrenPage={
                    noticeDelete && !!selectedNotice.find((i) => i === item.id)
                  }
                  id={item.id}
                />
              </div>
              {boardList[key]?.createdDate.slice(1, 10) !==
                boardList[key + 1]?.createdDate.slice(1, 10) && (
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

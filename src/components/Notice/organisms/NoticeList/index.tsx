import NoticeItem from 'components/Common/atoms/Items/NoticeItem';
import ListHeader from 'components/Notice/molecules/ListHeader';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isNoticeDelete, noticeChoice } from 'recoilAtoms/recoilAtomContainer';
import useSWR from 'swr';
import { noticeListType } from 'types/components/NoticePage';
import { getRole } from 'utils/Libs/getRole';
import { NoticeController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import * as S from './style';

const NoticeList = () => {
  const role = getRole();
  const { data } = useSWR<noticeListType>(NoticeController.getNotice(role));
  const boardList = data?.boardList;
  const noticeDelete = useRecoilValue(isNoticeDelete);
  const [selectedNotice, setSelectedNotice] = useRecoilState(noticeChoice);

  const onChoice = (id: number) => {
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
        {boardList &&
          [...boardList].map((item, key) => (
              <div key={key}>
              {boardList[key - 1]?.createdDate.slice(0, 7) >
                boardList[key]?.createdDate.slice(0, 7) && (
                <S.DateLine>
                  <hr />
                  {`${getDate(new Date(item.createdDate))[0]}년 ${
                    getDate(new Date(item.createdDate))[1]
                  }월`}
                  <hr />
                </S.DateLine>
              )}
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
                </div>
          ))}
      </S.NoticeContainer>
    </S.Layer>
  );
};

export default NoticeList;

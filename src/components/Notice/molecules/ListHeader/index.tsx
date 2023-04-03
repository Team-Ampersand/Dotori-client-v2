import { deleteNotice } from 'api/notice';
import CommonCheckModal from 'components/Common/molecules/CommonCheckModal';
import NoticeOptionBtn from 'components/Notice/atoms/NoticeOptionBtn';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  isNoticeDelete,
  isNoticeWrite,
  noticeChoice,
  noticeContent,
} from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';
import { mutate } from 'swr';
import { NoticeController } from 'utils/Libs/requestUrls';
import * as S from './style';

const ListHeader = ({ role, choice }: { role: string; choice: number[] }) => {
  const [noticeDelete, setNoticeDelete] = useRecoilState(isNoticeDelete);
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeContent = useSetRecoilState(noticeContent);
  const setSelectedNotice = useSetRecoilState(noticeChoice);
  const [modal, setModal] = useState(false);
  const router = useRouter();

  const onDelete = () => {
    choice.map(async (item) => {
      await deleteNotice(role, item);
      mutate(NoticeController.getNotice(role));
    });
    setModal(false);
    setSelectedNotice([]);
    router.push('/notice');
  };

  return (
    <S.Layer>
      <span>{choice.length > 0 ? `${choice.length}개 삭제` : '전체'}</span>
      {role !== 'member' && (
        <S.ButtonBox>
          <NoticeOptionBtn
            color={Palette.NEUTRAL_N20}
            border={Palette.NEUTRAL_N20}
            borderRadius="1em"
            onClick={() => {
              setNoticeDelete(!noticeDelete);
              setSelectedNotice([]);
            }}
          >
            {noticeDelete ? '취소' : '편집'}
          </NoticeOptionBtn>

          {noticeDelete ? (
            <NoticeOptionBtn
              color={Palette.SYSTEM_ERROR}
              border={Palette.SYSTEM_ERROR}
              borderRadius="1em"
              onClick={() => choice.length > 0 && setModal(true)}
            >
              삭제
            </NoticeOptionBtn>
          ) : (
            <NoticeOptionBtn
              bgColor={Palette.PRIMARY_P10}
              color={Palette.WHITE}
              borderRadius="1em"
              onClick={() => {
                setNoticeWrite(true);
                setNoticeContent(null);
                router.push('/notice');
              }}
            >
              + 작성
            </NoticeOptionBtn>
          )}
        </S.ButtonBox>
      )}

      <CommonCheckModal
        title={`${choice.length}개 항목 삭제`}
        content={`정말로 ${choice.length}개의 항목을 삭제하겠습니까?`}
        modalState={modal}
        setModalState={setModal}
        onClick={onDelete}
      />
    </S.Layer>
  );
};

export default ListHeader;

import { deleteNotice } from 'api/notice';
import NoticeOptionBtn from 'components/Notice/atoms/NoticeOptionBtn';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  isNoticeDelete,
  isNoticeFetch,
  isNoticeWrite,
  noticeChoice,
  noticeContent,
} from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';
import * as S from './style';

const ListHeader = ({ role, choice }: { role: string; choice: number[] }) => {
  const [noticeDelete, setNoticeDelete] = useRecoilState(isNoticeDelete);
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeContent = useSetRecoilState(noticeContent);
  const setSelectedNotice = useSetRecoilState(noticeChoice);
  const setNoticeFetch = useSetRecoilState(isNoticeFetch);
  const router = useRouter();

  return (
    <S.Layer>
      <span>전체</span>
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
              onClick={() => {
                choice.map(async (item) => {
                  await deleteNotice(role, item);
                  setNoticeFetch(true);
                });
              }}
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
    </S.Layer>
  );
};

export default ListHeader;

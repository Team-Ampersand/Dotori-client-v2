import NoticeOptionBtn from 'components/Notice/atoms/NoticeOptionBtn';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';
import * as S from './style';

const ListHeader = () => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [noticeWrite, setNoticeWrite] = useRecoilState(isNoticeWrite);
  const router = useRouter();

  return (
    <S.Layer>
      <span>전체</span>
      <S.ButtonBox>
        <NoticeOptionBtn
          color={Palette.NEUTRAL_N20}
          border={Palette.NEUTRAL_N20}
          onClick={() => setEdit(!isEdit)}
        >
          {isEdit ? '취소' : '편집'}
        </NoticeOptionBtn>

        {isEdit ? (
          <NoticeOptionBtn
            color={Palette.SYSTEM_ERROR}
            border={Palette.SYSTEM_ERROR}
            onClick={() => {
              return;
            }}
          >
            삭제
          </NoticeOptionBtn>
        ) : (
          <NoticeOptionBtn
            bgColor={Palette.PRIMARY_P10}
            color={Palette.WHITE}
            onClick={() => {
              setNoticeWrite(true);
              router.push('/notice');
            }}
          >
            + 작성
          </NoticeOptionBtn>
        )}
      </S.ButtonBox>
    </S.Layer>
  );
};

export default ListHeader;

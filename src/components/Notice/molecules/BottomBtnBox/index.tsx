import NoticeOptionBtn from 'components/Notice/atoms/NoticeOptionBtn';
import { useSetRecoilState } from 'recoil';
import { isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';
import * as S from './style';

const BottomBtnBox = () => {
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  return (
    <S.BtnContainer>
      <NoticeOptionBtn
        color={Palette.NEUTRAL_N20}
        bgColor={Palette.BACKGROUND_CARD}
        border={Palette.NEUTRAL_N20}
        borderRadius="8px"
        onClick={() => setNoticeWrite(false)}
      >
        취소
      </NoticeOptionBtn>
      <NoticeOptionBtn
        color={Palette.NEUTRAL_N10}
        bgColor={Palette.PRIMARY_P30}
        borderRadius="8px"
        onClick={() => {
          return;
        }}
        type="submit"
      >
        확인
      </NoticeOptionBtn>
    </S.BtnContainer>
  );
};

export default BottomBtnBox;

import NoticeOptionBtn from 'components/Notice/atoms/NoticeOptionBtn';
import { useSetRecoilState } from 'recoil';
import { isNoticeModify, isNoticeWrite } from 'recoilAtoms/recoilAtomContainer';
import { Palette } from 'styles/globals';
import * as S from './style';

interface Props {
  isSubmitting: boolean;
}

const BottomBtnBox = ({ isSubmitting }: Props) => {
  const setNoticeWrite = useSetRecoilState(isNoticeWrite);
  const setNoticeModify = useSetRecoilState(isNoticeModify);

  return (
    <S.BtnContainer>
      <NoticeOptionBtn
        color={Palette.NEUTRAL_N20}
        bgColor={Palette.BACKGROUND_CARD}
        border={Palette.NEUTRAL_N20}
        borderRadius="8px"
        onClick={() => {
          setNoticeWrite(false);
          setNoticeModify(false);
        }}
        type="button"
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
        isSubmitting={isSubmitting}
      >
        확인
      </NoticeOptionBtn>
    </S.BtnContainer>
  );
};

export default BottomBtnBox;

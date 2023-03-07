import * as S from './style';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { PenaltyDelModalProps } from 'types';

const PenaltyDelModal = ({
  modal,
  setModal,
  penaltyName,
}: PenaltyDelModalProps) => {
  return (
    <ModalOverayWrapper isClick={modal}>
      <S.PenaltyDelModalWrapper>
        <S.ModalHeaderWrapper>규정 위반 내역 삭제</S.ModalHeaderWrapper>
        <S.DelText>
          &apos;{penaltyName}&apos; 위반 내역을 삭제 하시겠습니까?
        </S.DelText>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setModal(false)}>취소</S.CancelBtn>
          <S.CheckBtn>확인</S.CheckBtn>
        </S.BtnWrapper>
      </S.PenaltyDelModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyDelModal;

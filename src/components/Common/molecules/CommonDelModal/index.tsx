import * as S from './style';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { CommonCheckModalProps } from 'types';

const CommonDelModal = ({
  modalState,
  setModalState,
  title,
  content,
  onClick,
}: CommonCheckModalProps) => {
  return (
    <ModalOverayWrapper isClick={modalState}>
      <S.PenaltyDelModalWrapper>
        <S.ModalHeaderWrapper>{title}</S.ModalHeaderWrapper>
        <S.DelText>{content}</S.DelText>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setModalState(false)}>취소</S.CancelBtn>
          <S.CheckBtn onClick={onClick}>확인</S.CheckBtn>
        </S.BtnWrapper>
      </S.PenaltyDelModalWrapper>
    </ModalOverayWrapper>
  );
};

export default CommonDelModal;

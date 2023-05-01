import * as S from './style';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { CommonCheckModalProps } from 'types';

const CommonCheckModal = ({
  modalState,
  setModalState,
  title,
  content,
  onClick,
}: CommonCheckModalProps) => (
  <ModalOverayWrapper isClick={modalState} onClick={() => setModalState(false)}>
    <S.CheckModalWrapper onClick={(e) => e.stopPropagation()}>
      <S.CheckTitle>{title}</S.CheckTitle>
      <S.CheckContent>{content}</S.CheckContent>
      <S.BtnWrapper>
        <S.CancelBtn onClick={() => setModalState(false)}>취소</S.CancelBtn>
        <S.CheckBtn onClick={onClick}>확인</S.CheckBtn>
      </S.BtnWrapper>
    </S.CheckModalWrapper>
  </ModalOverayWrapper>
);

export default CommonCheckModal;

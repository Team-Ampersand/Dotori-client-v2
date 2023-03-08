import * as S from './style';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { CommonCheckModalProps } from 'types';

const CommonCheckModal = ({
  modalState,
  setModalState,
  title,
  content,
  onClick,
}: CommonCheckModalProps) => (
    <ModalOverayWrapper isClick={modalState}>
      <S.CheckModalWrapper>
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
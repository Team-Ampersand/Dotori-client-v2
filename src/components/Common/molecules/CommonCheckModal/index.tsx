import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { MouseEvent } from 'react';
import { CommonCheckModalProps } from 'types';
import { preventEvent } from 'utils/Libs/preventEvent';
import * as S from './style';

const CommonCheckModal = ({
  modalState,
  setModalState,
  title,
  content,
  onClick,
}: CommonCheckModalProps) => (
  <ModalOverayWrapper
    isClick={modalState}
    onClick={(e: MouseEvent) => {
      preventEvent(e);
      setModalState(false);
    }}
  >
    <S.CheckModalWrapper onClick={preventEvent}>
      <S.CheckTitle>{title}</S.CheckTitle>
      <S.CheckContent>{content}</S.CheckContent>
      <S.BtnWrapper>
        <S.CancelBtn onClick={() => setModalState(false)}>취소</S.CancelBtn>
        <S.CheckBtn
          onClick={() => {
            onClick();
            setModalState(false);
          }}
        >
          확인
        </S.CheckBtn>
      </S.BtnWrapper>
    </S.CheckModalWrapper>
  </ModalOverayWrapper>
);

export default CommonCheckModal;

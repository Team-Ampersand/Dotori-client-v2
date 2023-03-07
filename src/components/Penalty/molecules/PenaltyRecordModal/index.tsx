import * as S from './style';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { PenaltyModalState } from 'types';
import ModalHeader from 'components/Home/atoms/ModalHeader';
import { XIcon, CalendarIcon, PlusIcon } from 'assets/svg';
import { useState } from 'react';
import PenaltyRecordMenuModal from '../PenaltyRecordMenuModal';
import { useRecoilState } from 'recoil';
import { penaltySelected } from 'recoilAtoms/recoilAtomContainer';

const PenaltyRecordModal = ({ modal, setModal }: PenaltyModalState) => {
  const [penaltySelect, setPenaltySelect] = useRecoilState(penaltySelected);
  const [penaltyRecordInfoModal, setPenaltyRecordInfoModal] = useState(false);

  return (
    <ModalOverayWrapper isClick={modal}>
      <S.PenaltyRecordModalWrapper>
        <ModalHeader name={'규정 위반 기록'} setState={setModal} />
        <S.SelectWrapper>
          <span>학생</span>
          <S.SelectItem>
            선민재, 박영재, 강경민, 조재영, 손정민, 유환빈
            <XIcon />
          </S.SelectItem>
        </S.SelectWrapper>
        <S.SelectWrapper>
          <span>날짜</span>
          <S.SelectItem>
            2023년 8월 12일 (오늘) <CalendarIcon />
          </S.SelectItem>
        </S.SelectWrapper>
        <S.PenaltyWrapper>
          <span>규정 위반 내용</span>
          <S.PenaltyItemsWrapper>
            {penaltySelect.map((i, idx) => (
              <S.PenaltyItems key={idx}>
                {i} <XIcon />
              </S.PenaltyItems>
            ))}
            <S.PenaltyAddBtn onClick={() => setPenaltyRecordInfoModal(true)}>
              추가하기 <PlusIcon />
            </S.PenaltyAddBtn>
          </S.PenaltyItemsWrapper>
        </S.PenaltyWrapper>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setModal(false)}>취소</S.CancelBtn>
          <S.NextBtn onClick={() => setModal(false)}>부여</S.NextBtn>
          {penaltyRecordInfoModal && (
            <PenaltyRecordMenuModal
              modal={penaltyRecordInfoModal}
              setModal={setPenaltyRecordInfoModal}
            />
          )}
        </S.BtnWrapper>
      </S.PenaltyRecordModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyRecordModal;

import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import { XmarkIcon, CalendarIcon, PlusIcon } from 'assets/svg';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  calendarModalState,
  penaltyRecordModalState,
  penaltySelected,
  penaltyStudent,
  selectedDate,
} from 'recoilAtoms/recoilAtomContainer';
import { recordPenalty } from 'api/penalty';
import { getRole } from 'utils/Libs/getRole';
import { toast } from 'react-toastify';
import { returnPenaltyValuesKorean } from 'assets/data/PenaltyValuesData';
import { mutate } from 'swr';
import { penaltyController } from 'utils/Libs/requestUrls';
import { getDate } from 'utils/getDate';
import dynamic from 'next/dynamic';
import PenaltyRecordMenuModal from '../PenaltyRecordMenuModal';
import * as S from './style';

const Calendar = dynamic(() => import('components/Common/atoms/Calendar'), {
  ssr: false,
});

const PenaltyRecordModal = () => {
  const role = getRole();
  const [penaltyStu, setPenaltyStu] = useRecoilState(penaltyStudent);
  const [penaltySelect, setPenaltySelect] = useRecoilState(penaltySelected);
  const [penaltyRecordInfoModal, setPenaltyRecordInfoModal] = useState(false);
  const [penaltyRecordModal, setPenaltyRecordModal] = useRecoilState(
    penaltyRecordModalState,
  );
  const [date] = useRecoilState(selectedDate);
  const [calendarModal, setCalenderModal] = useRecoilState(calendarModalState);
  const [year, month, day] = getDate(date);
  const [Tyear, Tmonth, Tday] = getDate();

  const handleDelete = (
    state: string[],
    setState: (state: string[]) => void,
    select: string,
  ) => {
    setState([...state.filter((i) => i !== select)]);
  };

  const handleClickRecord = async () => {
    if (penaltySelect.length === 0) {
      toast.error('규정위반 내역을 선택해 주세요.');
      return false;
    }
    await recordPenalty(
      role,
      penaltyStu.map((i) => i.stuNum),
      penaltySelect,
      `${year}-${month}-${day}`,
    ).then(() => {
      setPenaltyRecordModal(false);
      setPenaltySelect([]);
      setPenaltyStu([]);
      mutate(penaltyController.strRule(role));
    });
  };

  return (
    <ModalOverayWrapper isClick={penaltyRecordModal}>
      <S.PenaltyRecordModalWrapper>
        <ModalHeader name={'규정 위반 기록'} setState={setPenaltyRecordModal} />
        <S.SelectInfoWrapper>
          <S.SelectWrapper>
            <span>학생</span>
            <S.SelectItem>
              <>
                {penaltyStu.map((i) => i.name).join(', ')}
                <PlusIcon onClick={() => setPenaltyRecordModal(false)} />
              </>
            </S.SelectItem>
          </S.SelectWrapper>
          <S.SelectWrapper>
            <span>날짜</span>
            <S.SelectItem>
              <>
                {`${year}년 ${month}월 ${day}일`}
                {year == Tyear && month == Tmonth && day == Tday && ' (오늘)'}
                <CalendarIcon onClick={() => setCalenderModal(true)} />
                {calendarModal && (
                  <ModalOverayWrapper
                    isClick={calendarModal}
                    onClick={() => {
                      setCalenderModal(false);
                    }}
                  >
                    <Calendar setModal={setCalenderModal} />
                  </ModalOverayWrapper>
                )}
              </>
            </S.SelectItem>
          </S.SelectWrapper>
          <S.PenaltyWrapper>
            <span>규정 위반 내용</span>
            <S.PenaltyItemsWrapper>
              {penaltySelect.map((i, idx) => (
                <S.PenaltyItems key={idx}>
                  {returnPenaltyValuesKorean[i]}
                  <XmarkIcon
                    onClick={() =>
                      handleDelete(penaltySelect, setPenaltySelect, i)
                    }
                  />
                </S.PenaltyItems>
              ))}
              <S.PenaltyAddBtn onClick={() => setPenaltyRecordInfoModal(true)}>
                추가하기 <PlusIcon />
              </S.PenaltyAddBtn>
            </S.PenaltyItemsWrapper>
          </S.PenaltyWrapper>
        </S.SelectInfoWrapper>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setPenaltyRecordModal(false)}>
            취소
          </S.CancelBtn>
          <S.NextBtn onClick={() => handleClickRecord()}>부여</S.NextBtn>
          {penaltyRecordInfoModal && (
            <PenaltyRecordMenuModal
              modalState={penaltyRecordInfoModal}
              setModalState={setPenaltyRecordInfoModal}
              handleDelete={handleDelete}
            />
          )}
        </S.BtnWrapper>
      </S.PenaltyRecordModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyRecordModal;

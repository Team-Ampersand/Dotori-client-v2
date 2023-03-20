import * as S from './style';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { ModalProps } from 'types';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import PenaltyListModalItem from 'components/Penalty/atoms/PenaltyListModalItem';

const PenaltyListModal = ({ modalState, setModalState }: ModalProps) => {
  const penaltyOBG = [
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
    {
      name: '타호실 출입',
      date: '2022-04-17',
    },
  ];

  return (
    <ModalOverayWrapper isClick={modalState}>
      <S.PenaltyListModalWrapper itemCnt={penaltyOBG.length}>
        <ModalHeader name={'규정 위반 내역'} setState={setModalState} />
        <S.PenaltyItems itemCnt={penaltyOBG.length}>
          {penaltyOBG.map((i, idx) => (
            <PenaltyListModalItem key={idx} name={i.name} createDate={i.date}  />
          ))}
        </S.PenaltyItems>
        <S.PenaltyModalBtn onClick={() => setModalState(false)}>
          확인
        </S.PenaltyModalBtn>
      </S.PenaltyListModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyListModal;

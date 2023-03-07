import * as S from './style';
import { ModalOverayWrapper } from 'components/Home/atoms/Wrapper/style';
import { PenaltyModalState } from 'types';
import ModalHeader from 'components/Home/atoms/ModalHeader';
import PenaltyListModalItem from 'components/Penalty/atoms/PenaltyListModalItem';

const PenaltyListModal = ({ modal, setModal }: PenaltyModalState) => {
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
    <ModalOverayWrapper isClick={modal}>
      <S.PenaltyListModalWrapper itemCnt={penaltyOBG.length}>
        <ModalHeader name={'규정 위반 내역'} setState={setModal} />
        <S.PenaltyItems itemCnt={penaltyOBG.length}>
          {penaltyOBG.map((i, idx) => (
            <PenaltyListModalItem key={idx} name={i.name} date={i.date} />
          ))}
        </S.PenaltyItems>
        <S.PenaltyModalBtn onClick={() => setModal(false)}>
          확인
        </S.PenaltyModalBtn>
      </S.PenaltyListModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyListModal;

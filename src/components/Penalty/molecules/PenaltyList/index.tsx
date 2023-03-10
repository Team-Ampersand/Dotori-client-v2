import * as S from './style';
import PenaltyItem from 'components/Penalty/atoms/PenaltyItem';
import PenaltyListModal from '../PenaltyListModal';
import PenaltyRecordModal from '../PenaltyRecordModal';
import { useState } from 'react';
import { ModalProps } from 'types';

const PenaltyList = ({ modalState, setModalState }: ModalProps) => {
  const userOBJ = [
    {
      id: 1,
      memberName: '선민재',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '조재영',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '박영재',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '강경민',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '김준',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '전승원',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '손정민',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '김시훈',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '유환빈',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
    {
      id: 1,
      memberName: '이름',
      gender: 'MAN',
      stuNum: '2215',
      ruleBigViolationList: ['', '', ''],
    },
  ];
  const [penaltyListModal, setPenaltyListModal] = useState(false);

  return (
    <S.PenaltyListWrapper>
      {userOBJ &&
        userOBJ.map((i, idx) => (
          <PenaltyItem
            key={idx}
            setPenaltyListModal={setPenaltyListModal}
            setPenaltyRecordModal={setModalState}
            name={i.memberName}
            gender={i.gender}
            number={i.stuNum}
            ruleBigViolationList={i.ruleBigViolationList}
          />
        ))}
      {penaltyListModal && (
        <PenaltyListModal
          modalState={penaltyListModal}
          setModalState={setPenaltyListModal}
        />
      )}
      {modalState && (
        <PenaltyRecordModal
          modalState={modalState}
          setModalState={setModalState}
        />
      )}
    </S.PenaltyListWrapper>
  );
};

export default PenaltyList;

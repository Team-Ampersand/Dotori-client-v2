import * as S from './style';
import PenaltyItem from 'components/Penalty/atoms/PenaltyItem';
import PenaltyListModal from '../PenaltyListModal';
import PenaltyRecordModal from '../PenaltyRecordModal';
import { useRecoilState } from 'recoil';
import {
  penaltyList,
  penaltyListModalState,
  penaltyRecordModalState,
} from 'recoilAtoms/recoilAtomContainer';
const PenaltyList = () => {
  const penaltyListModal = useRecoilState(penaltyListModalState);
  const penaltyRecordModal = useRecoilState(penaltyRecordModalState);
  const [penaltyOBJ] = useRecoilState(penaltyList);

  return (
    <S.PenaltyListWrapper>
      {penaltyOBJ &&
        penaltyOBJ.map((i, idx) => (
          <PenaltyItem
            key={idx}
            name={i.memberName}
            gender={i.gender}
            number={i.stuNum}
            ruleList={i.rule}
          />
        ))}
      {penaltyListModal && <PenaltyListModal />}
      {penaltyRecordModal && <PenaltyRecordModal />}
    </S.PenaltyListWrapper>
  );
};

export default PenaltyList;

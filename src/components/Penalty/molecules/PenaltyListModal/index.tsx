import * as S from './style';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import PenaltyListModalItem from 'components/Penalty/atoms/PenaltyListModalItem';
import {
  penaltyRuleList,
  penaltyListModalState,
} from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { returnPenaltyValuesKorean } from 'utils/Libs/returnPenaltyValues';

const PenaltyListModal = () => {
  const [penaltyListModal, setPenaltyListModal] = useRecoilState(
    penaltyListModalState
  );
  const ruleList = useRecoilState(penaltyRuleList);

  return (
    <ModalOverayWrapper isClick={penaltyListModal}>
      <S.PenaltyListModalWrapper itemCnt={ruleList[0]?.length}>
        <ModalHeader name={'규정 위반 내역'} setState={setPenaltyListModal} />
        <S.PenaltyItems itemCnt={ruleList[0]?.length}>
          {ruleList[0] && ruleList[0].length > 0 ? (
            ruleList[0].map((i, idx) => (
              <PenaltyListModalItem
                key={idx}
                id={i.id}
                createdDate={i.createdDate}
                rule={returnPenaltyValuesKorean[i.rule]}
              />
            ))
          ) : (
            <S.NullPenalty>규정위반 내역이 없습니다</S.NullPenalty>
          )}
        </S.PenaltyItems>
        <S.PenaltyModalBtn onClick={() => setPenaltyListModal(false)}>
          확인
        </S.PenaltyModalBtn>
      </S.PenaltyListModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyListModal;

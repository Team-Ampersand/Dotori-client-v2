import ModalHeader from 'components/Common/atoms/ModalHeader';
import PenaltyItem from 'components/Home/atoms/PenaltyItem';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { PenaltyListType } from 'types';
import * as S from './style';
import useSWR from 'swr';
import { penaltyController } from 'utils/Libs/requestUrls';
import { penaltyModalState } from 'recoilAtoms/recoilAtomContainer';
import { useRecoilState } from 'recoil';
import { returnPenaltyValuesKorean } from 'assets/data/PenaltyValuesData';

const PenaltyModal = ({ role }: { role: string }) => {
  const [penaltyModal, setPenaltyModal] = useRecoilState(penaltyModalState);
  const { data } = useSWR<PenaltyListType>(penaltyController.strRule(role));
  return (
    <ModalOverayWrapper
      isClick={penaltyModal}
      onClick={() => setPenaltyModal(false)}
    >
      <S.PenaltyModalWrapper onClick={(e) => e.stopPropagation()}>
        <ModalHeader name={'규정 위반 내역'} setState={setPenaltyModal} />
        <S.PenaltyItems>
          {data?.rules && data.rules.length > 0 ? (
            data.rules?.map((i) => (
              <PenaltyItem
                rule={returnPenaltyValuesKorean[i.rule]}
                createdDate={i.createdDate}
                id={i.id}
                key={i.id}
              />
            ))
          ) : (
            <S.NullPenalty>규정위반 내역이 없습니다</S.NullPenalty>
          )}
        </S.PenaltyItems>
        <S.PenaltyModalBtn onClick={() => setPenaltyModal(false)}>
          확인
        </S.PenaltyModalBtn>
      </S.PenaltyModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyModal;

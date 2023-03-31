import { PenaltyRuleItemProps } from 'types';
import { dateRegex } from 'utils/dateRegex';
import * as S from './style';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import CommonDelModal from 'components/Common/molecules/CommonCheckModal';
import { deletePenatly, getPenaltyRule } from 'api/penalty';
import { getRole } from 'utils/Libs/getRole';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mutate } from 'swr';
import { penaltyController } from 'utils/Libs/requestUrls';
import { useState } from 'react';
import {
  penaltyRuleList,
  penaltyStuNumber,
} from 'recoilAtoms/recoilAtomContainer';
const PenaltyListModalItem = ({
  id,
  rule,
  createdDate,
}: PenaltyRuleItemProps) => {
  const role = getRole();
  const [penaltyDelModal, setPenaltyDelModal] = useState(false);
  const [penaltyStuNum] = useRecoilState(penaltyStuNumber);
  const setRuleList = useSetRecoilState(penaltyRuleList);

  const onClickDel = async () => {
    setPenaltyDelModal(false);
    await deletePenatly(role, id).then(async () => {
      mutate(penaltyController.strRule(role));
      await getPenaltyRule(role, penaltyStuNum).then((res) => {
        setRuleList(res?.data.rules);
      });
    });
  };

  return (
    <>
      <S.PenaltyListModalItemWrapper>
        <span>{rule}</span>
        <div>
          <S.PenaltyListModalItemDate>
            {dateRegex(createdDate)}
          </S.PenaltyListModalItemDate>
          <TrashcanIcon onClick={() => setPenaltyDelModal(true)} />
        </div>
      </S.PenaltyListModalItemWrapper>
      {penaltyDelModal && (
        <CommonDelModal
          modalState={penaltyDelModal}
          setModalState={setPenaltyDelModal}
          title={'규정 위반 내역 삭제'}
          content={`'${rule}' 위반 내역을 삭제 하시겠습니까?`}
          onClick={onClickDel}
        />
      )}
    </>
  );
};

export default PenaltyListModalItem;

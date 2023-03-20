import { PenaltyItemType } from 'types';
import { dateRegex } from 'utils/dateRegex';
import * as S from './style';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import { useState } from 'react';
import CommonDelModal from 'components/Common/molecules/CommonCheckModal';

const PenaltyListModalItem = ({ name, createDate }: PenaltyItemType) => {
  const [penaltyDelModal, setPenaltyDelModal] = useState(false);

  const onClick = () => {};

  return (
    <>
      <S.PenaltyListModalItemWrapper>
        <span>{name}</span>
        <div>
          <S.PenaltyListModalItemDate>
            {dateRegex(createDate)}
          </S.PenaltyListModalItemDate>
          <TrashcanIcon onClick={() => setPenaltyDelModal(true)} />
        </div>
      </S.PenaltyListModalItemWrapper>
      {penaltyDelModal && (
        <CommonDelModal
          modalState={penaltyDelModal}
          setModalState={setPenaltyDelModal}
          title={'규정 위반 내역 삭제'}
          content={`'${name}' 위반 내역을 삭제 하시겠습니까?`}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default PenaltyListModalItem;

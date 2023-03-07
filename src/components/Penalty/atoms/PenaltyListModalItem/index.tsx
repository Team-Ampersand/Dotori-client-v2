import { PenaltyItemType } from 'types';
import { dateRegex } from 'utils/dateRegex';
import * as S from './style';
import TrashcanIcon from 'assets/svg/TrashcanIcon';
import { useState } from 'react';
import PenaltyDelModal from '../PenaltyDelModal';

const PenaltyListModalItem = ({ name, date }: PenaltyItemType) => {
  const [penaltyDelModal, setPenaltyDelModal] = useState(false);

  return (
    <>
      <S.PenaltyListModalItemWrapper>
        <span>{name}</span>
        <div>
          <S.PenaltyListModalItemDate>
            {dateRegex(date)}
          </S.PenaltyListModalItemDate>
          <TrashcanIcon onClick={() => setPenaltyDelModal(true)} />
        </div>
      </S.PenaltyListModalItemWrapper>
      {penaltyDelModal && (
        <PenaltyDelModal
          modal={penaltyDelModal}
          setModal={setPenaltyDelModal}
          penaltyName={name}
        />
      )}
    </>
  );
};

export default PenaltyListModalItem;

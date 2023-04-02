import { PenaltyItemType } from 'types';
import { dateRegex } from 'utils/dateRegex';
import * as S from './style';

const PenaltyItem = ({ rule, createdDate }: PenaltyItemType) => {
  return (
    <S.PenaltyItemWrapper>
      <span>{rule}</span>
      <S.PenaltyItemDate>{dateRegex(createdDate)}</S.PenaltyItemDate>
    </S.PenaltyItemWrapper>
  );
};

export default PenaltyItem;

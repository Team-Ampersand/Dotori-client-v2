import * as S from './Style';
import PenaltyCheck from '../PenaltyCheck';
import {
  DefaultProfile,
  MaleIcon,
  FemaleIcon,
  ExclamationMark,
  PlusIcon,
} from 'assets/svg';
import { PenaltyItemProps } from 'types';

const PenaltyItem = ({
  setPenaltyListModal,
  setPenaltyRecordModal,
  name,
  gender,
  number,
  ruleBigViolationList,
}: PenaltyItemProps) => {
  return (
    <S.PenaltyItemWrappter>
      <S.StuInfoWrapper>
        <PenaltyCheck name={name} />
        <S.Profile>
          <DefaultProfile />
        </S.Profile>
        <S.StuInfo>
          <S.Name>{name}</S.Name>
          <S.StuNum>
            {number}
            {gender === 'MAN' ? <MaleIcon /> : <FemaleIcon />}
          </S.StuNum>
        </S.StuInfo>
      </S.StuInfoWrapper>
      <S.RuleViolationList>
        전자기기 소지, 반입 - 사행성기구외 2개
      </S.RuleViolationList>
      <S.BtnWrapper>
        <S.RuleViolationListBtn onClick={() => setPenaltyListModal(true)}>
          <ExclamationMark />
        </S.RuleViolationListBtn>
        <S.PenaltyAddBtn onClick={() => setPenaltyRecordModal(true)}>
          <PlusIcon />
        </S.PenaltyAddBtn>
      </S.BtnWrapper>
    </S.PenaltyItemWrappter>
  );
};

export default PenaltyItem;

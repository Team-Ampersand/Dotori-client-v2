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
import { getRole } from 'utils/Libs/getRole';
import { useSetRecoilState } from 'recoil';
import {
  penaltyRuleList,
  penaltyListModalState,
  penaltyRecordModalState,
  penaltyStudent,
  penaltyStuNumber,
} from 'recoilAtoms/recoilAtomContainer';
import { getPenaltyRule } from 'api/penalty';
import { returnPenaltyValuesKorean } from 'utils/Libs/returnPenaltyValues';

const PenaltyItem = ({ name, gender, number, ruleList }: PenaltyItemProps) => {
  const role = getRole();
  const setPenaltyStu = useSetRecoilState(penaltyStudent);
  const setPenaltyListModal = useSetRecoilState(penaltyListModalState);
  const setPenaltyRecordModal = useSetRecoilState(penaltyRecordModalState);
  const setRuleList = useSetRecoilState(penaltyRuleList);
  const setStuNum = useSetRecoilState(penaltyStuNumber);
  const list = ruleList.map((i) => returnPenaltyValuesKorean[i]);

  const getPenaltyRuleList = async () => {
    setStuNum(number);
    await getPenaltyRule(role, number).then((res) => {
      setRuleList(res?.data.rules);
    });
  };
  const handelRuleListClick = async () => {
    getPenaltyRuleList();
    setPenaltyListModal(true);
  };
  const handelRecordClick = () => {
    setPenaltyStu([{ name: name, stuNum: number }]);
    setPenaltyRecordModal(true);
  };

  return (
    <>
      <S.PenaltyItemWrappter>
        <S.StuInfoWrapper>
          <PenaltyCheck name={name} stuNum={number} />
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
          {list.length < 3
            ? list.join(', ')
            : list.slice(0, 2).join(', ') + ` 외 ${list.length - 2}개`}
        </S.RuleViolationList>
        <S.BtnWrapper>
          <S.RuleViolationListBtn onClick={handelRuleListClick}>
            <ExclamationMark />
          </S.RuleViolationListBtn>
          <S.PenaltyRecordBtn onClick={handelRecordClick}>
            <PlusIcon />
          </S.PenaltyRecordBtn>
        </S.BtnWrapper>
      </S.PenaltyItemWrappter>
    </>
  );
};

export default PenaltyItem;

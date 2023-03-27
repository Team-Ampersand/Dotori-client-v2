import * as S from './style';
import {
  BronzeMedalIcon,
  DefaultProfile,
  FemaleIcon,
  GoldMedalIcon,
  MaleIcon,
  SilverMedalIcon,
  StampIcon,
} from 'assets/svg';
import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';
import { ApplicationItemProps } from 'types';
import { useRecoilState } from 'recoil';
import { selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { getRole } from 'utils/Libs/getRole';

const ApplicationItem = ({
  id,
  rank,
  selfStudyCheck,
  memberName,
  gender,
  stuNum,
  listType,
}: ApplicationItemProps) => {
  const role = getRole();
  const [lookUp, setLookUp] = useRecoilState(selfStudyLookup);

  return (
    <S.ApplicationItemWrapper>
      <S.Number>{rank}</S.Number>
      {listType === 'selfstudy' && (
        <>
          {!lookUp && (
            <S.Medal>
              {rank === 1 && <GoldMedalIcon />}
              {rank === 2 && <SilverMedalIcon />}
              {rank === 3 && <BronzeMedalIcon />}
              {rank === 50 && <StampIcon />}
            </S.Medal>
          )}
          {role !== 'member' && (
            <S.Checkbox>
              <SelfstudyCheck
                role={role}
                memberId={id}
                checked={selfStudyCheck}
              />
            </S.Checkbox>
          )}
        </>
      )}
      <S.Profile>
        <DefaultProfile />
      </S.Profile>
      <S.StuInfo>
        <S.Name>
          {memberName}
          {gender === 'MAN' ? <MaleIcon /> : <FemaleIcon />}
        </S.Name>
        <S.StuNum>{stuNum}</S.StuNum>
      </S.StuInfo>
    </S.ApplicationItemWrapper>
  );
};

export default ApplicationItem;

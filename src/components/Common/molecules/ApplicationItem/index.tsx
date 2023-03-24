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
  index,
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
      <S.Number>{index + 1}</S.Number>
      {listType === 'selfstudy' && (
        <>
          {!lookUp && (
            <S.Medal>
              {index === 0 && <GoldMedalIcon />}
              {index === 1 && <SilverMedalIcon />}
              {index === 2 && <BronzeMedalIcon />}
              {index === 49 && <StampIcon />}
            </S.Medal>
          )}
          {role !== 'member' && (
            <S.Checkbox>
              <SelfstudyCheck
                role={role}
                stuNum={stuNum}
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

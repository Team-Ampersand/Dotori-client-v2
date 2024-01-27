import * as S from './style';
import { DefaultProfile, FemaleIcon, MaleIcon, StampIcon } from 'assets/svg';
import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';
import { ApplicationItemProps } from 'types';
import { useRecoilValue } from 'recoil';
import { selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { getRole } from 'utils/Libs/getRole';
import Image from 'next/image';
import Goldmedal from 'assets/png/GoldMedalIcon.png';
import Silvermedal from 'assets/png/SilverMedalIcon.png';
import BronzeMedal from 'assets/png/BronzeMedalIcon.png';
import { ProfileImage } from 'components/Home/organisms/Profile/style';

const ApplicationItem = ({
  id,
  rank,
  selfStudyCheck,
  memberName,
  gender,
  stuNum,
  listType,
  lastRank,
  profileImage,
}: ApplicationItemProps) => {
  const role = getRole();
  const lookUp = useRecoilValue(selfStudyLookup);

  return (
    <S.ApplicationItemWrapper>
      <S.Number>{rank}</S.Number>
      {listType === 'selfstudy' && (
        <>
          {!lookUp && (
            <S.Medal>
              {rank === 1 && (
                <Image
                  src={Goldmedal}
                  alt="goldmedal"
                  priority
                  width={44}
                  height={64}
                />
              )}
              {rank === 2 && (
                <Image
                  src={Silvermedal}
                  alt="Silvermedal"
                  priority
                  width={44}
                  height={64}
                />
              )}
              {rank === 3 && (
                <Image
                  src={BronzeMedal}
                  alt="BronzeMedal"
                  priority
                  width={44}
                  height={64}
                />
              )}
              {rank === lastRank && <StampIcon />}
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
        {profileImage ? <ProfileImage image={profileImage} /> : <DefaultProfile />}
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

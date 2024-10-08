import { DefaultProfile, FemaleIcon, MaleIcon, StampIcon } from 'assets/svg';
import SelfstudyCheck from 'components/SelfStudy/atoms/SelfstudyCheck/SelfstudyCheck';
import { ProfileImage } from 'components/Home/organisms/Profile/style';
import { ApplicationItemProps } from 'types';
import { useRecoilValue } from 'recoil';
import { selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { getRole } from 'utils/Libs/getRole';
import Image from 'next/image';
import GoldMedal from 'assets/png/GoldMedalIcon.png';
import SilverMedal from 'assets/png/SilverMedalIcon.png';
import BronzeMedal from 'assets/png/BronzeMedalIcon.png';
import * as S from './style';

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
  const rankImages = [GoldMedal, SilverMedal, BronzeMedal];
  return (
    <S.ApplicationItemWrapper>
      <S.Number>{rank}</S.Number>
      {listType === 'selfstudy' && (
        <>
          {!lookUp && (
            <S.Medal>
              {rank && rank <= 3 && (
                <Image
                  src={rankImages[rank - 1]}
                  alt="RankImage"
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
        {profileImage ? (
          <ProfileImage image={profileImage} />
        ) : (
          <DefaultProfile />
        )}
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

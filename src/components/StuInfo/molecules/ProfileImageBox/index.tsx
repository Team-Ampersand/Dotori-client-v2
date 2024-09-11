import { CircleDefaultProfile } from 'assets/svg';
import * as S from './style';

interface Props {
  profileImage: string | null;
  memberName: string;
}

const ProfileImageBox = ({ profileImage, memberName }: Props) => {
  return (
    <S.LeftBox>
      {profileImage ? (
        <S.ImgBox image={profileImage} />
      ) : (
        <CircleDefaultProfile />
      )}
      <p>{memberName}</p>
    </S.LeftBox>
  );
};

export default ProfileImageBox;

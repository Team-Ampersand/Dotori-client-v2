import { preventEvent } from 'utils/Libs/preventEvent';
import { HeartIcon, TrashcanIcon } from 'assets/svg';
import * as S from './style';

interface MusicListButtonProps {
  role: string;
  songStuNum: number;
  userStuNum?: string;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  heartState: boolean;
  setHeartState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicListButton = ({
  role,
  songStuNum,
  userStuNum,
  setDeleteModal,
  heartState,
  setHeartState,
}: MusicListButtonProps) => {
  const handleHeart = (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    setHeartState(!heartState);
  };

  return (
    <S.ButtonContainer>
      <S.ButtonTestContainer>
        {(role !== 'member' || String(songStuNum) === userStuNum) && (
          <S.ButtonStyle
            onClick={(e) => {
              preventEvent(e);
              setDeleteModal(true);
            }}
          >
            <TrashcanIcon />
          </S.ButtonStyle>
        )}
        <S.LikeContainer onClick={handleHeart}>
          <S.ButtonStyle>
            <HeartIcon heartState={heartState} />
          </S.ButtonStyle>
          <S.LikeNum>39</S.LikeNum>
        </S.LikeContainer>
      </S.ButtonTestContainer>
    </S.ButtonContainer>
  );
};

export default MusicListButton;

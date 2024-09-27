import { preventEvent } from 'utils/Libs/preventEvent';
import { HeartIcon, TrashcanIcon } from 'assets/svg';
import { likeMusic } from 'api/music';
import { toast } from 'react-toastify';
import * as S from './style';

interface MusicListButtonProps {
  role: string;
  songStuNum: number;
  userStuNum?: string;
  setDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
  heartState: boolean;
  setHeartState: React.Dispatch<React.SetStateAction<boolean>>;
  musicId: number;
  likeCount: number;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}

const MusicListButton = ({
  role,
  songStuNum,
  userStuNum,
  setDeleteModal,
  heartState,
  setHeartState,
  musicId,
  likeCount,
  setLikeCount,
}: MusicListButtonProps) => {
  const handleHeart = async (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    try {
      const data = await likeMusic({ role, musicId });
      setLikeCount(data.likeCount);
      setHeartState(!heartState);
    } catch (error) {
      console.error('Error liking music:', error);
      toast.error('음악을 찾지 못했습니다');
    }
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
          <S.LikeNum>{likeCount}</S.LikeNum>
        </S.LikeContainer>
      </S.ButtonTestContainer>
    </S.ButtonContainer>
  );
};

export default MusicListButton;

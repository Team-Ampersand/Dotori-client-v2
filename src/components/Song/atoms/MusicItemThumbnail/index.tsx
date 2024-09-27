import Image from 'next/image';
import { preventEvent } from 'utils/Libs/preventEvent';
import { likeMusic } from 'api/music';
import { HeartIcon } from 'assets/svg';
import { toast } from 'react-toastify';
import * as S from './style';

interface MusicItemThumbnailProps {
  thumbnail: string;
  heartState: boolean;
  setHeartState: React.Dispatch<React.SetStateAction<boolean>>;
  musicId: number;
  role: string;
  setLikeCount: React.Dispatch<React.SetStateAction<number>>;
}

const MusicItemThumbnail = ({
  thumbnail,
  heartState,
  setHeartState,
  musicId,
  role,
  setLikeCount,
}: MusicItemThumbnailProps) => {
  const handleHeart = async (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    try {
      const data = await likeMusic(role, musicId);
      setLikeCount(data.likeCount);
      setHeartState(!heartState);
    } catch (error) {
      console.error('Error liking music:', error);
      toast.error('음악을 찾지 못했습니다');
    }
  };
  return (
    <div>
      <S.ImgBox>
        <S.HeartContainer onClick={handleHeart}>
          <HeartIcon heartState={heartState} />
        </S.HeartContainer>
        <Image
          src={thumbnail}
          alt="thumbnail"
          layout="fill"
          objectFit="cover"
        />
      </S.ImgBox>
    </div>
  );
};

export default MusicItemThumbnail;

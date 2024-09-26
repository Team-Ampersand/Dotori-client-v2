import Image from 'next/image';
import { preventEvent } from 'utils/Libs/preventEvent';
import { likeMusic } from 'api/music';
import { HeartIcon } from 'assets/svg';
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
    await likeMusic(role, musicId, heartState, setHeartState, setLikeCount);
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

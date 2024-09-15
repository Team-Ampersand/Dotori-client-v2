import Image from 'next/image';
import { preventEvent } from 'utils/Libs/preventEvent';
import * as S from './style';
import { HeartIcon } from 'assets/svg';

interface MusicItemThumbnailProps {
  thumbnail: string;
  heartState: boolean;
  setHeartState: React.Dispatch<React.SetStateAction<boolean>>;
}

const MusicItemThumbnail = ({
  thumbnail,
  heartState,
  setHeartState,
}: MusicItemThumbnailProps) => {
  const handleHeart = (e: React.MouseEvent<HTMLDivElement>) => {
    preventEvent(e);
    setHeartState(!heartState);
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

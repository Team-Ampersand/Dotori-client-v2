import Image from 'next/image';
import * as S from './style';

const MusicItemThumbnail = ({ thumbnail }: { thumbnail: string }) => {
  return (
    <S.ImgBox>
      <Image src={thumbnail} alt="thumbnail" layout="fill" objectFit="cover" />
    </S.ImgBox>
  );
};

export default MusicItemThumbnail;

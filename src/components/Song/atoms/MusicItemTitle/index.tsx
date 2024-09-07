import * as S from './style';

interface MusicItemTitleProps {
  title: string;
  stuNum: number;
  username: string;
  songDate: string;
}

const MusicItemTitle = ({
  title,
  stuNum,
  username,
  songDate,
}: MusicItemTitleProps) => {
  return (
    <S.ResponseWrapper>
      <S.Title>{title}</S.Title>
      <S.Info>{`${stuNum} ${username} • ${songDate}`}</S.Info>
    </S.ResponseWrapper>
  );
};

export default MusicItemTitle;

import * as S from './style';

interface MusicTitleProps {
  title: string;
  stuNum: number;
  username: string;
  songDate: string;
}

const MusicTitle = ({ title, stuNum, username, songDate }: MusicTitleProps) => {
  return (
    <S.ResponseWrapper>
      <S.Title>{title}</S.Title>
      <S.Info>{stuNum + ' ' + username + '•' + songDate}</S.Info>
    </S.ResponseWrapper>
  );
};

export default MusicTitle;

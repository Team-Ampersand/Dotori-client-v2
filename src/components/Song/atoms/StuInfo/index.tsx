import * as S from './style';

interface StuInfoProps {
  stuNum: number;
  username: string;
}

const StuInfo = ({ stuNum, username }: StuInfoProps) => {
  return (
    <S.StuInfo>
      <p>{stuNum}</p>
      <p>{username}</p>
    </S.StuInfo>
  );
};

export default StuInfo;

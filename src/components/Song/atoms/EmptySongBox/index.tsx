import { MusicalNoteIcon } from 'assets/svg';
import * as S from './style';

const EmptySongBox = () => {
  return (
    <S.EmptySongBox>
      <MusicalNoteIcon />
      <h2>아직 신청한 음악이 없습니다..</h2>
      <p>오른쪽 위에서 음악 신청을 해보세요!</p>
    </S.EmptySongBox>
  );
};

export default EmptySongBox;

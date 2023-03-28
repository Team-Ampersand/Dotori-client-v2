import CalendarBox from 'components/Common/atoms/Calendar';
import SongForm from 'components/Song/molecules/SongForm';
import * as S from './style';

const SongRightLayer = () => {
  return (
    <S.Layer>
      <SongForm />
      <CalendarBox />
    </S.Layer>
  );
};

export default SongRightLayer;

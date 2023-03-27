import Calendar from 'components/Song/molecules/Calendar';
import SongForm from 'components/Song/molecules/SongForm';
import * as S from './style';

const SongRightLayer = () => {
  return (
    <S.Layer>
      <SongForm />
      <Calendar />
    </S.Layer>
  );
};

export default SongRightLayer;

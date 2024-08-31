import CalendarBox from 'components/Common/atoms/Calendar';
import SongForm from 'components/Song/molecules/SongForm';
import * as S from './style';

type SongRightLayer = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const SongRightLayer: React.FC<SongRightLayer> = ({ selectedDate, setSelectedDate }) => {
  return (
    <S.Layer>
      <SongForm selectedDate={selectedDate} />
      <CalendarBox selectedDate={selectedDate} setSelectedDate={setSelectedDate}  />
    </S.Layer>
  );
};

export default SongRightLayer;

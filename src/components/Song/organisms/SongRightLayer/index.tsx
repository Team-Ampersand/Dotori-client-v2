import CalendarBox from 'components/Common/atoms/Calendar';
import SongForm from 'components/Song/molecules/SongForm';
import * as S from './style';

interface SongRightLayerProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SongRightLayer: React.FC<SongRightLayerProps> = ({
  selectedDate,
  setSelectedDate,
  setModal,
}) => {
  return (
    <S.Layer>
      <SongForm selectedDate={selectedDate} setModal={setModal} />
      <CalendarBox
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </S.Layer>
  );
};

export default SongRightLayer;

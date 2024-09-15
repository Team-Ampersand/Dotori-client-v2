import CalendarBox from 'components/Common/atoms/Calendar';
import SongForm from 'components/Song/molecules/SongForm';
import * as S from './style';

interface SongRightLayerProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  setNoticeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SongRightLayer = ({
  selectedDate,
  setSelectedDate,
  setNoticeModal,
}: SongRightLayerProps) => {
  return (
    <S.Layer>
      <SongForm selectedDate={selectedDate} setNoticeModal={setNoticeModal} />
      <CalendarBox
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
    </S.Layer>
  );
};

export default SongRightLayer;

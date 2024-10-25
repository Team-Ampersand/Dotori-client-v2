import SongForm from 'components/Song/molecules/SongForm';
import dynamic from 'next/dynamic';
import * as S from './style';

const Calendar = dynamic(() => import('components/Common/atoms/Calendar'), {
  ssr: false,
});

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
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
    </S.Layer>
  );
};

export default SongRightLayer;

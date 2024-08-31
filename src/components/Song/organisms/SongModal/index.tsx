import CalendarBox from 'components/Common/atoms/Calendar';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import SongForm from 'components/Song/molecules/SongForm';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  calendarModalState,
  filterModal,
} from 'recoilAtoms/recoilAtomContainer';

type SongModalProps = {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
};

const SongModal: React.FC<SongModalProps> = ({
  selectedDate,
  setSelectedDate,
}) => {
  const [modal, setModal] = useRecoilState(filterModal);
  const calendarModal = useRecoilValue(calendarModalState);

  useEffect(() => {
    addEventListener('resize', (e: any) => {
      if (e.target.innerWidth >= 950) setModal(false);
    });
  }, []);

  return (
    <ResponseOverayWrapper
      isClick={modal}
      onClick={() => {
        setModal(false);
      }}
    >
      <div onClick={(e) => e.stopPropagation()}>
        {modal &&
          (calendarModal ? (
            <CalendarBox
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
            />
          ) : (
            <SongForm selectedDate={selectedDate} />
          ))}
      </div>
    </ResponseOverayWrapper>
  );
};

export default SongModal;

import CalendarBox from 'components/Common/atoms/Calendar';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import SongForm from 'components/Song/molecules/SongForm';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  calendarModalState,
  filterModal,
} from 'recoilAtoms/recoilAtomContainer';

const SongModal = () => {
  const [modal, setModal] = useRecoilState(filterModal);
  const calendarModal = useRecoilValue(calendarModalState);

  useEffect(() => {
    addEventListener('resize', (e: any) => {
      console.log(e.target?.innerWidth);
      if (e.target.innerWidth >= 950) setModal(false);
    });
  }, []);

  return (
    <ResponseOverayWrapper
      isClick={modal}
      onClick={(e) => {
        setModal(false);
        e.stopPropagation();
      }}
    >
      {modal && (calendarModal ? <CalendarBox /> : <SongForm />)}
    </ResponseOverayWrapper>
  );
};

export default SongModal;

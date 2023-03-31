import { XtextIcon } from 'assets/svg';
import Calendar from 'react-calendar';
import { useRecoilState } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const CalendarBox = ({ setModal }: { setModal?: (state: boolean) => void }) => {
  const [date, setDate] = useRecoilState(selectedDate);
  return (
    <S.Layer>
      {setModal && (
        <S.XIcon onClick={() => setModal(false)}>
          <XtextIcon />
        </S.XIcon>
      )}
      <Calendar
        value={date}
        onChange={(value) => {
          if (!(value instanceof Date)) return;
          setDate(value);
        }}
        locale="ko"
        formatDay={(_locale, date) =>
          date.toLocaleString('en', { day: 'numeric' })
        }
      />
    </S.Layer>
  );
};

export default CalendarBox;

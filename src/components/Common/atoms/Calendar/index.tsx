import { XtextIcon } from 'assets/svg';
import UseToggleTheme from 'hooks/useToggleTheme';
import Calendar from 'react-calendar';
import { useRecoilState } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const CalendarBox = ({ setModal }: { setModal?: (state: boolean) => void }) => {
  const [date, setDate] = useRecoilState(selectedDate);
  const [theme] = UseToggleTheme();

  return (
    <S.Layer state={theme} onClick={(e) => e.stopPropagation()}>
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
        calendarType="US"
      />
    </S.Layer>
  );
};

export default CalendarBox;

import Calendar from 'react-calendar';
import { useRecoilState } from 'recoil';
import { selectedDate } from 'recoilAtoms/recoilAtomContainer';
import * as S from './style';

const CalendarBox = () => {
  const [date, setDate] = useRecoilState(selectedDate);
  return (
    <S.Layer>
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

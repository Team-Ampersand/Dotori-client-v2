import Calendar from 'react-calendar';
import UseToggleTheme from 'hooks/useToggleTheme';
import { XtextIcon } from 'assets/svg';
import * as S from './style';

interface CalendarBoxProps {
  selectedDate?: Date;
  setSelectedDate?: React.Dispatch<React.SetStateAction<Date>>;
  setModal?: (state: boolean) => void;
}

const CalendarBox = ({
  selectedDate,
  setSelectedDate,
  setModal,
}: CalendarBoxProps) => {
  const [theme] = UseToggleTheme();

  return (
    <S.Layer state={theme} onClick={(e) => e.stopPropagation()}>
      {setModal && (
        <S.XIcon onClick={() => setModal(false)}>
          <XtextIcon />
        </S.XIcon>
      )}
      <Calendar
        value={selectedDate}
        activeStartDate={selectedDate}
        onChange={(value) => {
          if (!(value instanceof Date)) return;
          setSelectedDate?.(value);
        }}
        onActiveStartDateChange={({ value }) => {
          if (!(value instanceof Date)) return;
          setSelectedDate?.(value);
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

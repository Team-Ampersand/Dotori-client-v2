import { LeftChevron, RightChevron } from 'assets/svg';
import axios from 'axios';
import UseToggleTheme from 'hooks/useToggleTheme';
import { useEffect, useState } from 'react';
import { getDate } from 'utils/getDate';
import * as S from './style';
import { MealResponse, MealInfo } from 'types/Meal';

const returnMealdata = async (
  datestr: string,
  setList: (list: string[]) => void,
  setMealRes: (data: MealResponse) => void
) => {
  const { data } = await axios.get(`/neis/meal/${datestr}`);
  try {
    setMealRes(data);
  } catch (e: any) {
    setList([]);
  }
};

const returnMealcode = (hours: number) => {
  if (hours >= 19 || (hours < 8 && hours >= 0)) {
    return 0;
  } else if (hours >= 8 && hours < 13) {
    return 1;
  } else {
    return 2;
  }
};

const MealBoard = () => {
  const [year, month, day, hour] = getDate();
  const [mealCode, setMealCode] = useState(returnMealcode(Number(hour)));
  const [currentDate] = useState(new Date(`${year}-${month}-${day}`));
  const [mealRes, setMealRes] = useState<MealResponse | null>(null);
  const [list, setList] = useState<string[]>([]);
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  const mealHourArr = ['조식', '중식', '석식'];
  const [theme] = UseToggleTheme();

  const getDateStr = (myDate: Date) => {
    const month = String(myDate.getMonth() + 1).padStart(2, '0');
    const day = String(myDate.getDate()).padStart(2, '0');
    return myDate.getFullYear() + month + day;
  };

  const returnMealDate = () => {
    if (Number(hour) >= 19) {
      currentDate.setDate(currentDate.getDate() + 1);
      return { datestr: getDateStr(currentDate), day: currentDate.getDay() };
    } else {
      return { datestr: getDateStr(currentDate), day: currentDate.getDay() };
    }
  };

  const [date, setDate] = useState<{ datestr: string; day: number }>(
    returnMealDate
  );

  useEffect(() => {
    returnMealdata(date.datestr, setList, setMealRes);
  }, [date]);

  useEffect(() => {
    if (mealRes) {
      const row: MealInfo[] = mealRes.mealServiceDietInfo?.[1]?.row || [];
      const result = row.find((meal) => {
        const mealTime = Number(meal.MMEAL_SC_CODE);
        return (
          (mealTime === 1 && mealCode === 0) ||
          (mealTime === 2 && mealCode === 1) ||
          (mealTime === 3 && mealCode === 2)
        );
      });
      const mealList =
        result?.DDISH_NM?.toString()
          .replace(/\([ㄱ-ㅎㅏ-ㅣ가-힣a-zA-Z0-9.]*\)|[*<br/>a-z.() ]/g, '`')
          .split('`')
          .filter((value: string) => value !== '') || [];
      setList(mealList);
    }
  }, [mealRes, mealCode]);

  const nextPrevDay = (n: number) => {
    currentDate.setDate(currentDate.getDate() + n);
    setDate({ datestr: getDateStr(currentDate), day: currentDate.getDay() });
  };

  return (
    <S.MealBoardWrapper>
      <S.MealHeader>
        <span>급식</span>
        <S.ControlDate>
          <button onClick={() => nextPrevDay(-1)}>
            <LeftChevron />
          </button>
          <span>
            {`${date.datestr.slice(0, 4)}.${date.datestr.slice(
              4,
              6
            )}.${date.datestr.slice(6)} (${week[date.day]})`}
          </span>
          <button onClick={() => nextPrevDay(+1)}>
            <RightChevron />
          </button>
        </S.ControlDate>
      </S.MealHeader>
      <S.HourMealChooseBox>
        {mealHourArr.map((i, idx) => (
          <div key={idx} onClick={() => setMealCode(idx)}>
            {i}
          </div>
        ))}
        <S.SelectBtn
          theme={theme}
          style={{ left: `${mealCode * 11 * 3 + 1}%` }}
        >
          {mealHourArr[mealCode]}
        </S.SelectBtn>
      </S.HourMealChooseBox>
      <S.MealList>
        {list && list.length > 0 ? (
          list.map((item: string, idx) => <S.Meal key={idx}>{item}</S.Meal>)
        ) : (
          <S.Meal>급식이 없습니다</S.Meal>
        )}
      </S.MealList>
    </S.MealBoardWrapper>
  );
};

export default MealBoard;

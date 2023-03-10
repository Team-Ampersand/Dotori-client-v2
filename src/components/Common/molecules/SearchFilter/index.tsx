import * as S from './style';
import { SearchIcon } from 'assets/svg';
import { useState } from 'react';
import FilterItem from 'components/Common/atoms/Items/FilterItem';
import { SearchFilterTypeProps } from 'types';
import { FilterMenuData } from 'assets/data/FilterMenuData';
import UseToggleTheme from 'hooks/useToggleTheme';

const SearchFilter = ({ filterType }: SearchFilterTypeProps) => {
  const [theme] = UseToggleTheme();
  const [name, setName] = useState('');
  const [filterState, setFilterState] = useState(['', '', '', '', '']);

  const filterReset = () => {
    setName('');
    setFilterState(['', '', '', '', '']);
  };

  const filterChange = (idx: number, value: string) => {
    const copy = [...filterState];
    copy[idx] = value;
    setFilterState(copy);
  };

  return (
    <S.FilterWrapper
      filterType={
        filterType === 'massage'
          ? '2'
          : filterType === 'selfstudy' || filterType === 'penalty'
          ? '3'
          : '5'
      }
    >
      <S.Top>
        <span>필터</span>
        <S.ResetBtn onClick={filterReset}>초기화</S.ResetBtn>
      </S.Top>
      <S.SearchBox>
        <S.Search
          placeholder="이름을 입력해 주세요."
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
        />
        <S.SearchBtn>
          <SearchIcon />
        </S.SearchBtn>
      </S.SearchBox>
      {FilterMenuData.map((i, idx) => (
        <S.Select key={idx} isShow={i.show.includes(filterType)}>
          <span>{i.filterTitle}</span>
          <S.SelectBox darkmode={theme}>
            {i.filterList.map((j, ind) => (
              <FilterItem
                key={ind}
                index={idx}
                name={i.filterTitle}
                item={j}
                value={filterState[idx]}
                onClick={() => filterChange(idx, j)}
              />
            ))}
          </S.SelectBox>
        </S.Select>
      ))}
    </S.FilterWrapper>
  );
};

export default SearchFilter;

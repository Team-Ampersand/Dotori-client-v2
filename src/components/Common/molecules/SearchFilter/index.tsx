import * as S from './style';
import { SearchIcon } from 'assets/svg';
import { useState } from 'react';
import FilterItem from 'components/Common/atoms/Items/FilterItem';
import { SearchFilterTypeProps } from 'types';
import { FilterMenuData } from 'assets/data/FilterMenuData';
import UseToggleTheme from 'hooks/useToggleTheme';
import { useRecoilState } from 'recoil';
import { filterModal, selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { useDidMountEffect } from 'hooks/useDidMountEffect';

const SearchFilter = ({ filterType, onSubmit }: SearchFilterTypeProps) => {
  const [theme] = UseToggleTheme();
  const [name, setName] = useState('');
  const [filterState, setFilterState] = useState<(string | undefined)[]>(
    Array.from({ length: 5 }, () => undefined)
  );
  const [modalState, setModalState] = useRecoilState(filterModal);
  const [, setLookUp] = useRecoilState(selfStudyLookup);

  const handelResetClick = () => {
    setName('');
    setFilterState(Array.from({ length: 5 }, () => undefined));
    setLookUp(false);
  };

  const filterChange = (idx: number, value: string) => {
    value === '남자'
      ? (value = 'MAN')
      : value === '여자'
      ? (value = 'WOMAN')
      : '';
    const copy = [...filterState];
    copy[idx] = value;
    setFilterState(copy);
  };

  useDidMountEffect(() => {
    onSubmit(filterState, name);
  }, [name, filterState]);

  return (
    <>
      <S.FilterWrapper modalState={modalState}>
        <S.Top>
          <span>필터</span>
          <S.ResetBtn onClick={() => handelResetClick()}>초기화</S.ResetBtn>
        </S.Top>
        <S.SearchBox>
          <S.Search
            placeholder="이름을 입력해 주세요."
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setName(e.target.value);
              setLookUp(true);
            }}
          />
          <S.SearchBtn>
            <SearchIcon />
          </S.SearchBtn>
        </S.SearchBox>
        <S.SelectWrapper>
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
                    onClick={() => {
                      filterChange(idx, j);
                      setLookUp(true);
                    }}
                  />
                ))}
              </S.SelectBox>
            </S.Select>
          ))}
        </S.SelectWrapper>
        <S.ApplyBtn
          onClick={() => setModalState(false)}
          modalState={modalState}
        >
          <span>닫기</span>
        </S.ApplyBtn>
      </S.FilterWrapper>
      <ResponseOverayWrapper
        isClick={modalState}
        onClick={() => setModalState(false)}
      />
    </>
  );
};

export default SearchFilter;

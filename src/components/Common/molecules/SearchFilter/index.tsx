import * as S from './style';
import { SearchIcon } from 'assets/svg';
import { useEffect, useState } from 'react';
import FilterItem from 'components/Common/atoms/Items/FilterItem';
import { SearchFilterTypeProps } from 'types';
import { FilterMenuData } from 'assets/data/FilterMenuData';
import UseToggleTheme from 'hooks/useToggleTheme';
import { useRecoilState } from 'recoil';
import {
  filterModal,
  selfStudyList,
  selfStudyLookup,
} from 'recoilAtoms/recoilAtomContainer';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { selfStudySearch } from 'api/selfStudy';
import { getRole } from 'utils/Libs/getRole';

const SearchFilter = ({ filterType }: SearchFilterTypeProps) => {
  const [theme] = UseToggleTheme();
  const [name, setName] = useState('');
  const [filterState, setFilterState] = useState(['', '', '', '', '']);
  const [modalState, setModalState] = useRecoilState(filterModal);
  const [userlist, setUserList] = useRecoilState(selfStudyList);
  // const [lookUp, setLookUp] = useRecoilState(selfStudyLookup);
  // const role = getRole();

  const handelResetClick = () => {
    setName('');
    setFilterState(['', '', '', '', '']);
    // setLookUp(false);
  };

  const filterChange = (idx: number, value: string) => {
    const copy = [...filterState];
    copy[idx] = value;
    setFilterState(copy);
  };

  // const handelSelfstudySearch = async () => {
  //   await selfStudySearch(
  //     name,
  //     filterState[2],
  //     filterState[1],
  //     filterState[0],
  //     '',
  //     null
  //   ).then((res) => setUserList(res?.data));
  // };

  // useEffect(() => {
  //   if (lookUp) handelSelfstudySearch();
  // }, [name, filterState]);

  return (
    <>
      <S.FilterWrapper modalState={modalState}>
        <S.Top>
          <span>필터</span>
          <S.ResetBtn onClick={handelResetClick}>초기화</S.ResetBtn>
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
                      // setLookUp(true);
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

import UseToggleTheme from 'hooks/useToggleTheme';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import AuthInput from 'components/Common/atoms/Inputs/AuthInput';
import FilterItem from 'components/Common/atoms/Items/FilterItem';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterModal, selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { useDidMountEffect } from 'hooks/useDidMountEffect';
import { SearchFilterTypeProps } from 'types';
import { FilterMenuData } from 'assets/data/FilterMenuData';
import { isNotNull } from 'utils/isNotNull';
import * as S from './style';

const SearchFilter = ({ filterType, onSubmit }: SearchFilterTypeProps) => {
  const [theme] = UseToggleTheme();
  const [filterState, setFilterState] = useState<(string | undefined)[]>(
    Array.from({ length: 5 }, () => undefined),
  );
  const [modalState, setModalState] = useRecoilState(filterModal);
  const setLookUp = useSetRecoilState(selfStudyLookup);

  const { register, setValue, watch, resetField } = useForm({
    defaultValues: {
      name: '',
    },
  });

  const handelResetClick = () => {
    if (!filterState.every((i, _, arr) => i === arr[0])) {
      setValue('name', '');
      setFilterState(Array.from({ length: 5 }, () => undefined));
      setLookUp(false);
    }
  };

  const filterChange = (idx: number, value: string) => {
    if (
      filterState.filter((e) => e === undefined).length == 4 &&
      filterState[idx] === value
    )
      setLookUp(false);
    else setLookUp(true);
    value === '남자'
      ? (value = 'MAN')
      : value === '여자'
        ? (value = 'WOMAN')
        : '';
    const copy = [...filterState];
    copy[idx] = filterState[idx] === value ? undefined : value;
    setFilterState(copy);
  };

  useDidMountEffect(() => {
    onSubmit(filterState, watch('name'));
  }, [watch('name'), filterState]);

  return (
    <>
      <S.FilterWrapper modalState={modalState}>
        <S.Top>
          <span>필터</span>
          <S.ResetBtn onClick={() => handelResetClick()}>초기화</S.ResetBtn>
        </S.Top>
        <S.SearchBox>
          <AuthInput
            register={register('name')}
            type="text"
            placeholder="이름을 입력해 주세요."
            maxLength={4}
            labelName="search"
            DeleteBtnClick={() => resetField('name')}
            isValue={isNotNull(watch('name'))}
            isSearch={true}
          />
        </S.SearchBox>
        <S.SelectWrapper>
          {FilterMenuData.map((filterItem, idx) => (
            <S.Select
              key={filterItem.filterTitle}
              isShow={filterItem.show.includes(filterType)}
            >
              <span>{filterItem.filterTitle}</span>
              <S.SelectBox darkmode={theme}>
                {filterItem.filterList.map((list) => (
                  <FilterItem
                    key={list}
                    item={list}
                    name={filterItem.filterTitle}
                    value={filterState[idx]}
                    onClick={() => filterChange(idx, list)}
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
          닫기
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

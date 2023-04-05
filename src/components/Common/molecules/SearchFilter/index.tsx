import * as S from './style';
import { useState } from 'react';
import FilterItem from 'components/Common/atoms/Items/FilterItem';
import { SearchFilterTypeProps, SignupForm } from 'types';
import { FilterMenuData } from 'assets/data/FilterMenuData';
import UseToggleTheme from 'hooks/useToggleTheme';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { filterModal, selfStudyLookup } from 'recoilAtoms/recoilAtomContainer';
import { ResponseOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import { useDidMountEffect } from 'hooks/useDidMountEffect';
import AuthInput from 'components/Common/atoms/Inputs/AuthInput';
import { useForm } from 'react-hook-form';
import { isNotNull } from 'utils/isNotNull';

const SearchFilter = ({ filterType, onSubmit }: SearchFilterTypeProps) => {
  const [theme] = UseToggleTheme();
  const [filterState, setFilterState] = useState<(string | undefined)[]>(
    Array.from({ length: 5 }, () => undefined)
  );
  const [modalState, setModalState] = useRecoilState(filterModal);
  const setLookUp = useSetRecoilState(selfStudyLookup);
  const { register, setValue, watch, resetField } = useForm<SignupForm>({
    defaultValues: { name: '' },
  });

  const handelResetClick = () => {
    setValue('name', '');
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

import * as S from './style';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';

import { ModalProps } from 'types';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import PenaltyRecordMenuItem from 'components/Penalty/atoms/PenaltyRecordMenuItem';
import { PenaltyMenuData } from 'assets/data/PenaltyMenuData';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { penaltySelected } from 'recoilAtoms/recoilAtomContainer';
import { XtextIcon } from 'assets/svg';

const PenaltyRecordMenuModal = ({ modalState, setModalState }: ModalProps) => {
  const [penaltySelect, setPenaltySelect] = useRecoilState(penaltySelected);
  const [currentMenu, setCurrentMenu] = useState('');
  const [currentItem, setCurrentItem] = useState('');

  const handleSelect = (
    state: string[],
    setState: (stae: string[]) => void,
    select: string
  ) => {
    if (!state.includes(select)) {
      setState([...state.filter((i) => i !== ''), select]);
    }
  };

  const handleDelete = (
    state: string[],
    setState: (state: string[]) => void,
    select: string
  ) => {
    setState([...state.filter((i) => i !== select)]);
  };

  return (
    <ModalOverayWrapper isClick={modalState}>
      <S.PenaltyRecordInfoModalWrapper>
        <ModalHeader name={'규정 위반 기록'} setState={setModalState} />
        <S.SelectWrapper>
          <S.SelectBox>
            {PenaltyMenuData.map((i, idx) => (
              <PenaltyRecordMenuItem
                key={idx}
                title={i.penaltyTitle}
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
              />
            ))}
          </S.SelectBox>
          <S.SelectBox2>
            {currentMenu &&
              PenaltyMenuData.filter(
                (i) => i.penaltyTitle == currentMenu
              )[0].menuList.map((i, idx) => (
                <S.MenuList
                  key={idx}
                  onClick={() => {
                    setCurrentItem(i);
                    handleSelect(penaltySelect, setPenaltySelect, i);
                  }}
                  isClick={currentItem === i}
                >
                  <span>{i}</span>
                </S.MenuList>
              ))}
          </S.SelectBox2>
        </S.SelectWrapper>
        <S.TagWrapper>
          {penaltySelect.map((i, idx) => (
            <S.TagItem key={idx}>
              {i}
              <XtextIcon
                onClick={() => handleDelete(penaltySelect, setPenaltySelect, i)}
              />
            </S.TagItem>
          ))}
        </S.TagWrapper>
        <S.BtnWrapper>
          <S.CancelBtn onClick={() => setModalState(false)}>이전</S.CancelBtn>
          <S.NextBtn onClick={() => setModalState(false)}>다음</S.NextBtn>
        </S.BtnWrapper>
      </S.PenaltyRecordInfoModalWrapper>
    </ModalOverayWrapper>
  );
};

export default PenaltyRecordMenuModal;

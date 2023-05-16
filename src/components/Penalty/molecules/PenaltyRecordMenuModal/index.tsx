import * as S from './style';
import { ModalOverayWrapper } from 'components/Common/atoms/Wrappers/ModalOverayWrapper/style';
import ModalHeader from 'components/Common/atoms/ModalHeader';
import PenaltyRecordMenuItem from 'components/Penalty/atoms/PenaltyRecordMenuItem';
import { PenaltyMenuData } from 'assets/data/PenaltyMenuData';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { penaltySelected } from 'recoilAtoms/recoilAtomContainer';
import { XtextIcon } from 'assets/svg';
import { PenaltyRecordModalProps } from 'types';
import {
  returnPenaltyValuesEnglish,
  returnPenaltyValuesKorean,
} from 'utils/Libs/returnPenaltyValues';

const PenaltyRecordMenuModal = ({
  modalState,
  setModalState,
  handleDelete,
}: PenaltyRecordModalProps) => {
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

  return (
    <ModalOverayWrapper isClick={modalState}>
      <S.PenaltyRecordInfoModalWrapper>
        <ModalHeader name={'규정 위반 기록'} setState={setModalState} />
        <div className="select">
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
                      handleSelect(
                        penaltySelect,
                        setPenaltySelect,
                        returnPenaltyValuesEnglish[i]
                      );
                    }}
                    isClick={currentItem === i}
                  >
                    <span>{i}</span>
                  </S.MenuList>
                ))}
            </S.SelectBox2>
          </S.SelectWrapper>
        </div>
        <S.TagWrapper>
          {penaltySelect.map((i, idx) => (
            <S.TagItem
              key={idx}
              onClick={() => handleDelete(penaltySelect, setPenaltySelect, i)}
            >
              {returnPenaltyValuesKorean[i]}
              <XtextIcon />
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

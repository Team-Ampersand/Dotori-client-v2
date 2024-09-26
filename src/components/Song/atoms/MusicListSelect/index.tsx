import { useState } from 'react';
import { ArrowDown } from 'assets/svg';
import { MusicListSelectProps, OptionType } from 'types/components/SongPage';
import * as S from './style';

const MusicListSelect = ({
  options,
  selectedOption,
  setSelectedOption,
}: MusicListSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.SelectContainer>
      <S.SelectBox onClick={() => setIsOpen(!isOpen)}>
        {selectedOption.label}
        <ArrowDown />
      </S.SelectBox>
      {isOpen && (
        <S.OptionsContainer>
          {options.map((option) => (
            <S.Option
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </S.Option>
          ))}
        </S.OptionsContainer>
      )}
    </S.SelectContainer>
  );
};

export default MusicListSelect;

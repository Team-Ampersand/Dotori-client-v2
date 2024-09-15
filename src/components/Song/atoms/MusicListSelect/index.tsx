import { useState } from 'react';
import { ArrowDown } from 'assets/svg';
import * as S from './style';

interface OptionType {
  value: string;
  label: string;
}

interface MusicListSelectProps {
  options: OptionType[];
}

const MusicListSelect = ({ options }: MusicListSelectProps) => {
  const defaultOption =
    options.find((option) => option.value === '좋아요순') || options[0];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<OptionType>(defaultOption);

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

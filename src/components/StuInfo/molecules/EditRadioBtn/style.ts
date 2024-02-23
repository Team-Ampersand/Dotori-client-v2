import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { StuInfoRadioStyleProps } from 'types/components/StuInfoPage';

export const Layer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export const SelectList = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    width: 100%;
    background: ${Palette.NEUTRAL_N50};
    padding: 0.375em;
  }
`;

export const Button = styled.input`
  display: none;

  + label {
    display: block;
    width: 100%;
    font-weight: 600;
    color: ${Palette.NEUTRAL_N30};
    text-align: center;
    border-radius: 0.25rem;
    padding: 0.75em 0;
    cursor: pointer;
  }

  :checked + label {
    background: ${(props: StuInfoRadioStyleProps) =>
      props.darkMode === 'dark'
        ? Palette.NEUTRAL_N30
        : Palette.BACKGROUND_CARD};
    color: ${Palette.NEUTRAL_N10};
  }
`;

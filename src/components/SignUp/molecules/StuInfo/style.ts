import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { DarkModeBtnStyleProps } from 'types';

export const GenderBtnsWrapper = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Palette.NEUTRAL_N50};
  border-radius: 8px;
  padding: 0 6px;
  input {
    display: none;
  }
  input[type='radio'] + label {
    transition: all 0.1s ease-in-out;
    width: 180px;
    height: 41px;
    display: flex;
    font-size: 16px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    background: ${Palette.NEUTRAL_N50};
    color: rgba(121, 121, 121, 0.8);
    cursor: pointer;
    font-weight: 700;
  }
  input[type='radio']:checked + label {
    background: ${(props: DarkModeBtnStyleProps) =>
      props.isDarkTheme
        ? `${Palette.NEUTRAL_N30}`
        : `${Palette.BACKGROUND_CARD}`};
    color: ${(props: DarkModeBtnStyleProps) =>
      props.isDarkTheme ? `${Palette.NEUTRAL_N10}` : `${Palette.NEUTRAL_N30}`};
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
    border-radius: 4px;
  }

  @media (max-width: 420px) {
    width: 90vw;
    margin: 0 auto;
    input {
      width: 50%;
    }
  }
`;

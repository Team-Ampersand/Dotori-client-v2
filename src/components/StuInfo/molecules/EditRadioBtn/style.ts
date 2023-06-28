import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 100%;
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
    color: ${Palette.NEUTRAL_N30};
    text-align: center;
    border-radius: 0.25rem;
    padding: 0.75em 0;
    cursor: pointer;
  }

  :checked + label {
    background: ${Palette.NEUTRAL_N30};
    color: ${Palette.NEUTRAL_N10};
  }
`;

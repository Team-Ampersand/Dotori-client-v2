import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 100%;
  height: 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 1.3em;
    color: ${Palette.NEUTRAL_N10};
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;

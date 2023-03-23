import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 69%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > * {
    color: ${Palette.NEUTRAL_N10};
  }

  > svg {
    margin-bottom: 12px;
  }
`;

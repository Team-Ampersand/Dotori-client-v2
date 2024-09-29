import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 100%;
  min-height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875em;
  color: ${Palette.NEUTRAL_N20};
  border-radius: 1em;
  padding: 0 0.5em;

  :hover {
    background: ${Palette.BACKGROUND_BG};
  }
`;

export const StuNum = styled.p`
  flex-basis: 3em;
`;

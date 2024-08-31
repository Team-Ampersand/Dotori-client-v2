import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const EmptySongBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.5em;

  h2 {
    margin-top: 0.75em;
    color: ${Palette.NEUTRAL_N10};
  }
  p {
    color: ${Palette.NEUTRAL_N20};
  }
`;

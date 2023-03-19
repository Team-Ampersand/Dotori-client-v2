import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;

  p {
    color: ${Palette.NEUTRAL_N10};
  }
  small {
    color: ${Palette.NEUTRAL_N20};
  }
`;

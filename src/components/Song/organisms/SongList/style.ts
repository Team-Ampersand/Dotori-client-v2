import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 72%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 66px;
  background: ${Palette.BACKGROUND_CARD};
  opacity: 0.9;
  backdrop-filter: blur(4px);
`;

export const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 66px);
  border-radius: 1rem;
`;

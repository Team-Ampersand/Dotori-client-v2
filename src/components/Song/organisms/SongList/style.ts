import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 72%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  background: ${Palette.BACKGROUND_CARD};
  opacity: 0.9;
  backdrop-filter: blur(4px);
  display: flex;
  gap: 0.5rem;
  align-items: center;

  h3 {
    color: ${Palette.NEUTRAL_N10};
  }
  p {
    color: ${Palette.NEUTRAL_N20};
    span {
      color: ${Palette.PRIMARY_P10};
    }
  }
`;

export const ListContainer = styled.div`
  width: 100%;
  height: calc(100% - 2rem);
  border-radius: 1rem;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }
`;

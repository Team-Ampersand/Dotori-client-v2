import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 69%;
  height: 100%;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5em;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 92%;
  padding: 16px 12px;
  background: ${Palette.BACKGROUND_BG};
  color: ${Palette.NEUTRAL_N10};
  font-weight: 300;
  font-size: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BottomWrapper = styled.div`
  max-width: 910px;
  height: 30%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  > div {
    position: relative;
    height: 100%;
    aspect-ratio: 1 / 1;
  }

  ::-webkit-scrollbar {
    height: 0px;
  }
`;

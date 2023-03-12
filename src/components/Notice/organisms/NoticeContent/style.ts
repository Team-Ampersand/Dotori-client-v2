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
`;

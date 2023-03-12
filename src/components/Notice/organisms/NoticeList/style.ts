import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 29%;
  height: 100%;
  border-radius: 16px;
  background: ${Palette.BACKGROUND_CARD};
  padding: 6px 24px 0 24px;
  overflow: hidden;
`;

export const NoticeContainer = styled.div`
  max-height: 726px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow-y: auto;

  > div {
    width: 100%;
  }
`;

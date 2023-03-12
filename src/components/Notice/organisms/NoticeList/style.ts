import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 29%;
  height: 100%;
  border-radius: 16px;
  background: ${Palette.BACKGROUND_CARD};
  padding: 16px 24px 0 24px;
`;

export const NoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  gap: 15px;
  overflow-y: auto;

  > div {
    width: 100%;
  }
`;

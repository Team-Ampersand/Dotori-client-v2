import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const NoticeTemplate = styled.div`
  width: calc(100% - 240px);
  height: 100vh;
  max-height: 100vh;
  background: ${Palette.BACKGROUND_BG};
  padding: 0 56px 72px 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 1634px) {
    width: calc(100% - 72px);
  }
`;

export const NoticeWrapper = styled.div`
  width: 100%;
  height: calc(100% - 138px);
  display: flex;
  justify-content: space-between;
`;

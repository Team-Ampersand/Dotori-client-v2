import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const NoticeTemplate = styled.div`
  width: 100%;
  max-height: 100vh;
  background: ${Palette.BACKGROUND_BG};
  padding: 0 56px 72px 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NoticeWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
`;

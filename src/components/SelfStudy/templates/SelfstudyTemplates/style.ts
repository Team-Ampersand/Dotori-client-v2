import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const SelfstudyTemplates = styled.div`
  width: calc(100% - 240px);
  height: 100vh;
  background: ${Palette.BACKGROUND_BG};
  display: flex;
  flex-direction: column;
  padding: 0 3vw 0 3vw;
  overflow-x: hidden;

  @media (max-width: 1634px) {
    width: 100%;
  }
  @media (max-width: 420px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
`;

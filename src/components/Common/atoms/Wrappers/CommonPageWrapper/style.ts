import styled from '@emotion/styled';

export const CommonPageWrapper = styled.div`
  width: calc(100% - 240px);
  height: 100dvh;
  padding: 0 3vw 0 3vw;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;

  @media (max-width: 1634px) {
    padding: 0 2.5vw 2.5dvh 2.5vw;
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

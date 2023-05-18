import styled from '@emotion/styled';

export const CommonPageWrapper = styled.div`
  width: calc(100% - 240px);
  height: 100vh;
  padding: 0 3vw 3vh 3vw;
  @media (max-width: 1634px) {
    padding: 0 2.5vw 2.5vh 2.5vw;
    width: 100%;
  }
  @media (max-width: 420px) {
    padding: 0 5vw 3vh 5vw;
  }
`;

import styled from '@emotion/styled';

export const PenaltyTemplates = styled.div`
  width: calc(100% - 240px);
  height: 100dvh;
  display: flex;
  flex-direction: column;
  padding: 0 3vw 0 3vw;
  @media (max-width: 1634px) {
    width: 100%;
    padding: 0 2.5vw 2.5dvh 2.5vw;
  }
  @media (max-width: 420px) {
    overflow-y: auto;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
`;

export const PenatlyWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media (max-width: 950px) {
    gap: 0;
  }
`;

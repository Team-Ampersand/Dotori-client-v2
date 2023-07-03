import styled from '@emotion/styled';

export const StuInfoTemplate = styled.div`
  width: calc(100% - 240px);
  height: 100%;
  padding: 0 3vw;

  @media (max-width: 1634px) {
    width: calc(100% - 2.5vw);
  }
`;

export const StuInfoLayer = styled.div`
  width: 100%;
  height: calc(100% - 124px);
  display: flex;
  gap: 2rem;
`;

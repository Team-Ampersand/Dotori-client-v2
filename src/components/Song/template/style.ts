import styled from '@emotion/styled';

export const SongTemplate = styled.div`
  padding: 0 72px;
  width: calc(100% - 240px);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 1634px) {
    width: calc(100% - 72px);
  }
  @media (max-width: 420px) {
    width: 100%;
    padding: 0 1.25rem;
  }
`;

export const SongLayer = styled.div`
  width: 100%;
  height: calc(100% - 130px);
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

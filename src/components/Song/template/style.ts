import styled from '@emotion/styled';

export const SongLayer = styled.div`
  width: 100%;
  height: calc(100% - 130px);
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 0;
  }
`;

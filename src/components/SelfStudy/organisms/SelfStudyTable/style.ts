import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  height: 86dvh;
  display: flex;
  justify-content: space-between;
  gap: 15px;
  @media (max-width: 950px) {
    flex-direction: column;
    gap: 0;
  }
  @media (max-width: 420px) {
    height: auto;
  }
`;

export const ListWrapper = styled.div`
  width: 62.5vw;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: 140px;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  overflow-y: auto;
  padding-right: 10px;
  ::-webkit-scrollbar {
    width: 0;
  }

  @media (max-width: 1634px) {
    width: 68vw;
  }
  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    width: 65vw;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    width: 60vw;
  }
  @media (max-width: 950px) {
    width: 100%;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
    grid-auto-rows: 170px;
    padding: 0 0 20px;
  }
`;

import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  height: 87.5vh;
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const ListWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

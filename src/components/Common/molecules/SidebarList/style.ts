import styled from '@emotion/styled';

export const SideBarListWrapper = styled.nav`
  height: 75vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;

  @media (max-width: 420px) {
    width: 100%;
    height: 52px;
    flex-direction: row;
    justify-content: space-between;
    gap: 0px;
  }
`;

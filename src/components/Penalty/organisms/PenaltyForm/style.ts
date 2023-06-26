import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Wrappert = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const CSVWrapper = styled.div`
  min-width: 250px;
  width: 280px;
  color: ${Palette.NEUTRAL_N10};
  background-color: ${Palette.BACKGROUND_CARD};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  span {
    font-weight: 700;
    font-size: 18px;
  }
  @media (max-width: 1200px) {
    width: 23.5vw;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

export const CSVLink = styled.div`
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.SYSTEM_POSITIVE};
  font-weight: 700;
  font-size: 16px;
  border: 1px solid ${Palette.SYSTEM_POSITIVE};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    border: none;
    color: ${Palette.BACKGROUND_CARD};
    background-color: ${Palette.SYSTEM_POSITIVE};
  }
`;

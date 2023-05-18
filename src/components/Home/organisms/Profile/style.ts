import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 4.4vh;
  gap: 3vh;
  grid-area: 프로필;

  @media (min-width: 1950px) {
    margin-top: 6.2vh;
  }
  @media (max-width: 1634px) {
    width: 23vw;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

export const ProfileBox = styled.div`
  width: 100%;
  height: 13vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  padding: 24px;
  gap: 15px;
  border-radius: 16px;
  position: relative;

  svg {
    cursor: pointer;
  }
`;

export const StudentInfo = styled.div`
  width: 12.5vw;
  height: 7.233vh;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: space-evenly;
  font-weight: 700;
  font-size: 16px;
`;

export const Name = styled.span`
  color: ${Palette.NEUTRAL_N10};
`;

export const StudId = styled.span`
  color: ${Palette.NEUTRAL_N30};
`;

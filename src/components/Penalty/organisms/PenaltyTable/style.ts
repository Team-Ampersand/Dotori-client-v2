import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const TableWrapper = styled.div`
  height: 87.5vh;
  display: flex;
  justify-content: space-between;
  margin: 23px 0 16px 0;
  gap: 30px;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ListWrapper = styled.div`
  width: 80%;
  height: 100%;
  padding: 0 16px 16px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
  background: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StudentConst = styled.div`
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.PRIMARY_P10};
  span {
    margin-right: 8px;
    font-weight: 700;
    font-size: 18px;
    color: ${Palette.NEUTRAL_N10};
  }
  p {
    margin-left: 2px;
    color: ${Palette.NEUTRAL_N20};
  }
`;

export const PenaltyBtn = styled.div`
  width: 120px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Palette.SYSTEM_ERROR};
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.SYSTEM_ERROR};
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    color: ${Palette.BACKGROUND_CARD};
    background-color: ${Palette.SYSTEM_ERROR};
  }
`;

export const TagWrapper = styled.div`
  border-top: 1px solid ${Palette.NEUTRAL_N50};
  width: calc(100% + 32px);
  margin-left: -16px;
  display: flex;
  gap: 8px;
  padding: 16px;
`;

export const TagItem = styled.div`
  height: 30px;
  font-weight: 500;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N20};
  background-color: ${Palette.BACKGROUND_BG};
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  gap: 4px;
  svg {
    width: 13px;
    cursor: pointer;
  }
`;

export const CSVWrapper = styled.div`
  width: 280px;
  color: ${Palette.NEUTRAL_N10};
  background-color: ${Palette.BACKGROUND_CARD};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 16px;
  margin-top: 24px;
  span {
    font-weight: 700;
    font-size: 18px;
  }
`;

export const CSVLink = styled.div`
  width: 240px;
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

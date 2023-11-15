import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const TableWrapper = styled.div`
  width: 100%;
  height: 87.5dvh;
  display: flex;
  justify-content: space-between;

  @media (max-width: 420px) {
    display: flex;
    flex-direction: column;
    height: auto;
    margin-bottom: 16px;
  }
`;

export const ListWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 16px 16px;
  overflow-y: scroll;
  background: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  ::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 950px) {
    padding-top: 16px;
    width: 100%;
  }
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 420px) {
    display: none;
  }
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
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 16px 0;
  @media (max-width: 420px) {
    border: none;
    padding: 0;
  }
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

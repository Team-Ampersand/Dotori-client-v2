import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const PenaltyItemWrappter = styled.div`
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border-radius: 16px;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: ${Palette.BACKGROUND_BG};
  }
`;

export const StuInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 950px) {
    gap: 2vw;
  }
`;

export const Profile = styled.div`
  svg {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;

export const StuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Name = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N10};
`;

export const StuNum = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N20};
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const RuleViolationList = styled.div`
  width: 60%;
  font-weight: 600;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N20};
  @media (max-width: 1634px) {
    width: 40%;
  }
  @media (max-width: 420px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 16px;
  @media (max-width: 950px) {
    gap: 2vw;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
export const RuleViolationListBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${Palette.BACKGROUND_BG};
  cursor: pointer;
`;

export const PenaltyRecordBtn = styled.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: ${Palette.BACKGROUND_BG};
  cursor: pointer;
`;

export const ResponseBtn = styled.div`
  display: none;
  @media (max-width: 420px) {
    display: flex;
  }
`;

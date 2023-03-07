import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const PenaltyListModalItemWrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${Palette.BACKGROUND_BG};
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N10};
  border-radius: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    svg {
      cursor: pointer;
    }
  }
`;

export const PenaltyListModalItemDate = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${Palette.NEUTRAL_N20};
`;

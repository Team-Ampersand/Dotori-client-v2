import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const PenaltyRecordModalWrapper = styled.div`
  width: 420px;
  height: 510px;
  background: ${Palette.BACKGROUND_CARD};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  position: relative;
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N10};
  }
`;

export const SelectItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${Palette.NEUTRAL_N50};
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N10};
  border-radius: 8px;
  svg {
    cursor: pointer;
  }
`;
export const PenaltyWrapper = styled.div`
  height: 200px;
  span {
    font-weight: 600;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N10};
  }
`;
export const PenaltyItemsWrapper = styled.div`
  height: 65%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  margin-top: 5px;
  gap: 8px;
`;

export const PenaltyItems = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${Palette.NEUTRAL_N50};
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N10};
  border-radius: 8px;
  svg {
    cursor: pointer;
  }
`;

export const PenaltyAddBtn = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: ${Palette.NEUTRAL_N50};
  padding: 15px;
  font-weight: 500;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N30};
  border-radius: 8px;
  cursor: pointer;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 18px;
  width: calc(100% - 36px);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;

  background: linear-gradient(
    360deg,
    ${Palette.BACKGROUND_CARD} 85.07%,
    rgba(253, 253, 253, 0) 103.03%
  );
`;

export const CancelBtn = styled.button`
  width: 49%;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N20};
  background-color: ${Palette.BACKGROUND_CARD};
  border: 1px solid ${Palette.NEUTRAL_N30};
  border-radius: 8px;
`;
export const NextBtn = styled.button`
  width: 49%;
  height: 40px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  background-color: ${Palette.PRIMARY_P10};
  border-radius: 8px;
  border: none;
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const CheckModalWrapper = styled.div`
  width: 320px;
  height: 160px;
  background: ${Palette.BACKGROUND_CARD};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 11;
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

export const CheckTitle = styled.div`
  color: ${Palette.NEUTRAL_N10};
  font-weight: 700;
  font-size: 18px;
`;

export const CheckContent = styled.div`
  font-weight: 500;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N20};
  margin-bottom: 10px;
`;

export const BtnWrapper = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  justify-content: center;
  gap: 8px;
`;

export const CancelBtn = styled.button`
  width: 130px;
  font-weight: 700;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N20};
  background-color: ${Palette.BACKGROUND_CARD};
  border: 1px solid ${Palette.NEUTRAL_N30};
  border-radius: 8px;
`;

export const CheckBtn = styled.button`
  width: 130px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  background-color: ${Palette.PRIMARY_P10};
  border-radius: 8px;
  border: none;
`;

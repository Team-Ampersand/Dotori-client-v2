import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { PenaltyItemsStyleProps } from 'types';

export const PenaltyListModalWrapper = styled.div`
  width: 420px;
  height: ${(props: PenaltyItemsStyleProps) =>
    props.itemCnt && props.itemCnt >= 8 ? '610px' : '430px'};
  background: ${Palette.BACKGROUND_CARD};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  padding: 18px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  @media (max-width: 420px) {
    width: 90vw;
  }
`;

export const PenaltyItems = styled.div`
  height: ${(props: PenaltyItemsStyleProps) =>
    props.itemCnt && props.itemCnt >= 8 ? '500px' : '310px'};
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  margin: 15px 0 10px 0;
`;

export const PenaltyModalBtn = styled.button`
  height: 45px;
  background: ${Palette.PRIMARY_P10};
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-weight: 700;
  font-size: 16px;
`;

export const NullPenalty = styled.div`
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

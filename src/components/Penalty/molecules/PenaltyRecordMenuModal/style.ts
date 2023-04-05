import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { PenaltyMenuItemStyleProps } from 'types';

export const PenaltyRecordInfoModalWrapper = styled.div`
  width: 500px;
  height: 720px;
  background: ${Palette.BACKGROUND_CARD};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 10;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  @media (max-width: 420px) {
    width: 90vw;
    .select {
      overflow: auto;
      ::-webkit-scrollbar {
        height: 0;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 420px) {
    width: 470px;
  }
`;

export const SelectBox = styled.div`
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SelectBox2 = styled.div`
  width: 220px;
  height: 480px;
  background-color: ${Palette.BACKGROUND_BG};
  border-radius: 8px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MenuList = styled.li`
  cursor: pointer;
  ::marker {
    color: ${(props: PenaltyMenuItemStyleProps) =>
      props.isClick ? Palette.NEUTRAL_N10 : Palette.NEUTRAL_N20};
    font-size: ${(props: PenaltyMenuItemStyleProps) =>
      props.isClick ? 'small' : 'x-small'};
  }
  span {
    font-weight: ${(props: PenaltyMenuItemStyleProps) =>
      props.isClick ? 600 : 500};
    font-size: 14px;
    color: ${(props: PenaltyMenuItemStyleProps) =>
      props.isClick ? Palette.NEUTRAL_N10 : Palette.NEUTRAL_N20};
  }
`;

export const TagWrapper = styled.div`
  border-top: 1px solid ${Palette.NEUTRAL_N40};
  width: calc(100% + 36px);
  height: 90px;
  margin-left: -18px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px 18px 0;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0;
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

export const BtnWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
`;

export const CancelBtn = styled.button`
  width: 49%;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  color: ${Palette.NEUTRAL_N20};
  background-color: ${Palette.BACKGROUND_CARD};
  border: 1px solid ${Palette.NEUTRAL_N30};
  border-radius: 8px;
`;
export const NextBtn = styled.button`
  width: 49%;
  height: 48px;
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  background-color: ${Palette.PRIMARY_P10};
  border-radius: 8px;
  border: none;
`;

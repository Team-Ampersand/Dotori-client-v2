import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5.55vh;
  padding-bottom: 24px;

  span {
    font-weight: 700;
    font-size: 32px;
    color: ${Palette.NEUTRAL_N10};
  }
  @media (max-width: 420px) {
    background-color: ${Palette.BACKGROUND_CARD};
    border-bottom: 1px solid ${Palette.NEUTRAL_N40};
    margin: 0;
    padding: 10px 3vw;
    width: calc(100% + 6vw);
    margin-left: -3vw;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 32px;
  color: ${Palette.NEUTRAL_N10};
  @media (max-width: 420px) {
    display: none;
  }
`;

export const MobileTitle = styled.div`
  display: none;
  align-items: center;
  gap: 15px;
  span {
    font-weight: 900;
    font-size: 22px;
    color: ${Palette.PRIMARY_P10};
  }
  svg {
    cursor: pointer;
  }

  @media (max-width: 420px) {
    display: flex;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  gap: 16px;
`;
export const ModalBtnWrapper = styled.div`
  display: none;
  @media (max-width: 950px) {
    display: flex;
    gap: 16px;
  }
  @media (max-width: 420px) {
    display: none;
  }
`;
export const ModalBtn = styled.div`
  height: 40px;
  background-color: ${Palette.NEUTRAL_N40};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px 12px;
  gap: 8px;
  cursor: pointer;
  span {
    font-weight: 500;
    font-size: 16px;
    color: ${Palette.NEUTRAL_N20};

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

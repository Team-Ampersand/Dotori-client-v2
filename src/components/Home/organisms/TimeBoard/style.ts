import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const TimeBoardWrapper = styled.div`
  height: 33dvh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-top: 4dvh;
  gap: 1.55dvh;
  grid-area: 시간;

  @media (max-width: 950px) {
    height: 262px;
  }

  @media (max-width: 420px) {
    height: 170px;
    margin-top: 15px;
    gap: 20px;
  }
`;

export const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${Palette.BACKGROUND_BG};
  padding: 10px 0;

  @media (max-width: 420px) {
    position: fixed;
    top: 0;
    width: 90vw;
    z-index: 1;
  }
`;

export const BoardTopLeftWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;

  span {
    font-weight: 700;
    font-size: 32px;
    color: ${Palette.NEUTRAL_N10};
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const BoardTopRightWrapper = styled.div`
  display: none;
  gap: 15px;
  position: relative;

  .defaultProfileImg {
    cursor: pointer;
    border-radius: 100%;
  }

  @media (max-width: 950px) {
    display: flex;
  }

  @media (max-width: 420px) {
    .defaultProfileImg {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }
`;

export const MobileTitle = styled.div`
  display: none;
  align-items: center;
  gap: 15px;

  span {
    color: ${Palette.PRIMARY_P10};
    font-weight: 900;
    font-size: 22px;
  }
  svg {
    cursor: pointer;
  }

  @media (max-width: 420px) {
    display: flex;
  }
`;

export const TodayDate = styled.div`
  width: 135px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  color: ${Palette.NEUTRAL_N20};
  background: ${Palette.BACKGROUND_CARD};
`;

export const BoardBottom = styled.div`
  position: relative;
  height: 27dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.5vw;
  gap: 10px;
  color: white;
  font-weight: 600;
  font-size: 30px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  background: radial-gradient(
    198.73% 2092.94% at 17.26% 9.06%,
    #5966e9 0%,
    #9f5bf7 42.38%,
    #c955ff 94.62%,
    #f2b5b5 100%
  );

  span {
    padding-left: 10px;
    font-weight: 600;
    font-size: 24px;
    z-index: 0;
  }

  @media (max-width: 950px) {
    height: 240px;
    padding: 0 30px;
    span {
      padding-left: 5px;
      font-size: 20px;
    }
  }

  @media (max-width: 420px) {
    height: 115px;
    margin-top: 50px;
    span {
      padding-left: 0px;
      font-size: 14px;
    }
  }
`;

export const ShadowImgBox = styled.div`
  position: absolute;
  right: -2.7vw;
  bottom: -2dvh;
  width: 50dvh;
  height: 44dvh;
  border-radius: 50%;
  z-index: 0;

  @media (max-width: 1130px) {
    right: -4.7vw;
    bottom: -1dvh;
    width: 42dvh;
    height: 40dvh;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

export const CurrentTime = styled.p`
  width: 500px;
  font-weight: 800;
  font-size: 64px;
  letter-spacing: 4.5px;
  z-index: 0;

  @media (max-width: 1130px) {
    width: 400px;
    font-size: 50px;
    letter-spacing: 4px;
  }
  @media (max-width: 600px) {
    width: 240px;
    font-size: 34px;
    letter-spacing: 2px;
  }
  @media (max-width: 493px) {
    width: 210px;
    font-size: 24px;
  }
`;

export const DotoriImgBox = styled.div`
  position: absolute;
  right: 1.5vw;
  bottom: 2dvh;
  width: 34dvh;
  height: 34dvh;
  z-index: 1;

  @media (max-width: 1260px) {
    width: 28dvh;
    height: 28dvh;
    right: 1vw;
    bottom: 3dvh;
  }

  @media (max-width: 950px) {
    width: 230px;
    height: 220px;
    right: -65px;
    top: 12px;
    img {
      clip: rect(0, 165px, 175px, 0);
      clip-path: ellipse(160px 155px at 30.1% 20%);
    }
  }

  @media (max-width: 420px) {
    width: 127px;
    height: 137px;
    right: -22px;
    top: 10px;
    z-index: 0;
    img {
      clip: rect(0, 105px, 105px, 0);
      clip-path: ellipse(100px 109px at 22% 21%);
    }
  }
`;

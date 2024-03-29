import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const NoticeBoardWrapper = styled.div`
  width: 23vw;
  height: 55.4dvh;
  display: flex;
  flex-direction: column;
  padding: 15px 20px 0 20px;
  grid-area: 공지사항;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 16px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.04));

  p {
    font-weight: 700;
    font-size: 18px;
    color: ${Palette.NEUTRAL_N10};
    margin: 10px 10px 18px 5px;
  }

  @media (min-width: 1950px) {
    width: 24.5vw;
  }
  @media (max-width: 1634px) {
    width: 29vw;
  }
  @media (max-width: 950px) {
    display: none;
  }
`;

export const NoticeList = styled.div`
  width: 100%;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  margin: 0 auto;
  gap: 13px;
  padding-bottom: 12%;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export const NoticeBox = styled.div`
  width: 100%;
`;

export const NoticeBottom = styled.div`
  position: absolute;
  right: 0.5px;
  top: 88%;
  width: 100%;
  height: 12%;
  border-radius: 16px;
  background: linear-gradient(
    180deg,
    ${Palette.BACKGROUND_CARD} 0%,
    rgba(253, 253, 253, 0) 100%
  );
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

export const DateLine = styled.div`
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1vw;
  font-weight: 500;
  font-size: 12px;
  color: ${Palette.NEUTRAL_N20};

  hr {
    border: 0.5px solid ${Palette.NEUTRAL_N40};
    width: 30%;
    margin: 0;
  }
`;

export const EmptyNoticeItem = styled.div`
  width: 100%;
  height: 100%;
`;

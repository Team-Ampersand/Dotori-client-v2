import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 29%;
  height: 100%;
  border-radius: 16px;
  background: ${Palette.BACKGROUND_CARD};
  padding: 6px 24px;
  overflow: hidden;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

export const NoticeContainer = styled.div`
  height: 91%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0;
  }

  > div {
    width: 100%;
  }
`;

export const DateLine = styled.div`
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  font-size: 12px;
  color: ${Palette.NEUTRAL_N20};
  white-space: nowrap;

  hr {
    border: 0.5px solid ${Palette.NEUTRAL_N40};
    width: 100px;
    margin: 0;
  }
`;

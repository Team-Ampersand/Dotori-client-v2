import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 72px;
`;

export const LeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 1em;
  width: 45%;
`;

export const ImgBox = styled.div`
  position: relative;
  min-height: 72px;
  aspect-ratio: 16 / 9;
  background: ${Palette.NEUTRAL_N40};
  border-radius: 0.5em;
  background-image: url(MusicalNoteIcon);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 0.5em;

  span {
    min-height: 72px;
  }
`;

export const Title = styled.h4`
  color: ${Palette.NEUTRAL_N10};
  width: 70%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1em;
`;

export const StuInfo = styled.div`
  display: flex;
  gap: 0.5em;
  color: ${Palette.NEUTRAL_N20};
  width: 20%;
  font-size: 0.875em;
`;

export const CreateDate = styled.p`
  color: ${Palette.NEUTRAL_N20};
  font-size: 0.875em;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;

  button,
  a {
    border: none;
    border-radius: 0.5em;
    background: ${Palette.BACKGROUND_BG};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg path {
    stroke: ${Palette.NEUTRAL_N20};
  }
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

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

export const HeartContainer = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  z-index: 1;

  @media (min-width: 420px) {
    display: none;
  }
`;

import styled from '@emotion/styled';
import { CameraIcon } from 'assets/svg';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  max-width: 100%;
  height: 30%;
  padding: 24px;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  svg {
    path {
      :nth-of-type(1) {
        fill: ${Palette.PRIMARY_P10};
      }
      :nth-of-type(2) {
        stroke: ${Palette.BACKGROUND_CARD};
      }
    }
    circle {
      stroke: ${Palette.BACKGROUND_CARD};
    }
  }
`;

export const TopWrapper = styled.div`
  position: relative;
  color: ${Palette.NEUTRAL_N10};
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

export const ToolTipBtn = styled.span`
  background: ${Palette.NEUTRAL_N40};
  width: 1.4em;
  height: 1.4em;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  color: ${Palette.NEUTRAL_N20};

  :hover + div {
    visibility: visible;
    opacity: 1;
  }
`;

export const ToolTipBox = styled.div`
  visibility: hidden;
  position: absolute;
  opacity: 0;
  transition: 0.2s;
  background: ${Palette.NEUTRAL_N10};
  bottom: 30px;
  padding: 0.5em 1em;
  font-size: 1rem;
  border-radius: 1rem;
  left: 1rem;
  color: ${Palette.NEUTRAL_N50};

  &:before {
    content: '';
    border-top: 10px solid ${Palette.NEUTRAL_N10};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    position: absolute;
    bottom: -19px;
    left: 19px;
  }
`;

export const BottomWrapper = styled.div`
  max-width: 910px;
  height: 100%;
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  ::-webkit-scrollbar {
    height: 0px;
  }
`;

export const ImgInput = styled.input`
  display: none;
`;

export const ImgInputLabel = styled.label`
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1em;
  border: 2px dashed ${Palette.PRIMARY_P10};
  background: ${Palette.BACKGROUND_BG};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 0.5em;
    color: ${Palette.NEUTRAL_N20};
  }
`;

export const Camera = styled(CameraIcon)`
  path {
    :nth-of-type(1) {
      fill: ${Palette.PRIMARY_P10};
    }
    :nth-of-type(2) {
      stroke: ${Palette.BACKGROUND_CARD};
    }
  }
  circle {
    stroke: ${Palette.BACKGROUND_CARD};
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  min-width: min-content;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 1em;
  overflow: hidden;

  > img {
    object-fit: cover;
  }
`;

export const ImgDeleteBtn = styled.span`
  position: absolute;
  width: 1.375em;
  height: 1.375em;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: ${Palette.NEUTRAL_N50};
  top: 0.5em;
  right: 0.5em;
  border-radius: 0.5rem;
  cursor: pointer;

  &::before,
  &::after {
    content: '';
    position: absolute;
    transform: rotate(-45deg);
    background: ${Palette.NEUTRAL_N10};
    width: 0.8em;
    height: 0.1em;
  }
  &::after {
    transform: rotate(45deg);
  }
`;

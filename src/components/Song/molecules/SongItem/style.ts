import styled from '@emotion/styled';
import Link from 'next/link';
import { Palette } from 'styles/globals';

export const Layer = styled(Link)`
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

  @media (max-width: 800px) {
    width: 90%;
  }
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

export const ResponseWrapper = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    justify-content: space-between;
  }
`;

export const Title = styled.h4`
  color: ${Palette.NEUTRAL_N10};
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 1em;
`;

export const Info = styled.div`
  display: none;
  font-size: 12px;
  color: ${Palette.NEUTRAL_N20};

  @media (max-width: 800px) {
    display: flex;
  }
`;

export const StuInfo = styled.div`
  display: flex;
  gap: 0.5em;
  color: ${Palette.NEUTRAL_N20};
  width: 20%;
  font-size: 0.875em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const CreateDate = styled.p`
  color: ${Palette.NEUTRAL_N20};
  font-size: 0.875em;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: end;

  button,
  div {
    border: none;
    border-radius: 0.5em;
    background: ${Palette.BACKGROUND_BG};
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      :last-child {
        display: none;
      }
    }
  }

  svg path {
    stroke: ${Palette.NEUTRAL_N20};
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const ResponsiveBtn = styled.div`
  display: none;
  @media (max-width: 420px) {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1px;
  }
`;

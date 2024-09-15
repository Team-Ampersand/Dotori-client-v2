import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ButtonStyle = styled.div`
  border: none;
  border-radius: 0.5em;
  background: ${Palette.BACKGROUND_BG};
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 100%;
  align-items: flex-end;
`;

export const ButtonTestContainer = styled.div`
  display: flex;
  gap: 1em;
  justify-content: end;

  button,
  div {
    ${ButtonStyle}
  }

  /* svg path {
    stroke: ${Palette.NEUTRAL_N20};
  } */
  @media (max-width: 420px) {
    display: none;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LikeNum = styled.p`
  font-family: SUIT;
  font-size: 14px;
  font-weight: 600;
  line-height: 17.47px;
  text-align: center;
  color: ${Palette.NEUTRAL_N20};
`;

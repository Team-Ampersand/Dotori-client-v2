import styled from "@emotion/styled";
import { Palette } from "styles/globals";

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
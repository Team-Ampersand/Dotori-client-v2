import styled from "@emotion/styled";
import { Palette } from "styles/globals";

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
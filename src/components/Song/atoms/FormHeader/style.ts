import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const FormHeader = styled.div`
  display: flex;
  color: ${Palette.NEUTRAL_N10};
  align-items: center;
  gap: 0.5em;
  font-size: 0.8em;
  margin-bottom: 1em;
`;

export const NoticeModalBtn = styled.button`
  background: ${Palette.NEUTRAL_N40};
  width: 1.8em;
  height: 1.8em;
  border: none;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Palette.NEUTRAL_N20};
`;
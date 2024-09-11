import styled from "@emotion/styled";
import { Palette } from 'styles/globals';
import { ButtonProps } from "types/components/StuInfoPage";

export const ButtonBox = styled.div`
  display: flex;
  gap: 1em;
`;

export const Button = styled.button<ButtonProps>`
  width: 2.25em;
  height: 2.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Palette.BACKGROUND_BG};
  border-radius: 0.5em;
  border: none;
  padding: 0.5em 0.25em;
  visibility: ${({ hide }) => hide && 'collapse'};

  path {
    stroke: ${({ status }) => status && Palette.PRIMARY_P10};
  }
`;
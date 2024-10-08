import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

interface SubmitProps {
  isValid: boolean;
}

export const Layer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  gap: 0.5em;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 1em;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);

  @media (max-width: 950px) {
    width: 380px;
  }

  > * {
    box-sizing: border-box;
    border-radius: 0.5em;
    border: 0;
  }
`;

export const Submit = styled.button<SubmitProps>`
  flex-basis: 48px;
  line-height: 20px;
  background: ${(props) =>
    props.isValid ? Palette.PRIMARY_P10 : Palette.PRIMARY_P30};
  color: ${(props) => (props.isValid ? Palette.WHITE : Palette.NEUTRAL_N20)};
`;

export const NotForm = styled.p`
  color: ${Palette.NEUTRAL_N20};
`;

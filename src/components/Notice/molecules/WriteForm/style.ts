import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  width: 100%;
  height: 60%;
  background: ${Palette.BACKGROUND_CARD};
  border-radius: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
`;

export const FormHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-radius: 1rem;

  p {
    color: ${Palette.NEUTRAL_N10};
  }
  small {
    color: ${Palette.NEUTRAL_N20};
  }
`;

export const FormContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > * {
    background: ${Palette.BACKGROUND_BG};
    border: none;
    font-size: 1em;
    padding: 14px 12px;
    color: ${Palette.NEUTRAL_N10};
    resize: none;
    border-radius: 8px;
    font-family: 'SUIT';
    font-size: 1em;

    :focus::-webkit-input-placeholder {
      color: transparent;
      transition: 0.25s;
    }
  }

  > textarea {
    height: 100%;
    border-radius: 8px;
    font-size: 0.875em;
  }
`;

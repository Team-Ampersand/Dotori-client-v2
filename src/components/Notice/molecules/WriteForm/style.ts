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
  }
  > input:focus::-webkit-input-placeholder {
    color: rgb(118, 118, 118);
    font-family: 'SUIT';
  }
  > textarea {
    height: 100%;
    border-radius: 8px;
    font-family: 'SUIT';
  }
`;

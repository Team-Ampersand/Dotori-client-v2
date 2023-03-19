import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
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
  > textarea {
    height: 100%;
    border-radius: 8px;
  }
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const Layer = styled.div`
  max-width: 428px;
  max-height: 570px;
  width: 100%;
  height: 100%;
  padding: 1.5em;
  border-radius: 1rem;
  background: ${Palette.BACKGROUND_CARD};
  color: ${Palette.NEUTRAL_N10};
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`;

export const CloseButton = styled.button`
  display: none;

  :before,
  :after {
    content: '';
    width: 2rem;
    height: 1px;
    transform: rotate(-45deg);
    display: block;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  background: ${Palette.PRIMARY_P10};
  border-radius: 0.5rem;
  border: none;
  padding: 14px 0;
  color: ${Palette.NEUTRAL_N10};
`;

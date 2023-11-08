import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const ModalWrapper = styled.div`
  width: 100%;
  background-color: ${Palette.BACKGROUND_CARD};
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.04);
  border-radius: 16px 16px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 3;
  ${(props: { modalState: boolean }) => !props.modalState && 'display: none;'}
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;

  div {
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: ${Palette.NEUTRAL_N10};
    cursor: pointer;

    :hover {
      transition: all 0.3s ease-in-out;
      background: ${Palette.NEUTRAL_N50};
    }
    :first-child {
      border-radius: 16px 16px 0 0;
    }
  }
  svg path {
    stroke: ${Palette.NEUTRAL_N20};
  }
`;

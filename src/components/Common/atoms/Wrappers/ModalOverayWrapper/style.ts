import styled from '@emotion/styled';
import { ModalStyleProps } from 'types';

export const ModalOverayWrapper = styled.div`
  visibility: ${(props: ModalStyleProps) =>
    props.isClick ? 'visible' : 'hidden'};
  position: fixed;
  inset: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: hsla(235, 77%, 10%, 0.45);

  @media (max-width: 950px) {
    background: hsla(235, 77%, 10%, 0.7);
  }
`;

export const ResponseOverayWrapper = styled.div`
  @media (max-width: 950px) {
    visibility: ${(props: ModalStyleProps) =>
      props.isClick ? 'visible' : 'hidden'};
    position: fixed;
    inset: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsla(235, 77%, 10%, 0.45);
  }
`;

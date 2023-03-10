import styled from '@emotion/styled';
import { ModalStyleProps } from 'types';

export const ModalOverayWrapper = styled.div`
  visibility: ${(props: ModalStyleProps) =>
    props.isClick ? 'visible' : 'hidden'};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(6, 9, 45, 0.25);
`;

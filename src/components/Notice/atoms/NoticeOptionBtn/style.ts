import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { Props } from '.';

export const NoticeOptionButton = styled.button<Props>`
  background: ${({ bgColor }) => bgColor};
  color: ${({ color }) => color};
  border: ${({ border }) => (border ? `1px solid ${border}` : 'none')};
  border-radius: 50px;
  width: 68px;
  height: 32px;
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';

export const DotoriTitle = styled.div`
  width: 193px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 40px;
    height: 47.5px;
  }
  span {
    color: ${Palette.PRIMARY_P10};
    font-weight: 900;
    font-size: 35.5px;
  }
`;

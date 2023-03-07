import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { PenaltyMenuItemStyleProps } from 'types';

export const MenuItemWrapper = styled.div`
  width: 230px;
  height: 40px;
  font-weight: 500;
  font-size: 16px;
  color: ${(props: PenaltyMenuItemStyleProps) =>
    props.isClick ? Palette.PRIMARY_P10 : Palette.NEUTRAL_N30};
  background-color: ${(props: PenaltyMenuItemStyleProps) =>
    props.isClick ? Palette.PRIMARY_P20 : ''};
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  :hover {
    background-color: ${(props: PenaltyMenuItemStyleProps) =>
      props.isClick ? Palette.PRIMARY_P20 : Palette.BACKGROUND_BG};
  }
`;

import styled from '@emotion/styled';
import { Palette } from 'styles/globals';
import { AuthInputStyleProps } from 'types';

export const AuthInput = styled.div`
  position: relative;
  height: 55px;
  width: ${(props: AuthInputStyleProps) =>
    props.isSearch
      ? '250px'
      : props.isRabel
      ? `385px`
      : props.isEmailAuth
      ? `255px`
      : `385px`};
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: ${(props: AuthInputStyleProps) =>
      props.isSearch
        ? '145px'
        : props.isRabel
        ? `280px`
        : props.isEmailAuth
        ? `215px`
        : `340px`};
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${Palette.NEUTRAL_N50};
    box-shadow: 0 0 0 1000px ${Palette.NEUTRAL_N50} inset;
    color: ${Palette.NEUTRAL_N30};
    font-weight: 500;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    padding: 0
      ${(props: AuthInputStyleProps) => (props.isRabel ? `50px` : `20px`)};
    :-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px ${Palette.NEUTRAL_N50} inset !important;
      -webkit-text-fill-color: ${Palette.NEUTRAL_N30} !important;
    }
    ::placeholder {
      color: ${Palette.NEUTRAL_N30};
    }
    :focus {
      border: 1px solid ${Palette.PRIMARY_P10};
      color: ${Palette.NEUTRAL_N10};
    }
  }
  input[type='number']::-webkit-outer-spin-button,
  input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  svg {
    position: absolute;
    top: 15px;
    right: 13px;
    cursor: pointer;
  }

  .frontIcon {
    left: 16px;
  }

  @media (max-width: 420px) {
    width: ${(props: AuthInputStyleProps) =>
      props.isRabel ? `90vw` : props.isEmailAuth ? `70vw` : `90vw`};
    input {
      width: ${(props: AuthInputStyleProps) =>
        props.isRabel
          ? `calc(90vw - 100px)`
          : props.isEmailAuth
          ? `50vw`
          : `calc(90vw - 40px)`};
      margin: 0 auto;
    }
  }
`;

export const EmailBack = styled.span`
  font-weight: 500;
  font-size: 16px;
  color: ${(props: AuthInputStyleProps) =>
    props.isValue && props.isFocus
      ? `${Palette.NEUTRAL_N10}`
      : `${Palette.NEUTRAL_N30}`};
  position: absolute;
  bottom: 18px;
  transition: all 0.3s ease-in-out;
  left: ${(props: AuthInputStyleProps) =>
    props.isRabel
      ? props.isValue || props.isFocus
        ? '110px'
        : '48px'
      : props.isValue || props.isFocus
      ? '80px'
      : '20px'};
`;

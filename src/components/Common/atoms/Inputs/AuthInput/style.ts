import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { AuthInputStyleProps } from "types";

export const AuthInput = styled.div`
  position: relative;
  height: 55px;
  width: ${((props:AuthInputStyleProps) => props.isRabel ? `385px` : props.isEmailAuth ? `255px` : `385px`)};
  display: flex;
  justify-content: center;
  align-items: center;

  input{
    width: ${((props:AuthInputStyleProps) => props.isRabel ? `280px` : props.isEmailAuth ? `215px` : `340px`)};
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: ${Palette.NEUTRAL_N50};
    color: ${Palette.NEUTRAL_N30};
    font-weight: 500;
    font-size: 16px;
    border: none;
    border-radius: 8px;
    padding: 0 ${((props:AuthInputStyleProps) => props.isRabel ? `50px` : `20px`)};

    ::placeholder{
      color: ${Palette.NEUTRAL_N30};
    }
    :focus{
      border: 1px solid ${Palette.PRIMARY_P10};
      color: ${Palette.NEUTRAL_N10};
    }
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  svg{
    position: absolute;
    top:15px;
    right:10px;
    cursor: pointer;
  }
  label{
    svg{
      left:10px;
    }
}

  @media (max-width: 420px) {
    width: ${((props:AuthInputStyleProps) => props.isRabel ? `90vw` : props.isEmailAuth ? `70vw` : `90vw`)};
    input {
      width: ${((props:AuthInputStyleProps) => props.isRabel ? `calc(90vw - 100px)` : props.isEmailAuth ? `50vw` : `calc(90vw - 40px)`)};
      margin: 0 auto;
    }
  } 
`;
import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { AuthInputStyleProps } from "types";

export const AuthInput = styled.div`
  position: relative;
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
    top:14px;
    right:10px;
    cursor: pointer;
  }
  label{
    svg{
      left:10px;
    }
}
`;

export const DeleteBtn = styled.div`
  position: absolute;
  top: 1px;
  right: 10px;
  border: 1px solid;
  width: 40px;
  height: 40px;
  
  border-radius: 50%;
  svg{
    cursor: pointer;
  }
`;
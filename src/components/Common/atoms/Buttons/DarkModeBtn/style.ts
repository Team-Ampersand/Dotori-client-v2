import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { DarkModeBtnStyleProps } from "types";

export const DarkModeButtonWrapper = styled.div`

    position: relative;
    width: 70px;
    height: 40px;
    border-radius: 43px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    background: ${Palette.NEUTRAL_N40};
`;


export const TogleIcon = styled.div`
    position: absolute;
    transition: all 0.2s ease-in-out;
    width: 33px;
    height: 33px;
    left: ${(props:DarkModeBtnStyleProps) => props.isDarkTheme ? '35px' : "3px"};
    display: flex;
    align-items: center;
    justify-content: center; 
    border-radius: 50%;

    svg{
        border-radius: 50%;
    }
`;
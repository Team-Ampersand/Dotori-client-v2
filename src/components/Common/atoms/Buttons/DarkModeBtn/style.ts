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

    @media (max-width: 420px) {
        width: 56px;
        height: 32px;
	}
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
        width: 31px;
    }

    @media (max-width: 420px) {
        left: ${(props:DarkModeBtnStyleProps) => props.isDarkTheme ? '24px' : "0px"};
        svg{
            width: 24px;
        }
	}
`;
import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { PromotionStyleProps } from "types";


export const DecsPartOverlay = styled.div`
    width: 100%;
    height: 100vh;
    background:  ${(props:PromotionStyleProps) => props.isShow ? 'rgba(0, 0, 0, 0.5)' : ""};
    backdrop-filter: ${(props:PromotionStyleProps) => props.isShow ? 'blur(20px)' : "blur(0px)"};
    z-index: 3;
    transition: all 1s ease-in;
    visibility: ${(props:PromotionStyleProps) => props.isShow ? 'visible' : "hidden"};
`;

export const DecsPartWrapper = styled.div`
    z-index: 3;
    position: absolute;
    top: ${(props:PromotionStyleProps) => props.isShow ? '0' : "80vh"};
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding-top: 30vh;
    justify-content: flex-start;
    color: ${Palette.BACKGROUND_CARD};
    transition: all 1.4s ease-out;
`;

export const PomotionTitle = styled.p`
    font-style: normal;
    font-weight: 900;
    font-size: 40px;

    @media (max-width: 950px) {
        font-size: 25px;
    }
    @media (max-width: 420px) {
        font-size: 20px;
    }
`;

export const GradationTitle = styled.span`
    background: linear-gradient(to right, #A2BCFF, #FFD2FB);
    color: transparent;
    background-clip: text;
`;

export const PomotionDesc = styled.div`
    font-weight: 500;
    font-size: 20px;
    display: flex;
    gap: 7px;
    flex-direction: column;
    align-items: center;

    @media (max-width: 950px) {
        font-size: 12px;
    }
    @media (max-width: 420px) {
        font-size: 10px;
    }
`;

export const SignInBtn = styled.div`
    width: 110px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background: ${Palette.PRIMARY_P10};
    border-radius: 8px;
    box-shadow: none;
    cursor: pointer;
    font-size: 16px;

    a{
        text-decoration: none;
        color: white;
    }

    @media (max-width: 950px) {
        width: 70px;
        height: 32px;
        font-size: 12px;
    }
    @media (max-width: 420px) {
        width: 60px;
        height: 27px;
        font-size: 10px;
    }
`;
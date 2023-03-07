import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const AuthFormWrapper = styled.div`
    width: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
    padding: 30px 0;

    @media (max-width: 420px) {
        width: 100%;
    }
`;

export const AuthBottomWrapper = styled.div`
    height: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N20};

    a{
        text-decoration: none;
        color: ${Palette.NEUTRAL_N10};
        padding: 0 5px;
        font-weight: 500;
        text-decoration: underline;
        text-underline-position: under;
        text-decoration-color: white;
    }
`;
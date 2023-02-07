import styled from "@emotion/styled";
import { Palette } from "../../../../styles/globals";

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    p{
        padding-top: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: ${Palette.NEUTRAL_N10};
    }
`;

export const GenderBtnsWrapper = styled.div`
    width: 100%;
    height: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${Palette.NEUTRAL_N50};
    border-radius: 8px;
    input{
        display: none;
    }
    input[type=radio]+label{
        transition: all 0.1s ease-in-out;
        width: 186px;
        height: 44px;
        display: flex;
        font-size: 1.3rem;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        background: ${Palette.NEUTRAL_N50};
        color: rgba(121, 121, 121, 0.8);
        cursor: pointer;
    }
    input[type=radio]:checked+label{
        background: ${Palette.BACKGROUND_CARD};
        color: ${Palette.PRIMARY_P10};
        border: 1px solid ${Palette.PRIMARY_P10};
        border-radius: 4px;
    }
`;

export const EmailCertiWrapper = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-between;
`;
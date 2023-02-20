import styled from "@emotion/styled";
import { Palette } from "styles/globals";

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 30px 0 40px 0;
    p{
        padding-top: 15px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        color: ${Palette.NEUTRAL_N10};
    }
`;

export const FormWrapper = styled.div`
    width: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: ${Palette.BACKGROUND_CARD};
    border-radius: 16px;
    gap: 40px;
    padding: 35px 0;
`;
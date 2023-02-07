import styled from "@emotion/styled";
import { Palette } from "../../../../styles/globals";

export const InputsWrapper = styled.div`
    height: 150px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: column;

    a{
        text-decoration: none;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: ${Palette.NEUTRAL_N20};
    }
`;

export const BottomWrapper = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: ${Palette.NEUTRAL_N20};

    a{
        text-decoration: none;
        color: ${Palette.NEUTRAL_N10};
        padding: 0 5px;
    }
`;
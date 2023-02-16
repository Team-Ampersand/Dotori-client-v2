import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { MenuOptionStyleProps } from "types";

export const PenaltyItemWrapper = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background: ${Palette.BACKGROUND_BG};
    padding: 15px;
    font-weight: 500;
    font-size: 16px;
    color: ${Palette.NEUTRAL_N10};
    border-radius: 8px;
`;

export const PenaltyItemDate = styled.span`
    font-weight: 500;
    font-size: 13px;
    color: ${Palette.NEUTRAL_N20};
`;
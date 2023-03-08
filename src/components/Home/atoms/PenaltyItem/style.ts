import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { MenuOptionStyleProps } from "types";

export const PenaltyItemWrapper = styled.div`
    width: calc(100% - 10px);
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${Palette.BACKGROUND_BG};
    padding: 15px;
    font-weight: 500;
    font-size: 16px;
    color: ${Palette.NEUTRAL_N10};
    border-radius: 8px;
    margin-right: 10px;
`;

export const PenaltyItemDate = styled.span`
    font-weight: 500;
    font-size: 13px;
    color: ${Palette.NEUTRAL_N20};
`;
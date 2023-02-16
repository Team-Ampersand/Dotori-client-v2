import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { MenuOptionStyleProps } from "types";

export const MenuOptionWrapper = styled.div`
    width: 200px;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: ${(paops:MenuOptionStyleProps) => paops.name === "프로필수정"||"로그아웃" ? "25px" : "8px"} 20px;
    background: ${Palette.BACKGROUND_CARD};
    border-bottom: 1px solid ${Palette.NEUTRAL_N40};
    font-weight: 600;
    font-size: 14px;
    color: ${Palette.NEUTRAL_N10};
    border-radius: ${(props:MenuOptionStyleProps) => props.name === "프로필수정" ? "16px 16px 0 0" : props.name === "로그아웃" ? "0 0 16px 16px" : "" };

    :hover{
        transition: all 0.3s ease-in-out;
        background: ${Palette.NEUTRAL_N50};
    }
`;
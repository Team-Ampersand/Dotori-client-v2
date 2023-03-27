import styled from "@emotion/styled";
import { Palette } from "styles/globals";
import { MenuOptionStyleProps } from "types";

export const MenuOptionWrapper = styled.div`
    width: 200px;
    height: 40px;
    cursor: pointer;
    display: ${(paops:MenuOptionStyleProps) => paops.name === "로그아웃" ? "none" : "flex"};
    align-items: center;
    padding: ${(paops:MenuOptionStyleProps) => paops.name === "프로필수정"||"비밀번호 변경" ? "25px" : "8px"} 20px;
    background: ${Palette.BACKGROUND_CARD};
    border-bottom: 1px solid ${Palette.NEUTRAL_N40};
    font-weight: 600;
    font-size: 14px;
    gap: 10px;
    color: ${Palette.NEUTRAL_N10};
    border-radius: ${(props:MenuOptionStyleProps) => props.name === "프로필수정" ? "16px 16px 0 0" : props.name === "비밀번호 변경" ? "0 0 16px 16px" : "" };

    :hover{
        transition: all 0.3s ease-in-out;
        background: ${Palette.NEUTRAL_N50};
    }

    svg{
        path{
            ${(paops:MenuOptionStyleProps) => paops.name !== "비밀번호 변경" ? `stroke: ${Palette.NEUTRAL_N20}` : ""} 
        }
        width: 25px;
        height: 20px;
        display: none;
    }

    @media (max-width: 420px) {
        width: 100vw;
        display: flex;
        border-radius: ${(props:MenuOptionStyleProps) =>  props.name === "로그아웃" ? "0 0 16px 16px" : "0" };
        svg{
            display: block;
        }
    }
`;